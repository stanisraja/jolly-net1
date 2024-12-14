import csv
import json
import sys
from datetime import datetime
import uuid

def validate_content(row):
    """Validate required fields and data types."""
    required_fields = ['title', 'image_url', 'category', 'type']
    for field in required_fields:
        if field not in row or not row[field]:
            raise ValueError(f"Missing required field: {field}")
    
    # Validate content type
    valid_types = ['basic', 'detailed', 'trivia']
    if row['type'] not in valid_types:
        raise ValueError(f"Invalid content type: {row['type']}")
    
    # Validate trivia content
    if row['type'] == 'trivia':
        if not row.get('options') or not row.get('correct_answer'):
            raise ValueError("Trivia content must have options and correct_answer")

def convert_csv_to_json(csv_file):
    """Convert CSV file to IndexedDB-compatible JSON format."""
    content_items = []
    
    with open(csv_file, 'r', encoding='utf-8') as file:
        # Use pipe delimiter instead of comma
        reader = csv.DictReader(file, delimiter='|')
        for row in reader:
            try:
                # Clean and validate the row
                validate_content(row)
                
                # Create base content item
                content_item = {
                    'id': str(uuid.uuid4()),
                    'title': row['title'],
                    'image_url': row['image_url'],
                    'category': row['category'],
                    'type': row['type'],
                    'likes': int(row.get('likes', 0)),
                    'dislikes': int(row.get('dislikes', 0)),
                    'created_at': row.get('created_at', datetime.now().isoformat())
                }
                
                # Add type-specific fields
                if row['type'] == 'detailed':
                    content_item['description'] = row['description']
                elif row['type'] == 'trivia':
                    content_item.update({
                        'description': row['description'],
                        'options': json.loads(row['options']),
                        'correct_answer': int(row['correct_answer'])
                    })
                
                content_items.append(content_item)
                
            except (ValueError, json.JSONDecodeError) as e:
                print(f"Error processing row: {row}")
                print(f"Error message: {str(e)}")
                continue
    
    return content_items

def main():
    if len(sys.argv) != 3:
        print("Usage: python csv_to_indexeddb.py input.csv output.json")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    try:
        content_items = convert_csv_to_json(input_file)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(content_items, f, indent=2)
        
        print(f"Successfully converted {len(content_items)} items to {output_file}")
        
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()