import { Component } from '@angular/core';
import { PhotoAlcoholService } from '../../../../services/photo/bebidas/alcohol/photo-alcohol.service';
import { PhotoCervezaService } from '../../../../services/photo/bebidas/cerveza/photo-cerveza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {
  imagesAcohol: any[] = [];
  imagesCerveza: any[] = [];
  images: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoAlcoholService: PhotoAlcoholService, private photoCervezasService: PhotoCervezaService, private router: Router) {

  }

  ngOnInit() {
    this.photoAlcoholService.getImages().then((images) => {
      this.imagesAcohol = images;
      this.combineImages();
    });
    this.photoCervezasService.getImages().then((images) => {
      this.imagesCerveza = images;
      this.combineImages();
    });
  }

  combineImages() {
    if (this.imagesAcohol.length > 0 && this.imagesCerveza.length > 0) {
      this.images = this.imagesCerveza.concat(this.imagesAcohol);
    }
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]).then(() => {
    });
  }

}
