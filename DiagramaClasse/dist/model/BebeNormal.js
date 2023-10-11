"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebeNormal = void 0;
const Bebe_1 = require("./Bebe");
class BebeNormal extends Bebe_1.Bebe {
    constructor(_nome, _id, _peso, _altura, _vacinado) {
        super(_nome, _id, _peso, _altura);
        this.vacinado = _vacinado;
    }
    setVacinado(_vacinado) {
        this.vacinado = _vacinado;
    }
    getVacinado() {
        return this.vacinado;
    }
}
exports.BebeNormal = BebeNormal;
//# sourceMappingURL=BebeNormal.js.map