import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre = '';

  constructor(public wsService: WebsocketService, private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.wsService.loginWS(this.nombre)
      .then(() => {
        this.router.navigateByUrl('/mensajes');
      });
  }

}
