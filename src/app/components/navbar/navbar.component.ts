import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { DrinkType } from '../../enums/drink-type.enum';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    items: MenuItem[] = [];

    constructor(private router: Router) { }

    ngOnInit() {
        this.items = [
            {
                label: 'BEBIDAS',
                icon: 'pi pi-shopping-cart',
                items: [
                    {
                        label: 'Todas',
                        icon: 'pi pi-eye',
                        command: () => { this.router.navigate(['/articles'], { queryParams: { drink: DrinkType.All } }); } 
                    },
                    {
                        label: 'Cerveza',
                        icon: 'pi pi-eye',
                        command: () => { this.router.navigate(['/articles'], { queryParams: { drink: DrinkType.Cerveza } }); } 
                    },
                    {
                        label: 'Whisky',
                        icon: 'pi pi-eye',
                        command: () => { this.router.navigate(['/articles'], { queryParams: { drink: DrinkType.Whisky } }); }
                    },
                    {
                        label: 'Ron',
                        icon: 'pi pi-eye',
                        command: () => { this.router.navigate(['/articles'], { queryParams: { drink: DrinkType.Ron } }); }
                    },
                    {
                        label: 'Ginebra',
                        icon: 'pi pi-eye',
                        command: () => { this.router.navigate(['/articles'], { queryParams: { drink: DrinkType.Ginebra } }); }
                    },
                    {
                        label: 'Vodka',
                        icon: 'pi pi-eye',
                        command: () => { this.router.navigate(['/articles'], { queryParams: { drink: DrinkType.Vodka } }); }
                    },
                    {
                        label: 'Refrescos',
                        icon: 'pi pi-eye',
                        command: () => { this.router.navigate(['/articles'], { queryParams: { drink: DrinkType.Refrescos } }); }
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
                icon: 'pi pi-fw pi-user',
                command: () => { this.router.navigate(['/company']); } // Añade un comando para navegar a '/company'
            },
            {
                label: 'CÓMO COMPRAR',
                icon: 'pi pi-wallet',
                command: () => { this.router.navigate(['/howtobuy']); } // Añade un comando para navegar a '/howtobuy'
            },
            {
                label: 'CONTACTAR',
                icon: 'pi pi-mobile',
                command: () => {
                    const element = document.getElementById('footerId');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
            },
            {
                label: 'WHATSAPP',
                icon: 'pi pi-whatsapp',
                command: () => { window.open('https://wa.me/658230355', '_blank'); }
            }
        ];
    }

}
