

export class GraficaData {

    private meses: string[] = ['enero', 'febrero', 'marzo', 'abril'];
    private valores: number[] = [0, 0, 0, 0];

    constructor() {

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

    incrementarValor(mes: string, valor: number) {

        mes = mes.toLowerCase().trim();

        for (let i in this.meses) {
            if (this.meses[i] === mes) {
                this.valores[i] += valor;
            }
        }

        return this.getDataGrafica();
    }

}