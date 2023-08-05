import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/add-cart/add-cart.model';
import { DrinkType } from '../../enums/drink-type.enum'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private products: Product[] = [];

  constructor() {
    //Sustituir por llamada al servidor
    const productData = [
      //Cerveza
      {
        name: 'Estrella Galicia 33 CL',
        image: '../../assets/Cerveza/estrellagalicia.jpg',
        price: 1.99,
        quantity: 5
      },
      {
        name: 'Estrella Damm',
        image: '../../assets/Cerveza/estrelladamm.jpg',
        price: 1.99,
        quantity: 3
      }
    ]

    // this.products = productData.map(data => this.createProduct(data));
  }
  getProducts(): Product[] {
    return this.products;
  }

  createProduct(data: any): Product {
    let product = new Product();
    product.name = data.name;
    product.image = data.image;
    product.price = data.price;
    product.quantity = data.quantity;
    return product;
  }

}
