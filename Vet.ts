import { Client } from "./Client";
import { Pacient } from "./Pacient";
import { Supplier } from "./Supplier";
import * as rls from "readline-sync";

export class Vet {
  //declaramos los atributos del objeto
  private id: number;
  private name: string;
  private adress: string;
  private clients: Client[];
  private suppliers: Supplier[];
  private pacients: Pacient[];
  private currentClient: Client | undefined;
  private currentPacient: Pacient | undefined;
  private currentSupplier: Supplier | undefined;

  constructor(name: string, adress: string) {
    //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
    this.id = Date.now();
    this.name = name;
    this.adress = adress;
    this.clients = [];
    this.suppliers = [];
    this.pacients = [];
  }

  /**
   * Metodo que da inicio al bucle de la Vete
   */
  initVet(): void {
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
          if (this.clients.length > 0) {
            this.handlePacients();
          } else console.log("Error: Agregue un cliente primero antes de agregar un paciente \n");
          break;
        case 3:
          this.handleSuppliers();
          break;
        case 0:
          console.log(
            `Gracias por visitar ${this.getName()} ¡Hasta la proxima!`
          );
          flag = false;
          break;
        default:
          console.log("Error, ingrese una opcion correcta: ");
      }
    }
  }

  /**
   * Muestra las opciones (ABM) de los Proveedores
   */
  handleSuppliers(): void {
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
          console.log(
            `\n Proveedor '${supplierName}' agregado a la veterinaria '${this.getName()}' \n.`
          );

          console.log(this.getSuppliers().toString() + "\n");
          break;
        case 2:
          if (this.suppliers.length > 0) {
            this.setCurrentSupplier(this.selectSupplier());
            this.removeSupplier(this.currentSupplier!.getId());
            console.log(
              `\n Proveedor '${this.currentSupplier?.getName()}' eliminado con exito .`
            );
            this.currentSupplier = undefined;
          } else
            console.log(
              "Error: Agregue un Proveedor primero para poder eliminarlo."
            );
          break;
        case 3:
          if (this.suppliers.length > 0) {
            this.setCurrentSupplier(this.selectSupplier());
            console.log("Proveedor seleccionado: ", this.currentClient, "\n");
            console.log("Ingrese los nuevos datos del Proveedor: ");
            let name = rls.question("Ingrese el nombre: ");
            let cellphone = rls.questionInt("Ingrese el telefono: ");
            this.updateSupplier(name, cellphone, this.currentSupplier!.getId());
            console.log(
              `\n Proveedor '${this.currentSupplier}' actualizado con exito .`
            );
            this.currentClient = undefined;
          } else
            console.log(
              "Error: Agregue un Proveedor primero para poder editarlo."
            );
          break;
        case 0:
          console.log(
            `Volviendo al menu principal de ${this.getName()}`
          );
          flag = false;
          break;

        default:
          console.log("Error, ingrese una opcion correcta: ");
      }
    }
  }

  /**
  * Muestra las opciones (ABM) de los Clientes
  */
  handleClients(): void {
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
          let clientName = rls.question("Ingrese el nombre: ");
          let clientNumber = rls.questionInt("Ingrese el telefono: ");
          while (clientName === "" || clientNumber === null) {
            console.log("Error: Ingrese los datos nuevamente");
            clientName = rls.question("Ingrese el nombre: ");
            clientNumber = rls.questionInt("Ingrese el telefono: ");
          }
          this.addClient(clientName, clientNumber);
          console.log(
            `\n Cliente '${clientName}' agregado a la veterinaria '${this.getName()}\n'.`
          );

          console.log(this.getClients().toString() + "\n");
          break;
        case 2:
          if (this.clients.length > 0) {
            this.setCurrentClient(this.selectClient());
            this.removeClient(this.currentClient!.getId());
            console.log(
              `\n Cliente '${this.currentClient?.getName()}' eliminado con exito .`
            );
            this.currentClient = undefined;
          } else
            console.log(
              "Error: Agregue un cliente primero para poder eliminarlo."
            );
          break;
        case 3:
          if (this.clients.length > 0) {
            this.setCurrentClient(this.selectClient());
            console.log("Cliente seleccionado: ", this.currentClient, "\n");
            console.log("Ingrese los nuevos datos del cliente: ");
            let name = rls.question("Ingrese el nombre: ");
            let cellphone = rls.questionInt("Ingrese el telefono: ");
            this.updateClient(name, cellphone, this.currentClient!.getId());
            console.log(
              `\n Cliente '${this.currentClient}' actualizado con exito .`
            );
            this.currentClient = undefined;
          } else
            console.log(
              "Error: Agregue un cliente primero para poder editarlo."
            );
          break;
        case 4:
          if (this.clients.length > 0) {
            this.setCurrentClient(this.selectClient());
            this.currentClient!.addVisit();
          } else
            console.log(
              "Error: Agregue un cliente primero para poder editarlo."
            );
          break;
        case 0:
          console.log(
            `Volviendo al menu principal de ${this.getName()}`
          );
          flag = false;
          break;

        default:
          console.log("Error, ingrese una opcion correcta: ");
      }
    }
  }

  /**
  * Muestra las opciones (ABM) de los Pacientes
  */
  handlePacients(): void {
    let flag = true;
    while (flag) {
      console.log("\n 0. Salir");
      console.log("1. Agregar Paciente");
      console.log("2. Eliminar Paciente");
      console.log("3. Editar Paciente \n");
      let option = rls.questionInt("Seleccione una opcion: ");
      switch (option) {
        case 1:
          let pacientName = rls.question("Ingrese el nombre: ");
          let pacientSpecie = rls.question("Ingrese la especie: ");
          while (pacientName === "" || pacientSpecie === null) {
            console.log("Error: Ingrese los datos nuevamente");
            pacientName = rls.question("Ingrese el nombre: ");
            pacientSpecie = rls.question("Ingrese la especie: ");
          }
          this.setCurrentClient(this.selectClient());
          this.addPacient(pacientName, pacientSpecie, this.currentClient!.getId());
          console.log(
            `\n Paciente '${pacientName}' del cliente ${this.currentClient?.getName()} agregado a la veterinaria '${this.getName()}\n'.`
          );

          console.log(this.getPacients().toString() + "\n");
          break;
        case 2:
          if (this.pacients.length > 0) {
            this.setCurrentPacient(this.selectPacient());
            this.removePacient(this.currentPacient!.getId());
            console.log(
              `\n Paciente '${this.currentPacient?.getName()}' eliminado con exito .`
            );
            this.currentPacient = undefined;
          } else
            console.log(
              "Error: Agregue un Paciente primero para poder eliminarlo."
            );
          break;
        case 3:
          if (this.pacients.length > 0) {
            this.setCurrentPacient(this.selectPacient());
            console.log("Paciente seleccionado: ", this.currentPacient, "\n");
            console.log("Ingrese los nuevos datos del Paciente: ");
            let name = rls.question("Ingrese el nombre: ");
            let specie = rls.question("Ingrese la especie: ");
            this.updatePacient(name, specie, this.currentPacient!.getId());
            console.log(
              `\n Paciente '${this.currentPacient}' actualizado con exito .`
            );
            this.currentPacient = undefined;
          } else
            console.log(
              "Error: Agregue un Paciente primero para poder eliminarlo."
            );
          break;
        case 0:
          console.log(
            `Volviendo al menu principal de ${this.getName()}`
          );
          flag = false;
          break;

        default:
          console.log("Error, ingrese una opcion correcta: ");
      }
    }

  }

  /**
   * Muestra y solicita al usuario la eleccion de un cliente
   * @returns Client
   */
  selectClient(): Client {
    console.log("\n Clientes disponilbes");
    this.clients.forEach((client, index) => {
      console.log("------------------------------------------------");
      console.log(`${index}. ${client.getName()}`);
    });
    console.log("------------------------------------------------");

    let indexClient = rls.questionInt("Seleccione un Cliente: ");
    while (indexClient < 0 || indexClient >= this.clients.length) {
      console.log("Error: Ingrese una opcion valida");
      indexClient = rls.questionInt("Seleccione un Cliente: ");
    }
    return this.clients[indexClient];
  }

  /**
 * Muestra y solicita al usuario la eleccion de un proveedor
 * @returns Supplier
 */
  selectSupplier(): Supplier {
    console.log("\n Proveedores disponilbes");
    this.suppliers.forEach((supplier, index) => {
      console.log("------------------------------------------------");
      console.log(`${index}. ${supplier.getName()}`);
    });
    console.log("------------------------------------------------");

    let indexSupplier = rls.questionInt("Seleccione un Proveedor: ");
    while (indexSupplier < 0 || indexSupplier >= this.suppliers.length) {
      console.log("Error: Ingrese una opcion valida");
      indexSupplier = rls.questionInt("Seleccione un Proveedor: ");
    }
    return this.suppliers[indexSupplier];
  }

  /**
 * Muestra y solicita al usuario que elija un Paciente
 * @returns Pacient
 */
  selectPacient(): Pacient {
    console.log("\n Pacientes disponilbes");
    this.pacients.forEach((pacient, index) => {
      console.log("------------------------------------------------");
      console.log(`${index}. ${pacient.getName()}`);
    });
    console.log("------------------------------------------------");

    let indexPacient = rls.questionInt("Seleccione un Paciente: ");
    while (indexPacient < 0 || indexPacient >= this.pacients.length) {
      console.log("Error: Ingrese una opcion valida");
      indexPacient = rls.questionInt("Seleccione un Paciente: ");
    }
    return this.pacients[indexPacient];
  }

  /**
   * Busca y devuelve un cliente por nombre y numero de telefono
   * @param name string
   * @param phoneNumber number
   * @returns Client | undefined
   */
  getClientByNameAndNumber(
    name: string,
    phoneNumber: number
  ): Client | undefined {
    return this.clients.find(
      (client) =>
        client.getName() === name && client.getPhoneNumber() === phoneNumber
    );
  }

  getPacients(): Pacient[] {
    return this.pacients;
  }
  getSuppliers(): Supplier[] {
    return this.suppliers;
  }
  setCurrentSupplier(supplier: Supplier) {
    this.currentSupplier = supplier;
  }
  setCurrentClient(client: Client) {
    this.currentClient = client;
  }
  setCurrentPacient(pacient: Pacient) {
    this.currentPacient = pacient;
  }

  /**
   * Buscamos el cliente segun su id
   * @param id
   * @returns Client | undefined
   */
  getClientById(id: number): Client | undefined {
    return this.clients.find((client) => client.getId() === id);
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
   * Removemos un cliente segun su id
   * @param id
   */
  removeClient(id: number) {
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
  updateClient(name: string, phoneNumber: number, id: number) {
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
        this.suppliers.splice(index, 1);
      }
    });
  }
  /**
   * Actualizamos la informacion de un provedor en especifico
   * @param newSupplier Supplier
   */
  updateSupplier(name: string, phoneNumber: number, id: number) {
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
        this.pacients.splice(index, 1);
      }
    });
  }
  /**
   * Actualizamos la informacion de un paciente en especifico
   * @param newPacient
   */
  updatePacient(name: string, specie: string, id: number) {
    this.pacients.forEach((pacient, index) => {
      if (pacient.getId() === id) {
        this.pacients[index].setName(name);
        this.pacients[index].setSpecie(specie);
      }
    });
  }

  getClients() {
    return this.clients;
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
  toString(): string {
    //Construimos una cadena de texto que incluye toda la información de la veterinaria
    const informacion =
      `\n Veterinaria: {\n` +
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