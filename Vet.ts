import { Client } from "./Client";
import { Pacient } from "./Pacient";
import { Supplier } from "./Supplier";

export class Vet {
   
    //declaramos los atributos del objeto
    private id: number;
    private name: string;
    private adress: string;
    private clients: Client[];
    private suppliers: Supplier[];
    private pacients: Pacient[];

    constructor(name: string, adress: string) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.adress = adress;

        this.clients = [];
        this.suppliers = [];
        this.pacients = [];
    }
    getClientByNameAndNumber(name : string, phoneNumber : number ): Client | undefined {
        return this.clients.find(client => client.getName() === name && client.getPhoneNumber() === phoneNumber)  ;
    }
    /**
     * Buscamos el cliente segun su id
     * @param id 
     * @returns Client | undefined
     */
    getClientById(id: number): Client | undefined {
        return this.clients.find(client => client.getId() === id);
    }
    /**
     * Agregamos un cliente a nuestra lista de clientes
     * @param name string
     * @param counterVisits number
     * @param phoneNumber number
     */
    addClient(name: string, phoneNumber: number) {
        let client: Client = new Client(name, phoneNumber);
        this.clients.push(client);
    }
    /**
     * Agregamos una visita al cliente segun su id
     * @param id 
     */
    addVisit(id: number): void {
        const cliente = this.getClientById(id);
        if (cliente) {
            cliente.addVisit();
        } else {
            console.log("Cliente no encontrado.");
        }
    }
    /**
     * Removemos un cliente segun su id
     * @param id 
     */
    removeClient(id: number) {
        this.clients.forEach((client, index) => {
            if (client.getId() === id) {
                this.clients.splice(index, 1)
            }
        });
    }

    /**
     * Actualizamos la informacion de un cliente en especifico
     * @param newClient Client
     */
    updateClient(newClient: Client) {
        this.clients.forEach((client, index) => {
            if (client.getId() === newClient.getId()) {
                this.clients[index] = newClient;
            }
        });
    }
    /**
     * Agregamos un provedor 
     * @param name string
     * @param phoneNumber number
     */
    addSupplier(name: string, phoneNumber: number) {
        let supplier: Supplier = new Supplier(name, phoneNumber);
        this.suppliers.push(supplier);
    }
    /**
     * Removemos un provedor segun su id
     * @param id 
     */
    removeSupplier(id: number) {
        this.suppliers.forEach((supplier, index) => {
            if (supplier.getId() === id) {
                this.suppliers.splice(index, 1)
            }
        });
    }
    /**
     * Actualizamos la informacion de un provedor en especifico
     * @param newSupplier Supplier
     */
    updateSupplier(newSupplier: Supplier) {
        this.suppliers.forEach((supplier, index) => {
            if (supplier.getId() === newSupplier.getId()) {
                this.suppliers[index] = newSupplier;
            }
        });
    }
    /**
     * Agregamos un paciente 
     * @param name string
     * @param specie string
     * @param idClient number
     */
    addPacient(name: string, specie: string, idClient: number) {
        let pacient: Pacient = new Pacient(name, specie, idClient);
        this.pacients.push(pacient);
    }
    /**
     * Removemos un paciente segun su id
     * @param id 
     */
    removePacient(id: number) {
        this.pacients.forEach((pacient, index) => {
            if (pacient.getId() === id) {
                this.pacients.splice(index, 1)
            }
        });
    }
    /**
     * Actualizamos la informacion de un paciente en especifico
     * @param newPacient 
     */
    updatePacient(newPacient: Pacient) {
        this.pacients.forEach((pacient, index) => {
            if (pacient.getId() === newPacient.getId()) {
                this.pacients[index] = newPacient;
            }
        });
    }

    getClients() {
        return this.clients
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

     /**
     * Representamos a la veterinaria como una cadena de texto
     * @returns string
     */
     toString() : string{
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