import { Bebe } from "./Bebe";

export class BebePrematuro extends Bebe {

    private semanasGestacao: number;

    public constructor(_nome: string, _id: string, _peso: number, _altura:number,_semanaGestacao:number) {
        super(_nome, _id,_peso,_altura);
        this.semanasGestacao = _semanaGestacao;
    }

    public setSemanaGestacao(_semanaGestacao: number): void {
        this.semanasGestacao = _semanaGestacao;
    }
    
    public getSemanaGestacao(): number {
        return this.semanasGestacao;
    }

}