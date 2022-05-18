import { Component } from '@angular/core';

import { ChatService } from '../services/chat.service';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  texto = '';

  constructor(public webSocketService:WebsocketService,
    public chatService: ChatService) {}

  ngOnInit(): void {

  }

  enviar(){
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
