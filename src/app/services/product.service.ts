import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/article/article.model';
import { DrinkType } from '../enums/drink-type.enum';

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
                name: 'San Miguel 33cl',
                image: '../../../assets/Cerveza/sanmiguel33.jpg',
                stock: 49,
                price: 1.99,
                rating: 4.5,
                category: DrinkType.Cerveza
            },
            {
                name: 'Estrella Damm 33 CL',
                image: '../../../assets/Cerveza/estrelladamm.jpg',
                stock: 15,
                price: 2.99,
                rating: 3.8,
                category: DrinkType.Cerveza
            },
            {
                name: 'Estrella Galicia 33 CL',
                image: '../../../assets/Cerveza/estrellagalicia.jpg',
                stock: 0,
                price: 3.99,
                rating: 3.8,
                category: DrinkType.Cerveza
            },

            //Whisky
            {
                name: 'Jack Daniels 70 CL',
                image: '../../../assets/Whisky/jackdaniels07.jpg',
                stock: 50,
                price: 24.99,
                rating: 3.8,
                category: DrinkType.Whisky
            },
            {
                name: 'Red Label 70 CL',
                image: '../../../assets/Whisky/redlabel07.jpg',
                stock: 20,
                price: 24.99,
                rating: 4.5,
                category: DrinkType.Whisky
            },
            {
                name: 'Ballantines 1 L',
                image: '../../../assets/Whisky/ballantines1l.jpg',
                stock: 10,
                price: 19.99,
                rating: 3.7,
                category: DrinkType.Whisky
            },
            {
                name: 'J&B 1 L',
                image: '../../../assets/Whisky/j&b1l.jpg',
                stock: 50,
                price: 24.99,
                rating: 5,
                category: DrinkType.Whisky
            },

            //Ron
            {
                name: 'Barcardí Blanco 1 L',
                image: '../../../assets/Ron/bacardiblanco1l.jpg',
                stock: 50,
                price: 24.99,
                rating: 5,
                category: DrinkType.Ron
            },
            {
                name: 'Barcardí Oro 70 CL',
                image: '../../../assets/Ron/bacardioro70cl.jpg',
                stock: 50,
                price: 29.99,
                rating: 5,
                category: DrinkType.Ron
            },
            {
                name: 'Barcelo 70 CL',
                image: '../../../assets/Ron/barcelo70cl.jpg',
                stock: 20,
                price: 19.99,
                rating: 3.5,
                category: DrinkType.Ron
            },
            {
                name: 'Negrita 70 CL',
                image: '../../../assets/Ron/negrita70cl.jpg',
                stock: 20,
                price: 19.99,
                rating: 3.5,
                category: DrinkType.Ron
            },
            {
                name: 'Brugalanejo 1 L',
                image: '../../../assets/Ron/brugalanejo1l.jpg',
                stock: 20,
                price: 24.99,
                rating: 4,
                category: DrinkType.Ron
            },

            //Ginebra
            {
                name: 'Brugalanejo 1 L',
                image: '../../../assets/Ron/brugalanejo1l.jpg',
                stock: 20,
                price: 24.99,
                rating: 4,
                category: DrinkType.Ginebra
            },

            //Vodka
            {
                name: 'Asolut Vodka 1 L',
                image: '../../../assets/Vodka/absolutvodka1l.jpg',
                stock: 20,
                price: 19.99,
                rating: 5,
                category: DrinkType.Vodka
            },

            //Refrescos
            {
                name: 'Aquarius de Limón 1 L',
                image: '../../../assets/Refrescos/aquariuslimon1l.jpg',
                stock: 0,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                name: 'Aquarius de Naranja 1 L',
                image: '../../../assets/Refrescos/aquariusnaranja1l.jpg',
                stock: 5,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                name: 'Aquarius de Limón 33 CL',
                image: '../../../assets/Refrescos/aquariuslimon33cl.jpg',
                stock: 5,
                price: 1.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                name: 'Aquarius de Naranja 33 CL',
                image: '../../../assets/Refrescos/aquariusnaranja33cl.jpg',
                stock: 0,
                price: 1.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                name: 'Cocacola 2 L',
                image: '../../../assets/Refrescos/cocacola2l.jpg',
                stock: 25,
                price: 2.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                name: 'Cocacola 33 CL',
                image: '../../../assets/Refrescos/cocacola33cl.jpg',
                stock: 50,
                price: 1.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                name: 'Fanta de Naranja 2 L',
                image: '../../../assets/Refrescos/fantanaranja2l.jpg',
                stock: 25,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                name: 'Fanta de Naranja 33 CL',
                image: '../../../assets/Refrescos/fantanaranja33cl.jpg',
                stock: 50,
                price: 1.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
                name: 'Nestea de Limón 33 CL',
                image: '../../../assets/Refrescos/nestealimon33cl.jpg',
                stock: 50,
                price: 1.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                name: 'Nestea de Limón 1 CL',
                image: '../../../assets/Refrescos/nestealimon015l.jpg',
                stock: 0,
                price: 2.99,
                rating: 5,
                category: DrinkType.Refrescos
            },
            {
                name: 'Sprite 2 L',
                image: '../../../assets/Refrescos/sprite2l.jpg',
                stock: 50,
                price: 2.99,
                rating: 4,
                category: DrinkType.Refrescos
            },
            {
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
