import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoCervezaService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Cerveza/estrelladamm.png'},
      { itemImageSrc: '../../../assets/Cerveza/estrellagalicia.png'},
    ];
    return Promise.resolve(images);
  }}
