// script.js
document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('menu').classList.remove('active');
});

let products = [
    {
        id: 1,
        title: "Товар 1",
        description: "Описание товара 1",
        image: "assets/product1.jpg"
    },
    {
        id: 2,
        title: "Товар 2",
        description: "Описание товара 2",
        image: "assets/product2.jpg"
    },
    // Добавьте другие товары
];

function loadProducts() {
    const container = document.getElementById('productContainer');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" width="180">
            <h3>${product.title}</h3>
        `;
        card.addEventListener('click', () => openModal(product));
        container.appendChild(card);
    });
}

function openModal(product) {
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').innerText = product.title;
    document.getElementById('modalDescription').innerText = product.description;
    document.getElementById('likeCount').innerText = '0 Likes';
    document.getElementById('commentsList').innerHTML = '';
    modal.style.display = 'block';
    loadComments(product.id);
    loadLikes(product.id);
}

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

function loadComments(productId) {
    // Здесь будет код для загрузки комментариев из Firebase
}

function loadLikes(productId) {
    // Здесь будет код для загрузки лайков из Firebase
}

loadProducts();
