import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { ChatService } from '../services/chat.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  @ViewChild(IonContent) content: IonContent

  texto = '';
  mensajesSubscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement;

  constructor(public webSocketService: WebsocketService,
    public chatService: ChatService) { }

  ngOnInit(): void {

    setInterval(() => {
      this.content.scrollToBottom(400);
    }, 200);

    this.mensajesSubscription = this.chatService.getMessages().subscribe(msg => {

      this.mensajes.push(msg);

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

    setTimeout(() => {
      this.content.scrollToBottom(400);
    });
  }

}
