export class Client {
    //declaramos los atributos del objeto
    private id: number;
    private name: string;
    private counterVisits: number;
    private phoneNumber: number;

    constructor(name: string, counterVisits: number, phoneNumber: number) {
        //Manejamos el id con la funcion Date.now() para asegurarnos que no se repitan
        this.id = Date.now();
        this.name = name;
        this.counterVisits = counterVisits;
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
}