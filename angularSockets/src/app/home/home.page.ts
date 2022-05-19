import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChatService } from '../services/chat.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  texto = '';
  mensajesSubscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement;

  constructor(public webSocketService: WebsocketService,
    public chatService: ChatService) { }

  ngOnInit(): void {

    this.elemento = document.getElementById('chat-mensajes');

    this.mensajesSubscription = this.chatService.getMessages().subscribe(msg => {

      this.mensajes.push(msg);

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

    });
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    if (this.texto.trim().length === 0) {
      return;
    }
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
