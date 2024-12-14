import csv
import json
import os
import sys
from datetime import datetime
import uuid
import http.server
import socketserver
from urllib.parse import parse_qs, urlparse
from http import HTTPStatus
import threading
import time
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

class DataManager:
    def __init__(self, data_dir="data"):
        self.data_dir = data_dir
        self.processed_files = set()
        os.makedirs(data_dir, exist_ok=True)
        self.load_processed_files()

    def load_processed_files(self):
        try:
            with open(os.path.join(self.data_dir, 'processed_files.json'), 'r') as f:
                self.processed_files = set(json.load(f))
        except FileNotFoundError:
            self.processed_files = set()

    def save_processed_files(self):
        with open(os.path.join(self.data_dir, 'processed_files.json'), 'w') as f:
            json.dump(list(self.processed_files), f)

    def process_csv(self, csv_file):
        if csv_file in self.processed_files:
            logging.info(f"File {csv_file} already processed")
            return None

        content_items = []
        try:
            with open(csv_file, 'r', encoding='utf-8') as file:
                reader = csv.DictReader(file)
                for row in reader:
                    try:
                        content_item = self.create_content_item(row)
                        if content_item:
                            content_items.append(content_item)
                    except Exception as e:
                        logging.error(f"Error processing row: {row}")
                        logging.error(f"Error message: {str(e)}")
                        continue

            if content_items:
                self.processed_files.add(csv_file)
                self.save_processed_files()
                return content_items
            
        except Exception as e:
            logging.error(f"Error processing file {csv_file}: {str(e)}")
        
        return None

    def create_content_item(self, row):
        required_fields = ['title', 'image_url', 'category', 'type']
        for field in required_fields:
            if field not in row or not row[field]:
                raise ValueError(f"Missing required field: {field}")

        valid_types = ['basic', 'detailed', 'trivia']
        if row['type'] not in valid_types:
            raise ValueError(f"Invalid content type: {row['type']}")

        content_item = {
            'id': str(uuid.uuid4()),
            'title': row['title'].replace("'", "\\'"),  # Escape single quotes
            'image_url': row['image_url'],
            'category': row['category'],
            'type': row['type'],
            'likes': int(row.get('likes', 0)),
            'dislikes': int(row.get('dislikes', 0)),
            'created_at': row.get('created_at', datetime.now().isoformat())
        }

        if row['type'] == 'detailed':
            content_item['description'] = row['description'].replace("'", "\\'")
        elif row['type'] == 'trivia':
            if not row.get('options') or not row.get('correct_answer'):
                raise ValueError("Trivia content must have options and correct_answer")
            content_item.update({
                'description': row['description'].replace("'", "\\'"),
                'options': json.loads(row['options']),
                'correct_answer': int(row['correct_answer'])
            })

        return content_item

class DataUpdateHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, data_manager=None, **kwargs):
        self.data_manager = data_manager
        super().__init__(*args, **kwargs)

    def do_GET(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path == '/update':
            self.handle_update()
        else:
            self.send_error(HTTPStatus.NOT_FOUND)

    def handle_update(self):
        try:
            csv_files = [f for f in os.listdir('data/input') if f.endswith('.csv')]
            updates = []
            
            for csv_file in csv_files:
                file_path = os.path.join('data/input', csv_file)
                content_items = self.data_manager.process_csv(file_path)
                if content_items:
                    updates.extend(content_items)

            response = {
                'status': 'success',
                'updates': updates,
                'timestamp': datetime.now().isoformat()
            }

            self.send_response(HTTPStatus.OK)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(response).encode())

        except Exception as e:
            self.send_error(
                HTTPStatus.INTERNAL_SERVER_ERROR,
                message=str(e)
            )

def run_server(port=8000):
    data_manager = DataManager()
    
    # Create handler with data manager
    handler = lambda *args: DataUpdateHandler(*args, data_manager=data_manager)
    
    with socketserver.TCPServer(("", port), handler) as httpd:
        logging.info(f"Server running on port {port}")
        httpd.serve_forever()

if __name__ == "__main__":
    # Create necessary directories
    os.makedirs("data/input", exist_ok=True)
    
    try:
        run_server()
    except KeyboardInterrupt:
        logging.info("Server stopped by user")
        sys.exit(0)