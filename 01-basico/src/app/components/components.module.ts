import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';




@NgModule({
  declarations: [
    HeaderComponent,
    MensajesComponent,
    ListadoUsuariosComponent
  ],
  exports:[
    HeaderComponent,
    MensajesComponent,
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
