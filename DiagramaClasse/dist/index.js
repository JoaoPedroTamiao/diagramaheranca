"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BebeNormal_1 = require("./model/BebeNormal");
const BebeMatrimorto_1 = require("./model/BebeMatrimorto");
const BebePrematuro_1 = require("./model/BebePrematuro");
const PessoaFisica_1 = require("./model/PessoaFisica");
const PessoaJuridica_1 = require("./model/PessoaJuridica");
const a1 = new BebeNormal_1.BebeNormal(`Tonin`, `102030`, 42, 111, true);
console.log(a1);
a1.setNome(`Marcelo`);
a1.setID(`301020`);
a1.setAltura(11);
a1.setPeso(200);
a1.setVacinado(false);
console.log(a1.getNome());
console.log(a1.getID());
console.log(a1.getAltura());
console.log(a1.getPeso());
console.log(a1.getVacinado());
const a2 = new BebeMatrimorto_1.BebeMatrimorto(`Magalardel`, `90532`, 12, 22, `Tombo`);
console.log(a2);
a2.setNome(`BLALALA`);
a2.setID(`1233232`);
a2.setAltura(1213321);
a2.setPeso(23423423);
a2.setCausa(`Tetano`);
console.log(a2.getNome());
console.log(a2.getID());
console.log(a2.getAltura());
console.log(a2.getPeso());
console.log(a2.getCausa());
const a3 = new BebePrematuro_1.BebePrematuro(`Stroheimer`, `202020202020`, 0, 1, 1000);
console.log(a3);
a3.setNome(`Sapinho malvado`);
a3.setID(`90909090`);
a3.setAltura(23);
a3.setPeso(3000);
a3.setSemanaGestacao(1);
console.log(a3.getNome());
console.log(a3.getID());
console.log(a3.getAltura());
console.log(a3.getPeso());
console.log(a3.getSemanaGestacao());
const p1 = new PessoaFisica_1.PessoaFisica(`Billi Joe`, `9999999999`);
console.log(p1);
p1.setNome(`Mamael`);
p1.setCPF(`43780323842`);
console.log(p1.getNome());
console.log(p1.getCPF());
console.log(p1.documentoIdentificador());
const p2 = new PessoaJuridica_1.PessoaJuridica(`Esgurmitador`, `73278434290`);
console.log(p2);
p2.setNome(`Bigor`);
p2.setCNPJ(`4222222222842`);
console.log(p2.getNome());
console.log(p2.getCNPJ());
console.log(p2.documentoIdentificador());
//# sourceMappingURL=index.js.map