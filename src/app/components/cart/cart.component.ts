import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

//Componentes
import { Product } from 'src/app/features/add-cart/add-cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() isCartVisible: boolean = false;
  @Input() product: Product = new Product();
  @Output() isCartVisibleChange = new EventEmitter<boolean>();

  products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  totalSum() {
    return this.products.reduce((sum, product) => sum + ((product.price ?? 0) * (product.quantity ?? 0)), 0);
  }

  onHideCart() {
    this.isCartVisible = false;
    this.isCartVisibleChange.emit(this.isCartVisible);
  }

  onPay() {
    //levar al whatsapp con el listado de compras seleccionado
  }

  onShowCart() {
    this.isCartVisible = true;
    this.isCartVisibleChange.emit(this.isCartVisible);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && changes['product'].currentValue && changes['product'].currentValue.price) {
      this.products.push(changes['product'].currentValue);
    }
  }

}
