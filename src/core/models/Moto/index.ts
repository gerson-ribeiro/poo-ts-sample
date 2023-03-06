export class Moto {
    constructor(qtde_rodas: number,
        qtde_portas: number,
        motor: string,
        lugares: number,
        capacidade: number) {
        this.qtde_rodas = qtde_rodas
        this.qtde_portas = qtde_portas
        this.motor = motor
        this.qtde_lugares = lugares
        this.capacidade = capacidade
    }
    public qtde_rodas: number;
    public qtde_portas: number;
    public motor: string;
    public qtde_lugares: number;
    public capacidade: number;
}