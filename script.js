const productFeed = document.getElementById('product-feed');
const products = [];

async function loadProducts() {
    const response = await fetch('products/clothing.js');
    const data = await response.json();
    products.push(...data);
    renderProducts();
}

function renderProducts() {
    productFeed.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image"></div>
            <h3 class="product-title">${product.title}</h3>
        `;
        card.addEventListener('click', () => showProductDetails(product));
        productFeed.appendChild(card);
    });
}

function showProductDetails(product) {
    const details = document.createElement('div');
    details.className = 'product-details';
    details.innerHTML = `
        <div class="product-images"></div>
        <div class="product-info"></div>
    `;
    // Добавьте логику для отображения деталей продукта
    document.body.appendChild(details);
}

loadProducts();
