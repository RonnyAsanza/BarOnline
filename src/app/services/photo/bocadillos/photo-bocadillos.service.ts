import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoBocadillosService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo1.png' },
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo2.png' },
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo3.png' },
      { itemImageSrc: '../../../assets/Bocadillos/bocadillo4.png' },
    ];
    return Promise.resolve(images);
  }
}
