import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/add-cart/add-cart.model';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor() { }

  getProducts(): Product[] {
    // Obtén la lista de productos del almacenamiento local
    return JSON.parse(localStorage.getItem('cartProducts') || '[]');
  }

  updateProduct(product: Product) {
    // Obtén la lista de productos del almacenamiento local
    let cartProducts: Product[] = this.getProducts();

    // Encuentra el producto en la lista de productos
    const existingProduct = cartProducts.find(p => p.id === product.id);
    if (existingProduct) {
      // Actualiza la cantidad del producto
      existingProduct.quantity = product.quantity;

      // Guarda la lista de productos actualizada en el almacenamiento local
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
  }

  addProduct(product: Product) {
    // Obtén la lista de productos del almacenamiento local
    let cartProducts: Product[] = this.getProducts();

    // Encuentra el producto en la lista de productos
    const existingProduct = cartProducts.find(p => p.id === product.id);
    if (existingProduct) {
      // Si el producto ya existe y además es menor a 100, incrementa la cantidad en 1
      if ((existingProduct.quantity || 0) < 100) {
        existingProduct.quantity = (existingProduct.quantity || 0) + 1;
      }
    } else {
      // Si el producto no existe, establece la cantidad en 1 y agrégalo a la lista de productos
      product.quantity = 1;
      cartProducts.push(product);
    }

    // Guarda la lista de productos actualizada en el almacenamiento local
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  deleteProduct(product: Product) {
    // Obtén la lista de productos del almacenamiento local
    let cartProducts: Product[] = this.getProducts();

    // Filtra la lista de productos para eliminar el producto en cuestión
    cartProducts = cartProducts.filter(p => p.id !== product.id);

    // Guarda la lista de productos actualizada en el almacenamiento local
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

}
