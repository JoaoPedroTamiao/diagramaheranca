"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BebeMatrimorto = void 0;
const Bebe_1 = require("./Bebe");
class BebeMatrimorto extends Bebe_1.Bebe {
    constructor(_nome, _id, _peso, _altura, _causa) {
        super(_nome, _id, _peso, _altura);
        this.causa = _causa;
    }
    setCausa(_causa) {
        this.causa = _causa;
    }
    getCausa() {
        return this.causa;
    }
}
exports.BebeMatrimorto = BebeMatrimorto;
//# sourceMappingURL=BebeMatrimorto.js.map