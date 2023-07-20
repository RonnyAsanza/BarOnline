import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-galeria',
    templateUrl: './galeria.component.html',
    styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements AfterViewInit {

    @ViewChildren('spnFocusExpand') spnFocusExpand!: QueryList<ElementRef>;

    ngAfterViewInit() {
      setInterval(() => {
        this.spnFocusExpand.forEach(element => {
          element.nativeElement.classList.remove('focus-in-expand');

          // Reflow (para reiniciar la animación)
          void element.nativeElement.offsetWidth;

          element.nativeElement.classList.add('focus-in-expand');
        });
      }, 7500);
    }
}
