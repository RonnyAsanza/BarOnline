import { Component, OnInit } from '@angular/core';
import { PhotoCervezaService } from '../../../../services/photo/bebidas/cerveza/photo-cerveza.service';

@Component({
  selector: 'app-galeria-cerveza',
  templateUrl: './galeria-cerveza.component.html',
  styleUrls: ['./galeria-cerveza.component.css']
})
export class GaleriaCervezaComponent implements OnInit {
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

  constructor(private photoCervezaService: PhotoCervezaService) { }

  ngOnInit() {
      this.photoCervezaService.getImages().then((images) => {
          this.images = images;
      });
  }
}
