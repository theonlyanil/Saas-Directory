
# SaaS Directory: Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Directory Structure](#directory-structure)
5. [Installation](#installation)
6. [Adding New Products/SaaS/Tools](#adding-new-products-saas-tools)
7. [Backend Architecture](#backend-architecture)
8. [Frontend Architecture](#frontend-architecture)
9. [Contributing](#contributing)
10. [Future Plans](#future-plans)

---

## Project Overview

**SaaS Directory** is an open-source project aimed at curating a categorized directory of SaaS products. The backend data is stored directly on GitHub using JSON files, allowing users to contribute by adding or modifying SaaS entries through GitHub pull requests. The directory itself is open-source to enable community-driven contributions without needing sign-ups or user management systems.

The project focuses on:
- Providing a categorized view of SaaS products.
- Allowing users to create and modify categories, subcategories, and entries.
- Rendering a beautiful, responsive frontend that displays the SaaS entries from JSON files stored in the GitHub repository.

---

## Features

- **Categorized Listings**: Products are categorized into main categories and subcategories, making it easy to explore SaaS tools based on functionality.
- **User Contributions**: Users can easily contribute by adding new SaaS entries or modifying existing ones via GitHub pull requests.
- **Open-source JSON Backend**: Data is stored in JSON format directly in the repository, allowing for transparency and easy modification.
- **Dynamic Frontend**: The frontend dynamically fetches and displays SaaS products without requiring a database.
- **Fallback for Missing Logos**: When a product logo is not provided, the product name is displayed instead.

---

## Tech Stack

#### Frontend:
- **HTML**: For structuring the web pages.
- **CSS**: Custom styling for a clean and modern UI.
- **JavaScript (Vanilla)**: For dynamically fetching and rendering SaaS data from JSON files.
- **GitHub Pages**: For hosting the frontend.

#### Backend (Data Management):
- **GitHub (JSON)**: The backend is handled entirely via JSON files that are stored and managed on GitHub.

#### Version Control:
- **GitHub**: Used for project hosting, version control, and contributions via pull requests.

### Automation

For the Wall of SaaS front page, the all.json file is also generated through these scripts as part of the automation process.


---

## Directory Structure

```bash
Saas-Directory/
├── /dir/                        # Main folder for all data
│   ├── /categories/             # Folder for category-specific JSON files
│   └── all.json                 # Single JSON file listing all products
├── /scripts/                    # Folder for utility scripts (future use)
├── /styles.css                  # CSS for styling the frontend
├── /index.html                  # The main HTML file
├── /script.js                   # JavaScript to populate the frontend
├── CONTRIBUTING.md              # Contribution guidelines
└── README.md                    # Project documentation
```

---

## Installation

1. **Fork the Repository**: To get started, first fork the repository to your GitHub account.
2. **Clone the Repo**: Clone the repository to your local machine.

   ```bash
   git clone https://github.com/theonlyanil/Saas-Directory.git
   ```

3. **Run Locally**: Open `index.html` in a browser to see the website locally. No additional setup is required as all the data fetching is done from GitHub Pages.

4. **Edit JSON Files**: Add or modify entries in the `/dir/` folder to update the SaaS directory.

---

## Adding New Products/SaaS/Tools

To add a new product or tool, follow these steps:

1. **Find the Appropriate Category**:
   - Browse through the existing categories and subcategories to determine where the product fits. Categories are stored in `/dir/categories/`.
   - If a category or subcategory doesn't exist, create a new one by adding a new directory and updating the category’s JSON file.

2. **Update the Subcategory JSON File**:
   - Navigate to the appropriate subcategory JSON file in `/dir/categories/`. Each subcategory contains an array of products.
   - Add a new entry to the `products` array within this file, specifying the product details like name, description, logo, and link.

Example JSON entry:
```json
{
  "name": "Django Subcategory",
  "description": "A brief description of the subcategory.",
  "products": [
    {
      "name": "Your Product Name",
      "description": "A brief description of your product.",
      "logo": "https://example.com/your-product-logo.png",
      "link": "https://www.your-product-website.com",
      "pricing": "Paid Plans"
    }
  ]
}
```

3. **Submit a Pull Request**:
   - After updating the JSON file, commit the changes and push them to your forked repository. Create a pull request for review.

---

## Backend Architecture

The backend is entirely file-based, using JSON files to store all data. It leverages GitHub for version control and data management, making it easy for users to add or modify SaaS entries through pull requests.

- **Categories**: Represented by directories in `/dir/categories/`. Each category has a `category.json` file containing metadata and a list of subcategories.
- **Subcategories**: Each subcategory has its own JSON file that contains the list of products/tools.
- **Products**: Products are entries in the subcategory JSON files. Each product includes fields for the name, description, logo URL, link, and pricing information.

---

## Frontend Architecture

The frontend is a static website hosted on GitHub Pages, and it dynamically fetches and displays SaaS entries using JavaScript.

- **Dynamic Data Fetching**: The frontend uses `fetch()` to load JSON data from the repository and dynamically populate the product grid on the webpage.
- **Template System**: A simple HTML template is used to create product cards for each SaaS entry. JavaScript clones and populates this template based on the data fetched from the JSON files.
- **Fallback for Missing Logos**: If a product does not have a logo, the product name is displayed instead, styled accordingly.

---

## Contributing

Contributions are welcome! Here’s how you can help:

1. **Fork the Repository**: Click the "Fork" button at the top right of this page to create a copy of the repository on your GitHub account.
2. **Clone Your Fork**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/theolyanil/Saas-Directory.git
   ```

3. **Make Changes**: Modify or add new SaaS entries in the appropriate JSON files.
4. **Pre-commit**: When you commit, there's a pre-commit file in ./github which runs all the scripts ensuring that the JSON data is processed and relevant README files are created.
5. **Submit a Pull Request**: Push your changes to your forked repository and submit a pull request for review.

Refer to the `CONTRIBUTING.md` file for detailed guidelines on how to contribute.

---

## Future Plans

- **Search Functionality**: Implement a search feature to allow users to quickly find SaaS tools.
- **Improved Category Management**: Add support for automated category and subcategory creation via the frontend.
- **Pagination and Filters**: Add pagination for better user experience when the number of entries grows.
- **User Voting System**: Allow users to upvote their favorite SaaS products.
- **More Data Fields**: Expand the product schema to include additional fields like ratings, reviews, and feature lists.

---

## License

This project is open-source and licensed under the MIT License. See the `LICENSE` file for more details.

---

By contributing to this project, you’re helping build a comprehensive, community-driven SaaS directory that benefits developers, product managers, and users looking for the best tools in the market.
