"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vet = void 0;
const Client_1 = require("./Client");
const Pacient_1 = require("./Pacient");
const Supplier_1 = require("./Supplier");
const rls = __importStar(require("readline-sync"));
class Vet {
    constructor(name, adress) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.adress = adress;
        this.clients = [];
        this.suppliers = [];
        this.pacients = [];
    }
    initVet() {
        let flag = true;
        while (flag) {
            console.log("0. Salir");
            console.log("1. Manejar clientes");
            console.log("2. Manejar pacientes");
            console.log("3. Manejar proveedores");
            const option = rls.questionInt("Seleccione una opcion: ");
            switch (option) {
                case 1:
                    this.handleClients();
                    break;
                case 2:
                    break;
                case 3:
                    this.handleSuppliers();
                    break;
                case 0:
                    flag = false;
                    break;
                default:
                    console.log("Invalid number");
            }
        }
    }
    handleSuppliers() {
        var _a;
        let flag = true;
        while (flag) {
            console.log("\n 0. Salir");
            console.log("1. Agregar proveedor");
            console.log("2. Eliminar proveedor");
            console.log("3. Editar proveedor \n");
            let option = rls.questionInt("Seleccione una opcion: ");
            switch (option) {
                case 1:
                    let supplierName = "";
                    let supplierNumber = null;
                    while (supplierName === "" || supplierNumber === null) {
                        console.log("Error: Ingrese los datos nuevamente");
                        supplierName = rls.question("Ingrese el nombre: ");
                        supplierNumber = rls.questionInt("Ingrese el telefono: ");
                    }
                    this.addSupplier(supplierName, supplierNumber);
                    console.log(`\n Proveedor '${supplierName}' agregado a la veterinaria '${this.getName()}\n'.`);
                    console.log(this.getSuppliers().toString() + "\n");
                    break;
                case 2:
                    if (this.suppliers.length > 0) {
                        this.setCurrentSupplier(this.selectSupplier());
                        this.removeSupplier(this.currentSupplier.getId());
                        console.log(`\n Proveedor '${(_a = this.currentSupplier) === null || _a === void 0 ? void 0 : _a.getName()}' eliminado con exito .`);
                        this.currentSupplier = undefined;
                    }
                    else
                        console.log("Error: Agregue un Proveedor primero para poder eliminarlo.");
                    break;
                case 3:
                    if (this.suppliers.length > 0) {
                        this.setCurrentSupplier(this.selectSupplier());
                        console.log("Proveedor seleccionado: ", this.currentClient, "\n");
                        console.log("Ingrese los nuevos datos del Proveedor: ");
                        let name = rls.question("Ingrese el nombre: ");
                        let cellphone = rls.questionInt("Ingrese el telefono: ");
                        this.updateSupplier(name, cellphone, this.currentSupplier.getId());
                        console.log(`\n Proveedor '${this.currentSupplier}' actualizado con exito .`);
                        this.currentClient = undefined;
                    }
                    else
                        console.log("Error: Agregue un Proveedor primero para poder editarlo.");
                    break;
                case 0:
                    console.log(`Gracias por visitar ${this.getName()} ¡Hasta la proxima!`);
                    flag = false;
                    break;
                default:
                    console.log("Error, ingrese una opcion correcta: ");
            }
        }
    }
    selectSupplier() {
        console.log("\n Proveedores disponilbes");
        this.suppliers.forEach((supplier, index) => {
            console.log("------------------------------------------------");
            console.log(`${index}. ${supplier.getName()}`);
        });
        console.log("------------------------------------------------");
        const indexSupplier = rls.questionInt("Seleccione un proveedor: ");
        return this.suppliers[indexSupplier];
    }
    setCurrentSupplier(supplier) {
        this.currentSupplier = supplier;
    }
    getSuppliers() {
        return this.suppliers;
    }
    handleClients() {
        var _a;
        let flag = true;
        while (flag) {
            console.log("\n 0. Salir");
            console.log("1. Agregar cliente");
            console.log("2. Eliminar cliente");
            console.log("3. Editar cliente ");
            console.log("4. Agregar Visita \n");
            let option = rls.questionInt("Seleccione una opcion: ");
            switch (option) {
                case 1:
                    let clientName = "";
                    let clientNumber = null;
                    while (clientName === "" || clientNumber === null) {
                        console.log("Error: Ingrese los datos nuevamente");
                        clientName = rls.question("Ingrese el nombre: ");
                        clientNumber = rls.questionInt("Ingrese el telefono: ");
                    }
                    this.addClient(clientName, clientNumber);
                    console.log(`\n Cliente '${clientName}' agregado a la veterinaria '${this.getName()}\n'.`);
                    console.log(this.getClients().toString() + "\n");
                    break;
                case 2:
                    if (this.clients.length > 0) {
                        this.setCurrentClient(this.selectClient());
                        this.removeClient(this.currentClient.getId());
                        console.log(`\n Cliente '${(_a = this.currentClient) === null || _a === void 0 ? void 0 : _a.getName()}' eliminado con exito .`);
                        this.currentClient = undefined;
                    }
                    else
                        console.log("Error: Agregue un cliente primero para poder eliminarlo.");
                    break;
                case 3:
                    if (this.clients.length > 0) {
                        this.setCurrentClient(this.selectClient());
                        console.log("Cliente seleccionado: ", this.currentClient, "\n");
                        console.log("Ingrese los nuevos datos del cliente: ");
                        let name = rls.question("Ingrese el nombre: ");
                        let cellphone = rls.questionInt("Ingrese el telefono: ");
                        this.updateClient(name, cellphone, this.currentClient.getId());
                        console.log(`\n Cliente '${this.currentClient}' actualizado con exito .`);
                        this.currentClient = undefined;
                    }
                    else
                        console.log("Error: Agregue un cliente primero para poder editarlo.");
                    break;
                case 4:
                    if (this.clients.length > 0) {
                        this.setCurrentClient(this.selectClient());
                        this.currentClient.addVisit();
                    }
                    else
                        console.log("Error: Agregue un cliente primero para poder editarlo.");
                    break;
                case 0:
                    console.log(`Gracias por visitar ${this.getName()} ¡Hasta la proxima!`);
                    flag = false;
                    break;
                default:
                    console.log("Error, ingrese una opcion correcta: ");
            }
        }
    }
    setCurrentClient(client) {
        this.currentClient = client;
    }
    selectClient() {
        console.log("\n Clientes disponilbes");
        this.clients.forEach((client, index) => {
            console.log("------------------------------------------------");
            console.log(`${index}. ${client.getName()}`);
        });
        console.log("------------------------------------------------");
        const indexClient = rls.questionInt("Seleccione un cliente: ");
        return this.clients[indexClient];
    }
    getClientByNameAndNumber(name, phoneNumber) {
        return this.clients.find((client) => client.getName() === name && client.getPhoneNumber() === phoneNumber);
    }
    /**
     * Buscamos el cliente segun su id
     * @param id
     * @returns Client | undefined
     */
    getClientById(id) {
        return this.clients.find((client) => client.getId() === id);
    }
    /**
     * Agregamos un cliente a nuestra lista de clientes
     * @param name string
     * @param counterVisits number
     * @param phoneNumber number
     */
    addClient(name, phoneNumber) {
        let client = new Client_1.Client(name, phoneNumber);
        this.clients.push(client);
    }
    /**
     * Agregamos una visita al cliente segun su id
     * @param id
     */
    addVisit(id) {
        const cliente = this.getClientById(id);
        if (cliente) {
            cliente.addVisit();
        }
        else {
            console.log("Cliente no encontrado.");
        }
    }
    /**
     * Removemos un cliente segun su id
     * @param id
     */
    removeClient(id) {
        this.clients.forEach((client, index) => {
            if (client.getId() === id) {
                this.clients.splice(index, 1);
            }
        });
    }
    /**
     * Actualizamos la informacion de un cliente en especifico
     * @param newClient Client
     */
    updateClient(name, phoneNumber, id) {
        this.clients.forEach((client, index) => {
            if (client.getId() === id) {
                this.clients[index].setName(name);
                this.clients[index].setPhoneNumber(phoneNumber);
            }
        });
    }
    /**
     * Agregamos un provedor
     * @param name string
     * @param phoneNumber number
     */
    addSupplier(name, phoneNumber) {
        let supplier = new Supplier_1.Supplier(name, phoneNumber);
        this.suppliers.push(supplier);
    }
    /**
     * Removemos un provedor segun su id
     * @param id
     */
    removeSupplier(id) {
        this.suppliers.forEach((supplier, index) => {
            if (supplier.getId() === id) {
                this.suppliers.splice(index, 1);
            }
        });
    }
    /**
     * Actualizamos la informacion de un provedor en especifico
     * @param newSupplier Supplier
     */
    updateSupplier(name, phoneNumber, id) {
        this.suppliers.forEach((supplier, index) => {
            if (supplier.getId() === id) {
                this.suppliers[index].setName(name);
                this.suppliers[index].setPhoneNumber(phoneNumber);
            }
        });
    }
    /**
     * Agregamos un paciente
     * @param name string
     * @param specie string
     * @param idClient number
     */
    addPacient(name, specie, idClient) {
        let pacient = new Pacient_1.Pacient(name, specie, idClient);
        this.pacients.push(pacient);
    }
    /**
     * Removemos un paciente segun su id
     * @param id
     */
    removePacient(id) {
        this.pacients.forEach((pacient, index) => {
            if (pacient.getId() === id) {
                this.pacients.splice(index, 1);
            }
        });
    }
    /**
     * Actualizamos la informacion de un paciente en especifico
     * @param newPacient
     */
    updatePacient(newPacient) {
        this.pacients.forEach((pacient, index) => {
            if (pacient.getId() === newPacient.getId()) {
                this.pacients[index] = newPacient;
            }
        });
    }
    getClients() {
        return this.clients;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAdress() {
        return this.adress;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setAdress(adress) {
        this.adress = adress;
    }
    /**
     * Representamos a la veterinaria como una cadena de texto
     * @returns string
     */
    toString() {
        //Construimos una cadena de texto que incluye toda la información de la veterinaria
        const informacion = `\n Veterinaria: {\n` +
            `  ID: ${this.id},\n` +
            `  Nombre: ${this.name},\n` +
            `  Direccion: ${this.adress}, \n` +
            `  Clientes:\n ${this.clients.toString()}, \n ` +
            `  Pacientes: ${this.pacients.toString()}, \n ` +
            `  Proveedores: ${this.suppliers.toString()}, \n ` +
            `}`;
        //Retorna la cadena construida
        return informacion;
    }
}
exports.Vet = Vet;
