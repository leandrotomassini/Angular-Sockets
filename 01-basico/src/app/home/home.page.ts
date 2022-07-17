import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WebsocketService } from '../services/websocket.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  texto = '';
  mensajesSubscription: Subscription;
  mensajes: any[] = [];

  constructor(public wsService: WebsocketService, public chatService: ChatService) { }

  ngOnInit(): void {
    this.mensajesSubscription = this.chatService.getMessages().subscribe(msg => {
      this.mensajes.push(msg);
    });
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
