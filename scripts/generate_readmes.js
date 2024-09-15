/*
  Using JS for better error handling if a variable is missing.

  run node generate_readmes.js to generate a readme in each category folder.
*/

const fs = require('fs');
const path = require('path');

// Function to generate README.md for a category
function generateReadmeForCategory(categoryDir) {
  const categoryJsonPath = path.join(categoryDir, `${path.basename(categoryDir)}.json`);
  
  // Load category metadata
  if (!fs.existsSync(categoryJsonPath)) {
    console.error(`Category metadata file not found: ${categoryJsonPath}`);
    return;
  }
  const categoryMeta = JSON.parse(fs.readFileSync(categoryJsonPath, 'utf-8'));

  // Start building the README content
  let readmeContent = `# ${categoryMeta.name}\n\n`;
  readmeContent += `${categoryMeta.description}\n\n`;
  readmeContent += `## Tags\n`;
  readmeContent += categoryMeta.tags.map(tag => `- ${tag}`).join('\n');
  readmeContent += `\n\n## Subcategories\n`;

  // Iterate over subcategories (JSON files) in the directory
  const subcategoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.json') && file !== `${path.basename(categoryDir)}.json`);
  
  subcategoryFiles.forEach(file => {
    const subcategoryPath = path.join(categoryDir, file);
    const subcategoryMeta = JSON.parse(fs.readFileSync(subcategoryPath, 'utf-8'));
    
    readmeContent += `### ${subcategoryMeta.name}\n`;
    readmeContent += `![${subcategoryMeta.name} icon](${subcategoryMeta.icon})\n\n`;
    readmeContent += `${subcategoryMeta.description}\n\n`;
    readmeContent += `${subcategoryMeta.description}\n\n`;
    readmeContent += `#### Products:\n`;
    
    // List all products
    subcategoryMeta.products.forEach(product => {
      readmeContent += `- [${product.name}](${product.link}): ${product.description}\n`;
    });
    readmeContent += `\n`;
  });

  // Write the content to README.md
  const readmePath = path.join(categoryDir, 'README.md');
  fs.writeFileSync(readmePath, readmeContent);
  console.log(`Generated README.md for ${categoryMeta.name}`);
}

// Main function to generate READMEs for all categories
function generateAllReadmes() {
  const dataDir = path.join(__dirname, '..', 'dir');
  const categories = fs.readdirSync(dataDir).filter(file => fs.lstatSync(path.join(dataDir, file)).isDirectory());

  categories.forEach(category => {
    generateReadmeForCategory(path.join(dataDir, category));
  });
}

generateAllReadmes();
