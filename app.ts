import { Client } from "./Client";
import { Pacient } from "./Pacient";
import { Supplier } from "./Supplier";
import { Vet } from "./Vet";
import * as rls from "readline-sync";

function main(): void {
  //Creamos un arreglo de veterinarias
  const vets: Vet[] = [];

  console.log("Bienvenido a la red de Veterinarias!");

  let bandera = true;

  while (bandera) {
    console.log("\n Menu:");
    console.log("1. Crear nueva veterinaria");
    console.log("2. Ver veterinarias");
    console.log("3. Agregar cliente a una veterinaria");
    console.log("4. Agregar paciente a un cliente");
    console.log("5. Agregar proveedor a una veterinaria");
    console.log("6. Salir");

    const option = rls.questionInt("Seleccione una opcion: ");

    switch (option) {
      case 1:
        //Creamos la veterinaria
        const nameVet: string = rls.question(
          "Ingrese el nombre de la Veterinaria: "
        );
        const adressVet: string = rls.question(
          "Ingrese la direccion de la Veterinaria: "
        );
        const newVet: Vet = new Vet(nameVet, adressVet);

        vets.push(newVet);

        console.log(`Veterinaria '${nameVet}' creada con éxito.`);

        console.log(newVet.toString());
        break;

      case 2:
        //Mostramos la lista de veterinarias 
        console.log("\n Veterinarias disponilbes");
        vets.forEach((vet, index) => {
          console.log("------------------------------------------------");
          console.log(`${index}. ${vet.getName()}`);
        });
        console.log("------------------------------------------------");
        break;

      case 3:
        

      default:
        console.log("Error, ingrese una opcion correcta: ");
    }
  }
}

//Ejecutamos el programa
main();
