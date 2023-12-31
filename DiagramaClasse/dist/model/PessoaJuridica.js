"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaJuridica extends Pessoa_1.Pessoa {
    constructor(_nome, _cnpj) {
        super(_nome);
        this.cnpj = _cnpj;
    }
    setCNPJ(_cnpj) {
        this.cnpj = _cnpj;
    }
    getCNPJ() {
        return this.cnpj;
    }
    documentoIdentificador() {
        return this.cnpj;
    }
}
exports.PessoaJuridica = PessoaJuridica;
//# sourceMappingURL=PessoaJuridica.js.map