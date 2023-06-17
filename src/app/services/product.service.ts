import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/article/article.model';
import { DrinkType } from '../enums/drink-type.enum';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [];

    constructor() {
        const productData = [
            {
                name: 'San Miguel 33cl',
                image: '../../../assets/sanmiguel33.jpg',
                stock: 49,
                price: 1.99,
                rating: 4.5,
                category: DrinkType.Cerveza
            },
            {
                name: 'Estrella Damm 33cl',
                image: '../../../assets/estrelladamm.jpg',
                stock: 15,
                price: 2.99,
                rating: 3.8,
                category: DrinkType.Cerveza
            },
            {
                name: 'Estrella Galicia 33cl',
                image: '../../../assets/estrellagalicia.jpg',
                stock: 0,
                price: 3.99,
                rating: 3.8,
                category: DrinkType.Cerveza
            },
        ];

        this.products = productData.map(data => this.createProduct(data));
    }

    createProduct(data: any): Product {
        let product = new Product();
        product.name = data.name;
        product.image = data.image;
        product.stock = data.stock;
        product.price = data.price;
        product.rating = data.rating;
        product.category = data.category;
        product.inventoryStatus = product.stock < 1 ? "OUTOFSTOCK" : product.stock > 36 ? "IN_STOCK" : "LOWSTOCK";
        product.severity = this.getSeverity(product);
        return product;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'IN_STOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return '';
        }
    }
}
