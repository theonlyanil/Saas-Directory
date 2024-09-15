import os
import json

def get_project_root():
    # Get the directory of the script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Navigate up to the project root (assuming the script is in the 'scripts' folder)
    return os.path.dirname(script_dir)

def generate_all_json(dir_path):
  """
  Generates an all.json file containing all SaaS products from the given directory and a README.md file summarizing the products.

  Args:
    dir_path: The path to the directory containing category and subcategory JSON files.
  """

  all_products = []

  for category in os.listdir(dir_path):
    category_path = os.path.join(dir_path, category)
    if os.path.isdir(category_path):
      subcategory_json_files = [f for f in os.listdir(category_path) if f.endswith('.json') and f != f"{category}.json"]
      for subcategory_json_file in subcategory_json_files:
        subcategory_path = os.path.join(category_path, subcategory_json_file)
        with open(subcategory_path, 'r') as f:
          subcategory_data = json.load(f)

        for product in subcategory_data.get('products', []):
          product['category'] = category  # Add category information to the product
          all_products.append(product)

  # Generate README.md
  readme_content = "# Open-Source SaaS Directory\n\nThis directory curates a comprehensive list of open-source SaaS tools categorized for easy browsing.\n\n"

  for category in set(product['category'] for product in all_products):
    readme_content += f"## {category.title()}\n\n"
    for product in all_products:
      if product['category'] == category:
        readme_content += f"- **{product['name']}**\n"
        readme_content += f"  - Description: {product['description']}\n"
        readme_content += f"  - Logo: {product['logo']}\n"
        readme_content += f"  - Link: {product['link']}\n"
        readme_content += f"  - Pricing: {product['pricing']}\n\n"

  readme_path = os.path.join(dir_path, "README.md")
  with open(readme_path, 'w') as f:
    f.write(readme_content)

  # Write all.json
  with open(os.path.join(dir_path, 'all.json'), 'w') as f:
    json.dump(all_products, f, indent=2)

# Replace 'your/dir/path' with the actual path to your directory
project_root = get_project_root()
root_dir = os.path.join(project_root, 'dir')
generate_all_json(root_dir)

# RUN
project_root = get_project_root()
root_dir = os.path.join(project_root, 'dir')
generate_all_json(root_dir)