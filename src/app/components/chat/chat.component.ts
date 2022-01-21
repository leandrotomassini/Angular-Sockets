import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajesSusbcription!: Subscription;
  elemento: HTMLElement;

  mensajes: any[] = [];

  constructor(public chatService: ChatService) {
  }
  
  ngOnInit(): void {
    
    this.elemento = document.getElementById('chat-mensajes');

    this.mensajesSusbcription = this.chatService.getMessages().subscribe(msg => {
      this.mensajes.push(msg);

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    });

  }

  ngOnDestroy(): void {
    this.mensajesSusbcription.unsubscribe();
  }

  enviar() {
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
