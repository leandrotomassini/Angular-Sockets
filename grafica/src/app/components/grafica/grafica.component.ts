import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ChartConfiguration } from 'chart.js';

import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss'],
})
export class GraficaComponent implements OnInit {

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [0, 0, 0, 0],
        label: 'Ventas',
      },
    ],
  };

  constructor(private http: HttpClient, public wsService: WebsocketService) { }

  ngOnInit() {
    this.getData();
    this.escucharSocket();
  }

  getData() {
    this.http.get('http://localhost:3000/grafica')
      .subscribe((data: any) => this.lineChartData = data);
  }

  escucharSocket() {
    this.wsService.listen('cambio-grafica')
      .subscribe((data: any) => {
        console.log('socket ', data);
        this.lineChartData = data;
      });
  }

}
