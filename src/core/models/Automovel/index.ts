export abstract class Automovel {
    constructor(
        qtde_rodas: number,
        motor: string,
        qtde_lugares: number,
        capacidade: number
    ) {
        this.qtde_rodas = qtde_rodas;
        this.motor = motor;
        this.qtde_lugares = qtde_lugares;
        this.capacidade = capacidade;
    }

    protected qtde_rodas: number;
    protected motor: string;
    protected qtde_lugares: number;
    protected capacidade: number;
}