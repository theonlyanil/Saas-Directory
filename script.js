
async function fetchCategories() {
    const response = await fetch('dir');
    const data = await response.json(); // Parse directory JSON directly
    return data.filter(item => item.type === 'category'); // Assuming "type" is used to identify categories
  }
  
  async function fetchProducts(category) {
    const response = await fetch(`dir/${category}`);
    const data = await response.json();
    return data.products || []; // Return empty array if no "products" property exists
  }
  
  async function populateWallOfSaas() {
    const productGrid = document.getElementById('product-grid');
    const categories = await fetchCategories();
    
    for (const category of categories) {
      const products = await fetchProducts(category.name); // Use category name from fetched data
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.logo || ''}" alt="${product.name} logo">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank">Learn More</a>
            <div class="category-tag">${product.category || category.name}</div>  `;
        productGrid.appendChild(productCard);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', populateWallOfSaas);