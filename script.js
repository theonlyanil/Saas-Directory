function getProjectRoot() {
  // ... (existing code to determine script path)
}

async function fetchData() {
  const rootDir = getProjectRoot();
  const response = await fetch("https://theonlyanil.github.io/Saas-Directory/dir/all.json");
  return response.json();
}

async function populateWallOfSaas() {
  const productGrid = document.getElementById('product-grid');
  const data = await fetchData();

  data.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.logo}"   
   alt="${product.name} logo">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <a href="${product.link}" target="_blank">Learn More</a>
      <div class="category-tag">${product.category}</div>
    `;
    productGrid.appendChild(productCard);
  });
  
}

document.addEventListener('DOMContentLoaded', populateWallOfSaas);