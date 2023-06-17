import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-como-comprar',
  templateUrl: './como-comprar.component.html',
  styleUrls: ['./como-comprar.component.css']
})
export class ComoComprarComponent implements OnInit{
  width: string = "";

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    let vw = window.innerWidth;

    if (vw < 350) {
      this.width = '200';
    }
    else if (vw < 640){
      this.width = '300';
    } 
    else if (vw < 1024) {
      this.width = '450';
    } else {
      this.width = '500';
    }
  }
}
