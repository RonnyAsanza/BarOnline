import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/article/article.model';
import { DrinkType } from '../../../enums/drink-type.enum';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private products: Product[] = [];

  constructor() {

    const productData = [
      {
        id: 41,
        name: '¡Pack 24 Latas x 33cl Cerveza San Miguel!',
        image: '../../../assets/Offers/packsanmiguel24.png',
        stock: 49,
        price: 19.99,
        rating: 5,
        category: DrinkType[DrinkType.Ofertas]
      },
      {
        id: 34,
        name: '¡Cerveza + Patatas fritas!',
        image: '../../../assets/Offers/bebida-mas-snack.png',
        stock: 49,
        price: 2.49,
        rating: 4.5,
        category: DrinkType[DrinkType.Ofertas]
      },
      {
        id: 35,
        name: '¡Cerveza + Bocadillo!',
        image: '../../../assets/Offers/cerveza-mas-bocadillo.png',
        stock: 49,
        price: 3.99,
        rating: 5,
        category: DrinkType[DrinkType.Ofertas]
      },
      {
        id: 36,
        name: '¡Frutos secos gratis! Con la compra de un sixpack de coronita',
        image: '../../../assets/Offers/cerveza-mas-snack.png',
        stock: 49,
        price: 14.99,
        rating: 5,
        category: DrinkType[DrinkType.Ofertas]
      },
      {
        id: 37,
        name: '¡Sixpack de coronita, compra 5 y llévate 1 gratis!',
        image: '../../../assets/Offers/corona-sixpack.png',
        stock: 49,
        price: 14.99,
        rating: 5,
        category: DrinkType[DrinkType.Ofertas]
      },
      {
        id: 38,
        name: '¡Sixpack de desperada, compra 5 y llévate 1 gratis!',
        image: '../../../assets/Offers/desperada-sixpack.png',
        stock: 49,
        price: 14.99,
        rating: 5,
        category: DrinkType[DrinkType.Ofertas]
      },
      {
        id: 39,
        name: '¡Pack de 24 estrella damm por el precio de 20 y un snack gratis!',
        image: '../../../assets/Offers/estrelladamm-x24.png',
        stock: 49,
        price: 19.99,
        rating: 5,
        category: DrinkType[DrinkType.Ofertas]
      },
      {
        id: 40,
        name: '¡Super promoción de Sixpack de heineken!',
        image: '../../../assets/Offers/heineken-sixpack.png',
        stock: 49,
        price: 11.99,
        rating: 5,
        category: DrinkType[DrinkType.Ofertas]
      }
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

  getOffers() {
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
