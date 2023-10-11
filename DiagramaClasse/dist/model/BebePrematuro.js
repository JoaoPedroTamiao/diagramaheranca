"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebePrematuro = void 0;
const Bebe_1 = require("./Bebe");
class BebePrematuro extends Bebe_1.Bebe {
    constructor(_nome, _id, _peso, _altura, _semanaGestacao) {
        super(_nome, _id, _peso, _altura);
        this.semanasGestacao = _semanaGestacao;
    }
    setSemanaGestacao(_semanaGestacao) {
        this.semanasGestacao = _semanaGestacao;
    }
    getSemanaGestacao() {
        return this.semanasGestacao;
    }
}
exports.BebePrematuro = BebePrematuro;
//# sourceMappingURL=BebePrematuro.js.map