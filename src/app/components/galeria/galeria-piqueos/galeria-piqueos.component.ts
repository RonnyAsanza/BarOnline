import { Component, OnInit } from '@angular/core';
import { PhotoPiqueosService } from '../../../services/photo/piqueos/photo-piqueos.service';
import { Router } from '@angular/router';

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

  constructor(private photoPiqueosService: PhotoPiqueosService,  private router: Router) { }

  ngOnInit() {
    this.photoPiqueosService.getImages().then((images) => {
      this.images = images;
    });
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
