import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoPiqueosService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Complementos/lays.png' },
      { itemImageSrc: '../../../assets/Complementos/layscampesinas.png' },
      { itemImageSrc: '../../../assets/Complementos/ruffleseconoicojamon.png' },
    ];
    return Promise.resolve(images);
  }
}
