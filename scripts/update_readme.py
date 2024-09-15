import os

def update_readme(readme_path, category_dir):
  """
  Updates the "Saas Categories" section of the README with links to category JSON files.

  Args:
    readme_path: Path to the README file (relative to the script).
    category_dir: Path to the directory containing category JSON files (relative to the script).
  """
  # Get the absolute path to the script's directory
  script_dir = os.path.dirname(os.path.abspath(__file__))

  # Construct absolute paths based on the script's directory
  readme_path = os.path.join(script_dir, "..", readme_path)
  category_dir = os.path.join(script_dir, "..", category_dir)

  # ... (rest of the code remains the same)

# Replace with your actual category directory name
category_dir = "dir"

update_readme("README.md", category_dir)

print("README file updated successfully!")