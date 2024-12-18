export class Pacient {
    //declaramos los atributos del objeto
    private id: number;
    private idOwner: number;
    private name: string;
    private specie: string;

    constructor(name: string, specie: string, idOwner: number) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.idOwner = idOwner;
        //Nos aseguramos de que el atributo especie sea "perro" o "gato" y sino le seteamos "exotico"
        if (specie.toLowerCase() != "perro" && specie.toLowerCase() != "gato") {
            this.specie = "exotico";
        } else {
            this.specie = specie;
        }
    }

    getId(): number {
        return this.id;
    }

    getIdOwner(): number {
        return this.idOwner;
    }

    getName(): string {
        return this.name;
    }

    getSpecie(): string {
        return this.specie;
    }

    setSpecie(specie: string) {
        this.specie = specie;
    }

    setName(name: string) {
        this.name = name;
    }

    setId(id: number) {
        this.id = id;
    }

    setIdOwner(id: number) {
        this.idOwner = id;
    }

     /**
     * Representamos al paciente como una cadena de texto
     * @returns string
     */
     toString() : string{

        //Construimos una cadena de texto que incluye toda la información del paciente
        const informacion = `\n Paciente: {\n` +
        `  ID: ${this.id},\n` +
        `  ID Dueño: ${this.idOwner},\n` +
        `  Nombre: ${this.name},\n` +
        `  Especie: ${this.specie},\n` +
        `}`;

        //Retorna la cadena construida
        return informacion; 
    }
}