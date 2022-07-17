import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss'],
})
export class ListadoUsuariosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.usuariosActivosObs = this.chatService.getUsuariosActivos();
    this.chatService.emitirUsuariosActivos();
  }


}
