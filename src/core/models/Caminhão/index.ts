export class Caminhao {
    constructor(qtde_rodas: number,
        qtde_portas: number,
        insulfilme: boolean,
        qtde_insulfim: number,
        motor: string,
        lugares: number,
        cinto_segurança: boolean,
        capacidade: number) {
        this.qtde_rodas = qtde_rodas
        this.qtde_portas = qtde_portas
        this.insulfilme = insulfilme
        this.qtde_insulfim = qtde_insulfim
        this.motor = motor
        this.qtde_lugares = lugares
        this.cinto_segurança = cinto_segurança
        this.capacidade = capacidade
    }
    public qtde_rodas: number;
    public qtde_portas: number;
    public insulfilme: boolean;
    public qtde_insulfim: number;
    public motor: string;
    public qtde_lugares: number;
    public cinto_segurança: boolean;
    public capacidade: number;
}