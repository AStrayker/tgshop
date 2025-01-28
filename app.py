from flask import Flask, render_template, jsonify, request
import os

app = Flask(__name__)

# Пример данных о товарах
products = [
    {
        "id": 1,
        "title": "Куртка зимняя",
        "image": "/static/images/jacket1.jpg",
        "link": "https://vm.tiktok.com/ZMkXxyWWy/",
        "description": "Теплая зимняя куртка с отличной защитой от холода.",
        "details": ["Материал: 100% полиэстер", "Цвет: Черный", "Размеры: S, M, L, XL"]
    },
    {
        "id": 2,
        "title": "Куртка летняя",
        "image": "/static/images/jacket2.jpg",
        "link": "https://vm.tiktok.com/ZMkXxyWWy/",
        "description": "Легкая куртка для прохладных летних вечеров.",
        "details": ["Материал: Хлопок", "Цвет: Бежевый", "Размеры: S, M, L"]
    },
    {
        "id": 3,
        "title": "Куртка демисезонная",
        "image": "/static/images/jacket3.jpg",
        "link": "https://vm.tiktok.com/ZMkXxyWWy/",
        "description": "Универсальная куртка для любой погоды.",
        "details": ["Материал: Нейлон", "Цвет: Синий", "Размеры: S, M, L, XL"]
    }
    # Добавь больше товаров
]

@app.route('/')
def index():
    return render_template('index.html', products=products)

@app.route('/product/<int:product_id>')
def product(product_id):
    product = next((item for item in products if item["id"] == product_id), None)
    if product:
        return render_template('product.html', product=product)
    return jsonify({"error": "Product not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
