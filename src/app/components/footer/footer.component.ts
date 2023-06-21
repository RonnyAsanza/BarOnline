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
  visibleModal: boolean = false;
  position: string = 'center';

  constructor() { }

  ngOnInit() { }

  sendForm(message: string, email: string) {
    if (!message || !email) {
      return;
    }

    console.log(email + " envia " + message);
    this.position = 'right';
    this.visibleModal = true;
    this.email = "";
    this.message = "";

    setTimeout(() => {
      this.visibleModal = false;
    }, 5000);
  }
}
