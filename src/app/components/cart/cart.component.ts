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
  wayUbicacion: TypeUbicacion = TypeUbicacion.Igualada;
  showPaymentDialog: boolean = false;
  showUbicacionDialog: boolean = false;
  TypePay = TypePay;
  TypeUbicacion = TypeUbicacion;
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
    this.showUbicacionDialog = true;
  }

  onUbicacion(type: TypeUbicacion) {
    this.wayUbicacion = type;
    this.showUbicacionDialog = false;
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
    this.showUbicacionDialog = false;
  }

  sendMessage() {
    const message = this.generateWhatsAppMessage();
    const phoneNumber = '+34658230355';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    localStorage.clear(); //limpia todo 
    //localStorage.removeItem('nombreDeLaClave'); cuando se agrege mas elementos al localstoregae
  }

  generateWhatsAppMessage(): string {
    const totalSum = this.totalSum();
    const costoEnvio = this.calculateCostoEnvio();
    const total = totalSum + costoEnvio;

    let message = '*¡Hola! :)* Me gustaría comprar los siguientes productos:\n\n';
    this.products.forEach(product => {
      const price = product.price ?? 0;
      const quantity = product.quantity ?? 0;
      const subtotal = (price * quantity).toFixed(2);
      message += `*${product.name}* - ${quantity} unidades - ${subtotal} EUR\n`;
    });

    message += `\n*Subotal:* ${totalSum.toFixed(2)} EUR\n*Ubicación:* ${this.wayUbicacion.toString()}\n*Método de pago:* ${this.wayToPay.toLocaleUpperCase()}\n*Costo de Envío:* ${costoEnvio === 0 ? 'GRATIS' : costoEnvio.toFixed(2) + ' EUR'}`;
    message += `\n\n*Total:* ${total.toFixed(2)}\nPor favor, confirma mi pedido.`;

    return message;
  }

  calculateCostoEnvio(): number {
    if (this.wayUbicacion == TypeUbicacion.Igualada) {
      if (this.totalSum() > 9.99) {
        return 0;
      }
      else {
        return 3.99;
      }
    }

    if (this.wayUbicacion == TypeUbicacion.Otro) {
      if (this.totalSum() > 29.99) {
        return 0;
      }
      else {
        return 7.99;
      }
    }

    return 0;
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

enum TypeUbicacion {
  Igualada = "Igualada",
  Otro = "Otro"
}