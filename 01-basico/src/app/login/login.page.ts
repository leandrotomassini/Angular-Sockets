import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string = '';

  constructor(public wsService: WebsocketService, private router: Router) { }

  ngOnInit() {
  }

  entrar() {
    this.wsService.loginWS(this.nombre)
      .then(() => {
        this.router.navigateByUrl('/home');
      });
  }
}
