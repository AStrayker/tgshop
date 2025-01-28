from flask import Flask, render_template, jsonify, request
import os

app = Flask(__name__)

# Пример данных о товарах
products = [
    {
        "id": 1,
        "title": "Куртка зимняя",
        "image": "https://ager.ua/image/cachewebp/catalog/import_files/1e/72992fb7-e030-11e0-80a9-0015c56feef5/1eb1b54d-c1d4-11ee-8588-d8cb8a9c13c3-414x620.webp",
        "description": "Теплая зимняя куртка с отличной защитой от холода.",
        "details": ["Материал: 100% полиэстер", "Цвет: Черный", "Размеры: S, M, L, XL"]
    },
    {
        "id": 2,
        "title": "Куртка летняя",
        "image": "https://ager.ua/image/cachewebp/catalog/import_files/40/feee7c9d-e02c-11e0-80a9-0015c56feef5/40552647-bb8b-11ee-8588-d8cb8a9c13c3-6-414x620.webp",
        "description": "Легкая куртка для прохладных летних вечеров.",
        "details": ["Материал: Хлопок", "Цвет: Бежевый", "Размеры: S, M, L"]
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
