import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoBebidasService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Cerveza/estrelladamm.png'},
      { itemImageSrc: '../../../assets/Cerveza/estrellagalicia.png'},
      { itemImageSrc: '../../../assets/Whisky/jackdaniels07.png'},
      { itemImageSrc: '../../../assets/Whisky/redlabel07.png'},
      { itemImageSrc: '../../../assets/Whisky/ballantines1l.png'},
      { itemImageSrc: '../../../assets/Whisky/j&b1l.png'},
      { itemImageSrc: '../../../assets/Ron/bacardiblanco1l.png'},
      { itemImageSrc: '../../../assets/Ron/bacardioro70cl.png'},
    ];
    return Promise.resolve(images);
  }
}
