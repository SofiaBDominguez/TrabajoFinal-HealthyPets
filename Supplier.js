"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
class Supplier {
    constructor(name, phoneNumber) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    /**
     * Representamos al proveedor como una cadena de texto
     * @returns string
     */
    toString() {
        //Construimos una cadena de texto que incluye toda la información del proveedor
        const informacion = `\n Proveedor: {\n` +
            `  ID: ${this.id},\n` +
            `  Nombre: ${this.name},\n` +
            `  Telefono: ${this.phoneNumber},\n` +
            `}`;
        //Retorna la cadena construida
        return informacion;
    }
}
exports.Supplier = Supplier;
