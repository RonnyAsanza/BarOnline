import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoAlcoholService {

  constructor() { }

  getImages(): Promise<any[]> {
    const images = [
      { itemImageSrc: '../../../assets/Whisky/jackdaniels07.jpg'},
      { itemImageSrc: '../../../assets/Whisky/redlabel07.jpg'},
      { itemImageSrc: '../../../assets/Whisky/ballantines1l.jpg'},
      { itemImageSrc: '../../../assets/Whisky/j&b1l.jpg'},
      { itemImageSrc: '../../../assets/Ron/bacardiblanco1l.jpg'},
      { itemImageSrc: '../../../assets/Ron/bacardioro70cl.jpg'},
    ];
    return Promise.resolve(images);
  }
}
