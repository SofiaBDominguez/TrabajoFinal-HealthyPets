export class Client {
    //declaramos los atributos del objeto
    private id: number;
    private name: string;
    private counterVisits: number;
    private phoneNumber: number;

    constructor(name: string, phoneNumber: number) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.counterVisits = 1;
        this.phoneNumber = phoneNumber;
    }
    /**
     * Aumentamos en uno la cantidad de visitas y las mostramos
     */
    addVisit(): void {
        this.counterVisits++;
        console.log(`Visitas actualizadas para ${this.name}: ${this.counterVisits}`);
    }

    /**
     * Verificamos la cantidad de visitas 
     * @returns true | false
     */
    isVip(): boolean {
        if (this.counterVisits >= 5) {
            return true;
        }
        return false;
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

    getCounterVisits(): number {
        return this.counterVisits;
    }

    setPhoneNumber(phoneNumber: number) {
        this.phoneNumber = phoneNumber;
    }

    setCounterVisits(visits: number) {
        this.counterVisits = visits;
    }

    setName(name: string) {
        this.name = name;
    }

    setId(id: number) {
        this.id = id;
    }

    /**
     * Representamos al cliente como una cadena de texto
     * @returns string
     */
    toString() : string{
        let vipStatus : string; 

         //Verificamos si el cliente cumple con las condiciones para ser VIP
        if (this.isVip()) {
            vipStatus = "VIP";
        } else {
            vipStatus = "No VIP";
        }

        //Construimos una cadena de texto que incluye toda la información del cliente
        const informacion = `Cliente: {\n` +
        `  ID: ${this.id},\n` +
        `  Nombre: ${this.name},\n` +
        `  Teléfono: ${this.phoneNumber},\n` +
        `  Visitas: ${this.counterVisits},\n` +
        `  Estado: ${vipStatus}\n` +
        `}`;

        //Retorna la cadena construida
        return informacion; 
    }
}