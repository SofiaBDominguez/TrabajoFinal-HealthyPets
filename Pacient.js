"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacient = void 0;
class Pacient {
    constructor(name, specie, idOwner) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.idOwner = idOwner;
        //Nos aseguramos de que el atributo especie sea "perro" o "gato" y sino le seteamos "exotico"
        if (specie != "perro" && specie != "gato") {
            this.specie = "exotico";
        }
        else {
            this.specie = specie;
        }
    }
    getId() {
        return this.id;
    }
    getIdOwner() {
        return this.idOwner;
    }
    getName() {
        return this.name;
    }
    getSpecie() {
        return this.specie;
    }
    setSpecie(specie) {
        this.specie = specie;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setIdOwner(id) {
        this.idOwner = id;
    }
    /**
    * Representamos al paciente como una cadena de texto
    * @returns string
    */
    toString() {
        //Construimos una cadena de texto que incluye toda la información del paciente
        const informacion = `\n Paciente: {\n` +
            `  ID: ${this.id},\n` +
            `  ID Dueño: ${this.idOwner},\n` +
            `  Nombre: ${this.name},\n` +
            `  Especie: ${this.specie},\n` +
            `}`;
        //Retorna la cadena construida
        return informacion;
    }
}
exports.Pacient = Pacient;
