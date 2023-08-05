import { Component, OnInit, HostListener, Renderer2, ElementRef, ViewChild } from '@angular/core';
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
    lastScrollTop: number = 0;

    @ViewChild('navbar') navbar!: ElementRef;

    constructor(private router: Router, private renderer: Renderer2) { }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: any) {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > this.lastScrollTop) {
            this.renderer.addClass(this.navbar.nativeElement, 'hide');
        } else {
            this.renderer.removeClass(this.navbar.nativeElement, 'hide');
        }
        this.lastScrollTop = st <= 0 ? 0 : st;

    }

    ngOnInit() {
        this.items = [
            {
                label: 'INICIO',
                icon: 'fa-solid fa-house',
                command: () => { this.router.navigate(['/inicio']); }
            },
            {
                label: 'ARTÍCULOS',
                icon: 'fa-solid fa-newspaper',
                items: [
                    {
                        label: 'BEBIDAS',
                        icon: 'fa-solid fa-wine-glass',
                        items: [
                            {
                                label: 'Todas',
                                icon: 'fa-solid fa-eye',
                                command: () => { this.router.navigate(['articles/drinks'], { queryParams: { drink: DrinkType.All } }); }
                            },
                            {
                                label: 'Cerveza',
                                icon: 'fa-solid fa-beer-mug-empty',
                                command: () => { this.router.navigate(['articles/drinks'], { queryParams: { drink: DrinkType.Cerveza } }); }
                            },
                            {
                                label: 'Whisky',
                                icon: 'fa-solid fa-whiskey-glass',
                                command: () => { this.router.navigate(['articles/drinks'], { queryParams: { drink: DrinkType.Whisky } }); }
                            },
                            {
                                label: 'Ron',
                                icon: 'fa-solid fa-wine-bottle',
                                command: () => { this.router.navigate(['articles/drinks'], { queryParams: { drink: DrinkType.Ron } }); }
                            },
                            {
                                label: 'Ginebra',
                                icon: 'fa-solid fa-bottle-droplet',
                                command: () => { this.router.navigate(['articles/drinks'], { queryParams: { drink: DrinkType.Ginebra } }); }
                            },
                            {
                                label: 'Vodka',
                                icon: 'fa-solid fa-champagne-glasses',
                                command: () => { this.router.navigate(['articles/drinks'], { queryParams: { drink: DrinkType.Vodka } }); }
                            },
                            {
                                label: 'Refrescos',
                                icon: 'fa-solid fa-glass-water',
                                command: () => { this.router.navigate(['articles/drinks'], { queryParams: { drink: DrinkType.Refrescos } }); }
                            }
                        ]
                    },
                    {
                        label: 'BOCADILLOS',
                        icon: 'fa-solid fa-burger',
                        command: () => { this.router.navigate(['articles/sandwich']); }
                    },
                    {
                        label: 'SNACKS',
                        icon: 'fa-solid fa-cookie-bite',
                        command: () => { this.router.navigate(['articles/snacks']); }
                    }
                ]
            },
            {
                label: '¡OFERTAS!',
                icon: 'fa-solid fa-bolt-lightning',
                items: [
                    {
                        label: 'Cerveza',
                        icon: 'fa-solid fa-beer-mug-empty',
                    },
                    {
                        label: 'Whisky',
                        icon: 'fa-solid fa-whiskey-glass',
                    },
                    {
                        label: 'Ron',
                        icon: 'fa-solid fa-wine-bottle',
                    },
                    {
                        label: 'Ginebra',
                        icon: 'fa-solid fa-bottle-droplet',
                    }
                ]
            },
            {
                label: 'COMPAÑÍA',
                icon: 'fa-solid fa-building',
                command: () => { this.router.navigate(['/company']); } // Añade un comando para navegar a '/company'
            },
            {
                label: 'CÓMO COMPRAR',
                icon: 'fa-solid fa-cart-shopping',
                command: () => { this.router.navigate(['/howtobuy']); } // Añade un comando para navegar a '/howtobuy'
            },
            {
                label: 'CONTACTAR',
                icon: 'fa-solid fa-address-card',
                command: () => {
                    const element = document.getElementById('footerId');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
            },
            {
                label: 'WHATSAPP',
                icon: 'fa-brands fa-square-whatsapp fa-beat fa-lg',
                command: () => { window.open('https://wa.me/+34658230355', '_blank'); }
            }
        ];
    }

}
