#!/bin/bash

# Run Python scripts
python3 manage_all_json.py
python3 update_readme.py

# Run Node.js script (assuming Node.js is installed)
node generate_readmes.js

echo "Pre-commit tasks completed!"
