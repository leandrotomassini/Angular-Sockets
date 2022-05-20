import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    ChatComponent
  ],
  exports: [
    ListaUsuariosComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
