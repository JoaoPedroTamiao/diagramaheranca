import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa {

    private cnpj: string;

    public constructor(_nome: string, _cnpj:string) {
        super(_nome);
        this.cnpj = _cnpj;
    }

    public setCNPJ(_cnpj: string): void {
        this.cnpj = _cnpj;
    }
    
    public getCNPJ(): string {
        return this.cnpj;
    }

    public documentoIdentificador(): string{
        return this.cnpj;
    }
}
