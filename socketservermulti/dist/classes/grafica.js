"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraficaData = void 0;
class GraficaData {
    constructor() {
        this.meses = ['enero', 'febrero', 'marzo', 'abril'];
        this.valores = [0, 0, 0, 0];
    }
    getDataGrafica() {
        return ({
            datasets: [
                {
                    data: this.valores,
                    label: 'Ventas',
                },
            ],
            labels: this.meses
        });
    }
    incrementarValor(mes, valor) {
        mes = mes.toLowerCase().trim();
        for (let i in this.meses) {
            if (this.meses[i] === mes) {
                this.valores[i] += valor;
            }
        }
        return this.getDataGrafica();
    }
}
exports.GraficaData = GraficaData;
