"""
This script automates the generation of the "Saas" section in your README file based on the structure of your category JSON files.

It performs the following steps:

1. Retrieves the project root directory.
2. Generates category and subcategory data from the JSON files in the "dir" directory.
3. Sorts categories and subcategories alphabetically.
4. Creates markdown content for the "Saas" section, including links to category and subcategory README files.
5. Updates the README file with the generated "Saas" section.
"""

import os
import json

def get_project_root():
    # Get the directory of the script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Navigate up to the project root (assuming the script is in the 'scripts' folder)
    return os.path.dirname(script_dir)

def generate_saas_section():
    project_root = get_project_root()
    root_dir = os.path.join(project_root, 'dir')
    categories = []

    # Traverse the directory to gather categories, subcategories, and products
    for category in os.listdir(root_dir):
        category_path = os.path.join(root_dir, category)
        if os.path.isdir(category_path):
            category_data = read_json(os.path.join(category_path, f'{category}.json'))
            if category_data:
                subcategories = []
                for file in os.listdir(category_path):
                    if file.endswith('.json') and file != f'{category}.json':
                        subcat_data = read_json(os.path.join(category_path, file))
                        if subcat_data:
                            products = subcat_data.get('products', [])
                            subcategories.append({
                                'name': subcat_data['name'],
                                'file': file,
                                'products': products
                            })
                categories.append({
                    'name': category_data['name'],
                    'folder': category,
                    'subcategories': sorted(subcategories, key=lambda x: x['name'])
                })

    # Sort categories alphabetically by name
    categories.sort(key=lambda x: x['name'])

    # Generate the markdown
    markdown = "## Saas\n\n"
    for category in categories:
        markdown += f"- [{category['name']}](dir/{category['folder']})\n"
        for subcat in category['subcategories']:
            markdown += f"  - [{subcat['name']}](dir/{category['folder']}/{subcat['file']})\n"
            if subcat['products']:
                markdown += "    - **Products:**\n"
                for product in subcat['products']:
                    product_name = product.get('name', 'Unnamed Product')
                    product_link = product.get('link', '#')
                    product_desc = product.get('description', 'No description available.')
                    markdown += f"      - [{product_name}]({product_link}): {product_desc}\n"
    
    return markdown

def read_json(file_path):
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return None
    except json.JSONDecodeError:
        print(f"Error parsing JSON in file: {file_path}")
        return None

def update_readme(saas_section):
    readme_path = os.path.join(get_project_root(), 'README.md')
    try:
        with open(readme_path, 'r') as f:
            content = f.read()

        # Find the Saas section and replace it
        start_marker = "## Saas"
        end_marker = "##"  # Assuming the next section starts with ##
        start_index = content.find(start_marker)
        end_index = content.find(end_marker, start_index + len(start_marker))

        if start_index != -1 and end_index != -1:
            updated_content = content[:start_index] + saas_section + content[end_index:]
        else:
            # If the section doesn't exist, append it to the end
            updated_content = content + "\n\n" + saas_section

        with open(readme_path, 'w') as f:
            f.write(updated_content)

        print(f"README.md has been updated successfully at {readme_path}")
    except FileNotFoundError:
        print(f"README.md not found at {readme_path}")
    except IOError as e:
        print(f"Error updating README.md: {e}")

if __name__ == "__main__":
    saas_section = generate_saas_section()
    update_readme(saas_section)
