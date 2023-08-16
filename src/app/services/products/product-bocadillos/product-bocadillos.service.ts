import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ProductBocadillosService {
  private products: Product[] = [];

  constructor() {
    //Sustituir por llamada al servidor
    const productData = [
      {
        id: 27,
        name: 'Bocadillo vegetal con anchoas',
        image: '../../../assets/Bocadillos/bocadillo1.jpg',
        stock: 49,
        price: 3.99,
        rating: 4.5
      },
      {
        id: 28,
        name: 'Bocadillo de carne',
        image: '../../../assets/Bocadillos/bocadillo2.jpg',
        stock: 49,
        price: 3.99,
        rating: 4.5
      },
      {
        id: 29,
        name: 'Bocadillo carne molida con cebolla',
        image: '../../../assets/Bocadillos/bocadillo3.jpg',
        stock: 20,
        price: 2.99,
        rating: 3.0
      },
      {
        id: 30,
        name: 'Bocadillo vegetal de atún',
        image: '../../../assets/Bocadillos/bocadillo4.jpg',
        stock: 49,
        price: 4.99,
        rating: 4.5
      },

    ];

    this.products = productData.map(data => this.createProduct(data));
  }

  getProducts(): Product[] {
    return this.products;
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
