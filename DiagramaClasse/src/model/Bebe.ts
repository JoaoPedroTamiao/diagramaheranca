export abstract class Bebe {


    private nome: string;
    private id: string;
    private peso: number;
    private altura: number;

    public constructor(_nome: string, _id: string,_peso:number,_altura:number) {

        this.nome = _nome;
        this.id = _id;
        this.peso = _peso;
        this.altura = _altura;
    }

    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    public getNome(): string {
        return this.nome;
    }
    public setID(_id: string): void {
        this.id = _id;
    }
    public getID(): string {
        return this.id;
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }
    public getPeso(): number {
        return this.peso;
    }

    public setAltura(_altura: number): void {
        this.altura = _altura;
    }
    public getAltura(): number {
        return this.altura;
    }
}