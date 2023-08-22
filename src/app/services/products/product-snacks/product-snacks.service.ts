import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/article/article.model';
import { Snack } from '../../../enums/drink-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductSnacksService {

  private products: Product[] = [];

  constructor() {
    //Sustituir por llamada al servidor
    const productData = [
      {
        id: 31,
        name: 'Lays tradicionales',
        image: '../../../assets/Complementos/lays.png',
        stock: 49,
        price: 1.99,
        rating: 4.5,
        category: Snack[Snack.Snack]
      },
      {
        id: 32,
        name: 'Lays campesionas',
        image: '../../../assets/Complementos/layscampesinas.png',
        stock: 49,
        price: 1.99,
        rating: 4.5,
        category: Snack[Snack.Snack]
      },
      {
        id: 33,
        name: 'Ruffles de jamón',
        image: '../../../assets/Complementos/ruffleseconoicojamon.png',
        stock: 20,
        price: 1.99,
        rating: 5.0,
        category: Snack[Snack.Snack]
      }
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
