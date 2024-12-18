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
    //Mostramos el menu
    console.log("\n Menu:");
    console.log("1. Crear nueva veterinaria");
    console.log("2. Seleccionar veterinarias");
    console.log("0. Salir");

    //Solicitamos al usuario que elija
    const option = rls.questionInt("Seleccione una opcion: ");

    //En base a la desicion del usuario tendremos cada caso
    switch (option) {
      case 0:
        console.log(
          `Gracias por visitar la red de Veterinarias ¡Hasta la proxima!`
        );
        bandera = false;
        break;

      case 1:
        //Le solicitamos al usuario los datos de la Vet
        const nameVet: string = rls.question(
          "Ingrese el nombre de la Veterinaria: "
        );
        const adressVet: string = rls.question(
          "Ingrese la direccion de la Veterinaria: "
        );
        //Creamos la veterinaria
        const newVet: Vet = new Vet(nameVet, adressVet);

        //Guardamos la Vet
        vets.push(newVet);

        console.log(`\n Veterinaria '${nameVet}' creada con éxito.`);

        console.log(newVet.toString());
        break;

      case 2:
        if (vets.length > 0) {
          //Mostramos la lista de veterinarias
          console.log("\n Veterinarias disponilbes");
          vets.forEach((vet, index) => {
            console.log("------------------------------------------------");
            console.log(`${index}. ${vet.getName()}`);
          });
          console.log("------------------------------------------------");

          let indexVet = rls.questionInt("Seleccione una veterinaria: ");

          //Verificamos que ingrese correctamente la veterinaria
          while (indexVet < 0 || indexVet >= vets.length) {
            console.log("Error: Elija una veterinaria valida");
            indexVet = rls.questionInt("Seleccione una veterinaria: ");
          }
          selectedVet = vets[indexVet];
          console.log(`\n Veterinaria seleccionada: ${selectedVet.getName()}`);
          console.log(selectedVet.toString());
          selectedVet.initVet();
        } else console.log("Error: Aun no hay veterinarias");

        break;
      default:
        console.log("Error, ingrese una opcion correcta: ");
    }
  }
}

//Ejecutamos el programa
main();
