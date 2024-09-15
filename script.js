async function fetchData() {
  const response = await fetch("https://theonlyanil.github.io/Saas-Directory/dir/all.json");
  return response.json();
}

async function populateWallOfSaas() {
  const productGrid = document.getElementById('product-grid');
  const data = await fetchData();

  data.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
  
    // Create a container for logo and hover content
    const productContent = document.createElement('div');
    productContent.className = 'product-content';
  
    // Logo with link
    const productLogo = document.createElement('a');
    productLogo.href = product.link;
    productLogo.target = '_blank';
    const logoImage = document.createElement('img');
    logoImage.src = product.logo;
    logoImage.alt = `${product.name} logo`;
    productLogo.appendChild(logoImage);
  
    // Hover content (initially hidden)
    const hoverCaption = document.createElement('div');
    hoverCaption.className = 'product-caption';
    hoverCaption.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    `;
  
    // Add elements to the structure
    productContent.appendChild(productLogo);
    productContent.appendChild(hoverCaption);
    productCard.appendChild(productContent);
  
    // Add product to grid
    productGrid.appendChild(productCard);
  });
  
  
}

document.addEventListener('DOMContentLoaded', populateWallOfSaas);