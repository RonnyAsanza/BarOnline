import { Component, OnInit } from '@angular/core';;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  email: string = "";
  message: string = "";
  value: string | undefined;

  constructor() {}
  
  ngOnInit() {
    }
}