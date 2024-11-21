export class Supplier {
    //declaramos los atributos del objeto
    private id: number;
    private name: string;
    private phoneNumber: number;

    constructor(name: string, phoneNumber: number) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPhoneNumber(): number {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber: number) {
        this.phoneNumber = phoneNumber;
    }

    setName(name: string) {
        this.name = name;
    }

    setId(id: number) {
        this.id = id;
    }

}
