import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'BEBIDAS',
              icon: 'pi pi-shopping-cart',
              items: [
                  {
                      label: 'Cerveza',
                      icon: 'pi pi-eye'
                  },
                  {
                      label: 'Whisky',
                      icon: 'pi pi-eye'
                  },
                  {
                      label: 'Ron',
                      icon: 'pi pi-eye'
                  },
                  {
                      label: 'Ginebra',
                      icon: 'pi pi-eye'
                  },
                  {
                      label: 'Vodka',
                      icon: 'pi pi-eye'
                  },
                  {
                      label: 'Licores',
                      icon: 'pi pi-eye'
                  },
                  {
                      label: 'Resfrescos',
                      icon: 'pi pi-eye'
                  }
              ]
          },
          {
              label: '¡OFERTAS!',
              icon: 'pi pi-bolt',
              items: [
                  {
                      label: 'Cerveza',
                      icon: 'pi pi-box'
                  },
                  {
                      label: 'Whisky',
                      icon: 'pi pi-box'
                  },
                  {
                      label: 'Ron',
                      icon: 'pi pi-box'
                  },
                  {
                      label: 'Ginebra',
                      icon: 'pi pi-box'
                  }
              ]
          },
          {
              label: 'COMPAÑÍA',
              icon: 'pi pi-fw pi-user'
          },
          {
              label: 'CÓMO COMPRAR',
              icon: 'pi pi-wallet'
          },
          {
              label: 'CONTACTAR',
              icon: 'pi pi-mobile'
          },
          {
              label: 'WHATSAPP',
              icon: 'pi pi-whatsapp'
          }
      ];
  }

}