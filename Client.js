"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(name, phoneNumber) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.counterVisits = 1;
        this.phoneNumber = phoneNumber;
    }
    /**
     * Aumentamos en uno la cantidad de visitas y las mostramos
     */
    addVisit() {
        this.counterVisits++;
        console.log(`Visitas actualizadas para ${this.name}: ${this.counterVisits}`);
    }
    /**
     * Verificamos la cantidad de visitas
     * @returns true | false
     */
    isVip() {
        if (this.counterVisits >= 5) {
            return true;
        }
        return false;
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
    getCounterVisits() {
        return this.counterVisits;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    setCounterVisits(visits) {
        this.counterVisits = visits;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    /**
     * Representamos al cliente como una cadena de texto
     * @returns string
     */
    toString() {
        let vipStatus;
        //Verificamos si el cliente cumple con las condiciones para ser VIP
        if (this.isVip()) {
            vipStatus = "VIP";
        }
        else {
            vipStatus = "No VIP";
        }
        //Construimos una cadena de texto que incluye toda la información del cliente
        const informacion = `\n Cliente: {\n` +
            `  ID: ${this.id},\n` +
            `  Nombre: ${this.name},\n` +
            `  Teléfono: ${this.phoneNumber},\n` +
            `  Visitas: ${this.counterVisits},\n` +
            `  Estado: ${vipStatus}\n` +
            `}`;
        //Retorna la cadena construida
        return informacion;
    }
}
exports.Client = Client;
