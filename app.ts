import { Client } from "./Client";
import { Pacient } from "./Pacient";
import { Supplier } from "./Supplier";
import { Vet } from "./Vet";
import * as rls from "readline-sync";

function main(): void {
  //Creamos un arreglo de veterinarias
  const vets: Vet[] = [];

  // Variable para veterinaria seleccionada
  let selectedVet: Vet | undefined;

  //Creamos bandera para mostrar el menu completo
  let showMenu = false;

  console.log("Bienvenido a la red de Veterinarias!");

  //Bucle para mostrar menu
  let bandera = true;

  while (bandera) {
    console.log("\n Menu:");
    console.log("1. Crear nueva veterinaria");
    console.log("2. Seleccionar veterinarias");
    if (showMenu) {
      console.log("3. Agregar cliente");
      console.log("4. Agregar paciente");
      console.log("5. Agregar proveedor");
    }
    console.log("0. Salir");

    const option = rls.questionInt("Seleccione una opcion: ");

    switch (option) {
      case 0:
        console.log(
          `Gracias por visitar la red de Veterinarias ¡Hasta la proxima!`
        );
        bandera = false;
        break;

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

        console.log(`\n Veterinaria '${nameVet}' creada con éxito.`);

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

        const indexVet = rls.questionInt("Seleccione una veterinaria: ");

        //Verificamos que ingrese correctamente la veterinaria
        if (indexVet >= 0 && indexVet < vets.length) {
          selectedVet = vets[indexVet];
          //Bandera para mostrar el menu
          showMenu = true;
          console.log(`\n Veterinaria seleccionada: ${selectedVet.getName()}`);
          console.log(selectedVet.toString());

        } else {
          console.log("Índice inválido. Intente nuevamente.");
        }
        break;
      case 3:
        // Verificamos que haya una veterinaria seleccionada
        if (selectedVet) {
          //Creamos el cliente pidiendole nombre y telefono
          const clientName = rls.question("Ingrese el nombre: ");
          const clientNumber = rls.questionInt("Ingrese el telefono: ");

          selectedVet.addClient(clientName, clientNumber);

          console.log(
            `\n Cliente '${clientName}' agregado a la veterinaria '${selectedVet.getName()}'.`
          );

           console.log(selectedVet.getClients().toString());
        } else {
          console.log("Error: No se ha seleccionado ninguna veterinaria");
        }

        break; 

      default:
        console.log("Error, ingrese una opcion correcta: ");
    }
  }
}

//Ejecutamos el programa
main();
