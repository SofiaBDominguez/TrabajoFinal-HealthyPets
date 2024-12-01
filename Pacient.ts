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
        //Nos aseguramos de que el atributo especie sea "perro" o "gato" y sino le seteamos "otro"
        if (specie != "perro" && specie != "gato") {
            this.specie = "otro";
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

}