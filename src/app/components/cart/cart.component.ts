import { Component, OnInit } from '@angular/core';

//Componentes
import { Product } from 'src/app/features/add-cart/add-cart.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  sidebarVisible: boolean = true;
  layout: string = 'list';

  products!: Product[];

  constructor(private productService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  totalSum() {
    return this.products.reduce((sum, product) => sum + ((product.price ?? 0) * (product.quantity ?? 0)), 0);
  }

  onHideCart(){
    this.sidebarVisible = false;
  }
  
  onPay(){
    //levar al whatsapp con el listado de compras seleccionado
  }
}
