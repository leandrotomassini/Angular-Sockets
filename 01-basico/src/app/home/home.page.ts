import { Component, OnInit } from '@angular/core';

import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public wsService: WebsocketService) { }

  ngOnInit(): void {

  }

  

}
