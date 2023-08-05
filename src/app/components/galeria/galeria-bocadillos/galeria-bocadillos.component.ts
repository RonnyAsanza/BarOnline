import { Component, OnInit } from '@angular/core';
import { PhotoBocadillosService } from '../../../services/photo/bocadillos/photo-bocadillos.service';
import { Router } from '@angular/router';

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

  constructor(private photoBocadillosService: PhotoBocadillosService,  private router: Router) { }

  ngOnInit() {
    this.photoBocadillosService.getImages().then((images) => {
      this.images = images;
    });
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
