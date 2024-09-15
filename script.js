async function fetchData() {
  const response = await fetch("https://theonlyanil.github.io/Saas-Directory/dir/all.json");
  return response.json();
}

async function populateWallOfSaas() {
  const productGrid = document.getElementById('product-grid');
  const data = await fetchData();

  data.forEach(product => {
    // Read template content
    const template = document.getElementById('product-card-template').content;

    // Clone the template to avoid modifying the original
    const productCard = template.cloneNode(true);

    // Access elements within the cloned template
    const productLink = productCard.querySelector('.product-logo');
    productLink.href = product.link;
    const logoImage = productLink.querySelector('img');
    logoImage.src = product.logo;
    logoImage.alt = `${product.name} logo`;
    const productName = productCard.querySelector('h3');
    productName.textContent = product.name;
    const productDescription = productCard.querySelector('p');
    productDescription.textContent = product.description;

    // Add the product card to the grid
    productGrid.appendChild(productCard);
  });

  
  
}

document.addEventListener('DOMContentLoaded', populateWallOfSaas);