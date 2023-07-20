import { Component, OnInit } from '@angular/core';;
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [MessageService],
})

export class FooterComponent implements OnInit {
  email: string = "";
  message: string = "";
  value: string | undefined;
  visibleModal: boolean = false;
  position: string = 'center';

  constructor(private messageService: MessageService) { }

  ngOnInit() { }

  sendForm(message: string, email: string) {
    if (!message || !email) {
      return;
    }

    this.position = 'right';
    this.visibleModal = true;
    this.email = "";
    this.message = "";
    this.messageService.add({ severity: 'success', summary: 'Su mensaje ha sido enviado', detail: '¡muchas gracias!' });
    setTimeout(() => {
      this.visibleModal = false;
      this.messageService.clear();
    }, 5000);
  }
}
