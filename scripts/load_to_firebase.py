import firebase_admin
from firebase_admin import credentials, firestore
import csv
import json
from datetime import datetime
import uuid
import sys
import html

def init_firebase():
    """Initialize Firebase Admin SDK"""
    try:
        cred = credentials.Certificate('firebase-credentials.json')
        firebase_admin.initialize_app(cred)
        return firestore.client()
    except Exception as e:
        print(f"Failed to initialize Firebase: {str(e)}")
        sys.exit(1)

def clean_text(text):
    """Clean and escape text content"""
    if not text:
        return text
    if isinstance(text, str):
        # First unescape any HTML entities that might be present
        text = html.unescape(text)
        # Then escape single quotes for Firebase
        return text.replace("'", "''")
    return text

def validate_content(row):
    """Validate required fields and data types."""
    required_fields = ['title', 'image_url', 'category', 'type']
    missing_fields = [field for field in required_fields if not row.get(field)]
    if missing_fields:
        raise ValueError(f"Missing required fields: {', '.join(missing_fields)}")
    
    valid_types = ['basic', 'detailed', 'trivia']
    if row['type'] not in valid_types:
        raise ValueError(f"Invalid content type: {row['type']}")
    
    if row['type'] == 'trivia':
        if not row.get('options') or not row.get('correct_answer'):
            raise ValueError("Trivia content must have options and correct_answer")
        try:
            if isinstance(row['options'], str):
                json.loads(row['options'])
        except json.JSONDecodeError:
            raise ValueError("Invalid JSON format for options")

def load_csv_to_firebase(csv_file, db):
    """Load CSV data into Firebase"""
    batch = db.batch()
    count = 0
    errors = 0
    batch_size = 500  # Firestore batch limit

    print(f"Reading CSV file: {csv_file}")
    
    with open(csv_file, 'r', encoding='utf-8') as file:
        # Use pipe delimiter instead of comma
        reader = csv.DictReader(file, delimiter='|')
        for row_num, row in enumerate(reader, start=1):
            try:
                # Clean empty strings
                row = {k: v.strip() if isinstance(v, str) else v for k, v in row.items()}
                row = {k: v for k, v in row.items() if v != ""}
                
                validate_content(row)
                
                doc_ref = db.collection('content').document(str(uuid.uuid4()))
                content_item = {
                    'title': clean_text(row['title']),
                    'image_url': row['image_url'],
                    'category': row['category'],
                    'type': row['type'],
                    'likes': int(row.get('likes', 0)),
                    'dislikes': int(row.get('dislikes', 0)),
                    'created_at': datetime.now()
                }

                if row['type'] == 'detailed' and 'description' in row:
                    content_item['description'] = clean_text(row['description'])
                elif row['type'] == 'trivia':
                    options = row['options']
                    if isinstance(options, str):
                        options = json.loads(options)
                    cleaned_options = [clean_text(opt) for opt in options]
                    
                    content_item.update({
                        'description': clean_text(row['description']),
                        'options': cleaned_options,
                        'correct_answer': int(row['correct_answer'])
                    })

                batch.set(doc_ref, content_item)
                count += 1

                if count % batch_size == 0:
                    batch.commit()
                    batch = db.batch()
                    print(f"Committed {count} documents")

            except Exception as e:
                errors += 1
                print(f"Error processing row {row_num}:")
                print(f"Row content: {row}")
                print(f"Error message: {str(e)}")
                continue

    if count % batch_size != 0:
        batch.commit()
    
    print(f"\nSummary:")
    print(f"Successfully loaded {count} items to Firebase")
    if errors > 0:
        print(f"Encountered {errors} errors during processing")

def main():
    if len(sys.argv) != 2:
        print("Usage: python load_to_firebase.py input.csv")
        print("\nMake sure your CSV file has the following columns:")
        print("title|image_url|category|type|description|options|correct_answer|likes|dislikes")
        sys.exit(1)

    input_file = sys.argv[1]
    
    try:
        print("Initializing Firebase...")
        db = init_firebase()
        print("Loading data to Firebase...")
        load_csv_to_firebase(input_file, db)
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()