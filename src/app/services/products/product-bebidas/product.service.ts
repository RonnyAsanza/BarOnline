import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/article/article.model';
import { DrinkType } from '../../../enums/drink-type.enum';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [];

    constructor() {
        //Sustituir por llamada al servidor
        const productData = [
            //Cerveza
            {
                id: 1,
                name: 'San Miguel 33 CL',
                image: '../../../assets/Cerveza/sanmiguel33.jpg',
                stock: 49,
                price: 1.99,
                rating: 4.5,
                category: DrinkType.Cerveza
            },
            {
                id: 2,
                name: 'Estrella Damm 33 CL',
                image: '../../../assets/Cerveza/estrelladamm.jpg',
                stock: 15,
                price: 2.99,
                rating: 3.8,
                category: DrinkType.Cerveza
            },
            {
                id: 3,
                name: 'Estrella Galicia 33 CL',
                image: '../../../assets/Cerveza/estrellagalicia.jpg',
                stock: 0,
                price: 3.99,
                rating: 3.8,
                category: DrinkType.Cerveza
            },

            //Whisky
            {
                id: 4,
                name: 'Jack Daniels 70 CL',
                image: '../../../assets/Whisky/jackdaniels07.jpg',
                stock: 50,
                price: 24.99,
                rating: 3.8,
                category: DrinkType.Whisky
            },
            {
                id: 5,
                name: 'Red Label 70 CL',
                image: '../../../assets/Whisky/redlabel07.jpg',
                stock: 20,
                price: 24.99,
                rating: 4.5,
                category: DrinkType.Whisky
            },
            {
                id: 6,
                name: 'Ballantines 1 L',
                image: '../../../assets/Whisky/ballantines1l.jpg',
                stock: 10,
                price: 19.99,
                rating: 3.7,
                category: DrinkType.Whisky
            },
            {
                id: 7,
                name: 'J&B 1 L',
                image: '../../../assets/Whisky/j&b1l.jpg',
                stock: 50,
                price: 24.99,
                rating: 5,
                category: DrinkType.Whisky
            },

            //Ron
            {
                id: 8,
                name: 'Barcardí Blanco 1 L',
                image: '../../../assets/Ron/bacardiblanco1l.jpg',
                stock: 50,
                price: 24.99,
                rating: 5,
                category: DrinkType.Ron
            },
            {
                id: 9,
                name: 'Barcardí Oro 70 CL',
                image: '../../../assets/Ron/bacardioro70cl.jpg',
                stock: 50,
                price: 29.99,
                rating: 5,
                category: DrinkType.Ron
            },
            {
                id: 10,
                name: 'Barcelo 70 CL',
                image: '../../../assets/Ron/barcelo70cl.jpg',
                stock: 20,
                price: 19.99,
                rating: 3.5,
                category: DrinkType.Ron
            },
            {
                id: 11,
                name: 'Negrita 70 CL',
                image: '../../../assets/Ron/negrita70cl.jpg',
                stock: 20,
                price: 19.99,
                rating: 3.5,
                category: DrinkType.Ron
            },
            {
                id: 12,
                name: 'Brugalanejo 1 L',
                image: '../../../assets/Ron/brugalanejo1l.jpg',
                stock: 20,
                price: 24.99,
                rating: 4,
                category: DrinkType.Ron
            },

            //Ginebra
            {
                id: 13,
                name: 'Brugalanejo 1 L',
                image: '../../../assets/Ron/brugalanejo1l.jpg',
                stock: 20,
                price: 24.99,
                rating: 4,
                category: DrinkType.Ginebra
            },

            //Vodka
            {
                id: 14,
                name: 'Asolut Vodka 1 L',
                image: '../../../assets/Vodka/absolutvodka1l.jpg',
                stock: 20,
                price: 19.99,
                rating: 5,
                category: DrinkType.Vodka
            },

            //Refrescos
            {
                id: 15,
                name: 'Aquarius de Limón 1 L',
                image: '../../../assets/Refrescos/aquariuslimon1l.jpg',
                stock: 0,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                id: 16,
                name: 'Aquarius de Naranja 1 L',
                image: '../../../assets/Refrescos/aquariusnaranja1l.jpg',
                stock: 5,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                id: 17,
                name: 'Aquarius de Limón 33 CL',
                image: '../../../assets/Refrescos/aquariuslimon33cl.jpg',
                stock: 5,
                price: 1.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                id: 18,
                name: 'Aquarius de Naranja 33 CL',
                image: '../../../assets/Refrescos/aquariusnaranja33cl.jpg',
                stock: 0,
                price: 1.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                id: 19,
                name: 'Cocacola 2 L',
                image: '../../../assets/Refrescos/cocacola2l.jpg',
                stock: 25,
                price: 2.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                id: 20,
                name: 'Cocacola 33 CL',
                image: '../../../assets/Refrescos/cocacola33cl.jpg',
                stock: 50,
                price: 1.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                id: 21,
                name: 'Fanta de Naranja 2 L',
                image: '../../../assets/Refrescos/fantanaranja2l.jpg',
                stock: 25,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                id: 22,
                name: 'Fanta de Naranja 33 CL',
                image: '../../../assets/Refrescos/fantanaranja33cl.jpg',
                stock: 50,
                price: 1.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                id: 23,
                name: 'Nestea de Limón 33 CL',
                image: '../../../assets/Refrescos/nestealimon33cl.jpg',
                stock: 50,
                price: 1.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                id: 24,
                name: 'Nestea de Limón 1 CL',
                image: '../../../assets/Refrescos/nestealimon015l.jpg',
                stock: 0,
                price: 2.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                id: 25,
                name: 'Sprite 2 L',
                image: '../../../assets/Refrescos/sprite2l.jpg',
                stock: 50,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                id: 26,
                name: 'Sprite 33 CL',
                image: '../../../assets/Refrescos/sprite33cl.jpg',
                stock: 50,
                price: 1.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
        ];

        this.products = productData.map(data => this.createProduct(data));
    }

    createProduct(data: any): Product {
        let product = new Product();
        product.id = data.id;
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
