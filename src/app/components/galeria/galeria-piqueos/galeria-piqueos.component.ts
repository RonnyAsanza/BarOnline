import { Component, OnInit } from '@angular/core';
import { PhotoPiqueosService } from '../../../services/photo/piqueos/photo-piqueos.service';

@Component({
  selector: 'app-galeria-piqueos',
  templateUrl: './galeria-piqueos.component.html',
  styleUrls: ['./galeria-piqueos.component.css']
})
export class GaleriaPiqueosComponent implements OnInit {
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

  constructor(private photoPiqueosService: PhotoPiqueosService) { }

  ngOnInit() {
    this.photoPiqueosService.getImages().then((images) => {
      this.images = images;
    });
  }
}
