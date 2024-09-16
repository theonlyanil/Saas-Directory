## **Contributing Guidelines**

**Thank you for your interest in contributing to our open-source SaaS directory!** Your contributions are invaluable to helping us maintain a comprehensive and up-to-date resource for the developer community.

### **How to Contribute**

1. **Fork the repository:** Create a fork of the main repository on GitHub.
2. **Create a new branch:** Create a new branch from the main branch to isolate your changes.
3. **Make your changes:** Make your changes to the codebase, following the existing style guidelines.
4. **Test your changes:** Thoroughly test your changes to ensure they work as expected.
5. **Commit your changes:** Commit your changes to your branch, using descriptive commit messages.
6. **Submit a pull request:** Submit a pull request to the main repository, explaining your changes and addressing any feedback.

### **Code Style Guidelines**

* **Indentation:** Use consistent indentation (e.g., 4 spaces).
* **Naming conventions:** Use clear and descriptive names for variables, functions, and files.
* **Comments:** Add comments to explain complex code or non-obvious logic.
* **Formatting:** Follow consistent formatting rules (e.g., line length, spacing).

### **Adding New Products/SaaS/Tools**

To add a new product, follow these steps:

1. **Find the appropriate category:** Determine the category or subcategory where the product belongs. If it doesn't exist, create a new directory mentioning the category.
2. **Update the subcategory JSON file:** Locate the subcategory JSON file within the `dir` folder that corresponds to the desired category. Add a new entry to the "products" array within this file, providing the product's name, description, logo, link, pricing, and any other relevant details.

**Example:**

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

### **Reviewing Pull Requests**

Pull requests will be reviewed by the project maintainers. Please be prepared to address any feedback or suggestions.

### **Additional Tips**

* **Keep your changes focused:** Avoid making multiple unrelated changes in a single pull request.
* **Follow the project's issue tracker:** If you encounter a bug or have a feature request, please create an issue.
* **Be respectful and constructive:** Engage in respectful and constructive discussions with other contributors.

**By following these guidelines, you can help contribute to the growth and success of our SaaS directory.** Thank you for your support!
