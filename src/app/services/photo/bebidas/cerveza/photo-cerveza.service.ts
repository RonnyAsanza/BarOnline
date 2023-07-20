import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoCervezaService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Cerveza/estrelladamm.jpg'},
      { itemImageSrc: '../../../assets/Cerveza/estrellagalicia.jpg'},
    ];
    return Promise.resolve(images);
  }}
