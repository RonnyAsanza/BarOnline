import { Component, OnInit } from '@angular/core';
import { PhotoBocadillosService } from '../../../services/photo/bocadillos/photo-bocadillos.service';

@Component({
  selector: 'app-galeria-bocadillos',
  templateUrl: './galeria-bocadillos.component.html',
  styleUrls: ['./galeria-bocadillos.component.css']
})
export class GaleriaBocadillosComponent implements OnInit {
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

  constructor(private photoBocadillosService: PhotoBocadillosService) { }

  ngOnInit() {
    this.photoBocadillosService.getImages().then((images) => {
      this.images = images;
    });
  }
}
