import { Automovel } from "../Automovel"

export class Carro extends Automovel {
    constructor(qtde_rodas: number,
        qtde_portas: number,
        insulfilme: boolean,
        qtde_insulfim: number,
        motor: string,
        lugares: number,
        cinto_segurança: boolean,
        capacidade: number) {
        super(qtde_rodas, motor, lugares, capacidade)

        this.qtde_portas = qtde_portas
        this.insulfilme = insulfilme
        this.qtde_insulfim = qtde_insulfim
        this.cinto_segurança = cinto_segurança
    }
    public qtde_portas: number;
    public insulfilme: boolean;
    public qtde_insulfim: number;
    public cinto_segurança: boolean;

    public get rodas() {
        return this.qtde_rodas
    }
}