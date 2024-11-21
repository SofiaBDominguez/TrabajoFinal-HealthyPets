import { Client } from "./Client";
import { Pacient } from "./Pacient";
import { Supplier } from "./Supplier";

export class Vet {
    private id: number;
    private name: string;
    private adress: string;
    private clients: Client[];
    private suppliers: Supplier[];
    private pacients: Pacient[];

    constructor(name: string, adress: string) {
        this.id = Date.now();
        this.name = name;
        this.adress = adress;

        this.clients = [];
        this.suppliers = [];
        this.pacients = [];
    }

    addClient(name: string, counterVisits: number, phoneNumber: number) {
        let client: Client = new Client(name, counterVisits, phoneNumber);
        this.clients.push(client);
    }

    removeClient(id: number) {
        this.clients.forEach((client, index) => {
            if (client.getId() === id) {
                this.clients.splice(index, 1)
            }
        });
    }

    updateClient(newClient: Client) {
        this.clients.forEach((client, index) => {
            if (client.getId() === newClient.getId()) {
                this.clients[index] = newClient;
            }
        });
    }

    addSupplier(name: string, phoneNumber: number) {
        let supplier: Supplier = new Supplier(name, phoneNumber);
        this.suppliers.push(supplier);
    }

    removeSupplier(id: number) {
        this.suppliers.forEach((supplier, index) => {
            if (supplier.getId() === id) {
                this.suppliers.splice(index, 1)
            }
        });
    }

    updateSupplier(newSupplier: Supplier) {
        this.suppliers.forEach((supplier, index) => {
            if (supplier.getId() === newSupplier.getId()) {
                this.suppliers[index] = newSupplier;
            }
        });
    }

    addPacient(name: string, specie: string, idClient: number) {
        let pacient: Pacient = new Pacient(name, specie, idClient);
        this.pacients.push(pacient);
    }

    removePacient(id: number) {
        this.pacients.forEach((pacient, index) => {
            if (pacient.getId() === id) {
                this.pacients.splice(index, 1)
            }
        });
    }

    updatePacient(newPacient: Pacient) {
        this.pacients.forEach((pacient, index) => {
            if (pacient.getId() === newPacient.getId()) {
                this.pacients[index] = newPacient;
            }
        });
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getAdress(): string {
        return this.adress;
    }

    setName(name: string) {
        this.name = name;
    }

    setId(id: number) {
        this.id = id;
    }

    setAdress(adress: string) {
        this.adress = adress;
    }

}