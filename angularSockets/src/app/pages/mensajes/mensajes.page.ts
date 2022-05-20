import { Component, OnInit } from '@angular/core';

import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {



  constructor( public wsService: WebsocketService) { }

  ngOnInit() {}

  salir(){
    this.wsService.logoutWS();
  }
}
