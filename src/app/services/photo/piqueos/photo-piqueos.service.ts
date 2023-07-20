import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoPiqueosService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Complementos/lays.jpg' },
      { itemImageSrc: '../../../assets/Complementos/layscampesinas.jpg' },
      { itemImageSrc: '../../../assets/Complementos/ruffleseconoicojamon.jpg' },
    ];
    return Promise.resolve(images);
  }
}
