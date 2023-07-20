import { Component, OnInit } from '@angular/core';
import { PhotoAlcoholService } from '../../../../services/photo/bebidas/alcohol/photo-alcohol.service';

@Component({
  selector: 'app-galeria-alcohol',
  templateUrl: './galeria-alcohol.component.html',
  styleUrls: ['./galeria-alcohol.component.css']
})
export class GaleriaAlcoholComponent implements OnInit {
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

  constructor(private photoAlcoholService: PhotoAlcoholService) { }

  ngOnInit() {
    this.photoAlcoholService.getImages().then((images) => {
      this.images = images;
    });
  }
}
