import { Component, Input, Output, EventEmitter, SimpleChanges, HostListener } from '@angular/core';
import { InterceptorService } from '../../services/interceptor/interceptor.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

//Componentes
import { Product } from 'src/app/features/add-cart/add-cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() isCartVisible: boolean = false;
  @Output() isCartVisibleChange = new EventEmitter<boolean>();

  products: Product[] = [];
  wayToPay: TypePay = TypePay.Cash;
  showPaymentDialog: boolean = false;
  TypePay = TypePay;
  isMobileSmall: boolean = window.innerWidth <= 375;

  constructor(private interceptorService: InterceptorService,
    private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.products = this.interceptorService.getProducts();
    this.updateIsMobile();
  }

  totalSum() {
    const total = this.products.reduce((sum, product) => sum + ((product.price ?? 0) * (product.quantity ?? 0)), 0);
    return +total.toFixed(2);
  }

  onHideCart() {
    this.isCartVisible = false;
    this.isCartVisibleChange.emit(this.isCartVisible);
  }

  onPay() {
    this.showPaymentDialog = true;
  }

  selectPaymentType(type: TypePay) {
    this.wayToPay = type;
    this.sendMessage();
    this.showPaymentDialog = false;
  }

  cancelPayment() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Cancelled',
      detail: '¡Confirmación de pago cancelada!',
      icon: 'fa-solid fa-face-sad-tear'
    });
    this.showPaymentDialog = false;
  }

  sendMessage() {
    const message = this.generateWhatsAppMessage();
    const phoneNumber = '+34658230355';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    localStorage.clear(); //limpia todo 
    //localStorage.removeItem('nombreDeLaClave'); cuando se agrege nas elementos al localstoregae
  }

  generateWhatsAppMessage(): string {
    let message = '*¡Hola! :)* Me gustaría comprar los siguientes productos:\n\n';
    this.products.forEach(product => {
      const price = product.price ?? 0;
      const quantity = product.quantity ?? 0;
      const subtotal = (price * quantity).toFixed(2);
      message += `*${product.name}* - ${quantity} unidades - ${subtotal} EUR\n`;
    });
    message += `\n*Total:* ${this.totalSum().toFixed(2)} EUR\n\n*Forma de pago:* ${this.wayToPay.toLocaleUpperCase()}\n\nPor favor, confirma mi pedido.`;
    return message;
  }

  onShowCart() {
    this.isCartVisible = true;
    this.isCartVisibleChange.emit(this.isCartVisible);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.products = this.interceptorService.getProducts();
  }

  updateQuantity(product: Product) {
    if (product?.quantity !== undefined && (product.quantity < 1 || product.quantity > 100)) {
      alert("Elija una cantidad entre 1 y 100.");
    }
    else {
      this.interceptorService.updateProduct(product);
    }

    this.products = this.interceptorService.getProducts();
  }

  confirmDelete(product: Product) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar el producto del carrito?',
      header: 'Eliminar Producto',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Producto eliminado',
          icon: 'fa-solid fa-face-sad-tear'
        });
        this.interceptorService.deleteProduct(product);
        this.products = this.interceptorService.getProducts();
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: '¡Magnífica decisión!',
              icon: 'fa-solid fa-face-laugh-wink'
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: '¡No has tomado ninguna decisión!',
              icon: 'fa-solid fa-face-surprise'
            });
            break;
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateIsMobile();
  }

  updateIsMobile() {
    this.isMobileSmall = window.innerWidth <= 767;
  }

}

enum TypePay {
  Cash = "cash",
  Bizum = "bizum"
}