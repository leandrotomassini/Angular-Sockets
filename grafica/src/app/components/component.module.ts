import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgChartsModule } from 'ng2-charts';

import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [
    GraficaComponent
  ],
  exports: [
    GraficaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgChartsModule
  ]
})
export class ComponentModule { }
