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
const Vet_1 = require("./Vet");
const rls = __importStar(require("readline-sync"));
function main() {
    //Creamos un arreglo de veterinarias
    const vets = [];
    // Variable para veterinaria seleccionada
    let selectedVet;
    //Creamos bandera para mostrar el menu completo
    let showMenu = false;
    console.log("Bienvenido a la red de Veterinarias!");
    //Bucle para mostrar menu
    let bandera = true;
    while (bandera) {
        console.log("\n Menu:");
        console.log("1. Crear nueva veterinaria");
        console.log("2. Seleccionar veterinarias");
        console.log("0. Salir");
        const option = rls.questionInt("Seleccione una opcion: ");
        switch (option) {
            case 0:
                console.log(`Gracias por visitar la red de Veterinarias ¡Hasta la proxima!`);
                bandera = false;
                break;
            case 1:
                //Creamos la veterinaria
                const nameVet = rls.question("Ingrese el nombre de la Veterinaria: ");
                const adressVet = rls.question("Ingrese la direccion de la Veterinaria: ");
                const newVet = new Vet_1.Vet(nameVet, adressVet);
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
                }
                else
                    console.log("Error: Aun no hay veterinarias");
                break;
            default:
                console.log("Error, ingrese una opcion correcta: ");
        }
    }
}
//Ejecutamos el programa
main();
