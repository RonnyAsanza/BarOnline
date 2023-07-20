import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoBocadillosService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo1.jpg' },
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo2.jpg' },
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo3.jpg' },
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo4.jpg' },
    ];
    return Promise.resolve(images);
  }
}
