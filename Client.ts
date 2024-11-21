export class Client {

    private id: number;
    private name: string;
    private counterVisits: number;
    private phoneNumber: number;

    constructor(name: string, counterVisits: number, phoneNumber: number) {
        this.id = Date.now();
        this.name = name;
        this.counterVisits = counterVisits;
        this.phoneNumber = phoneNumber;
    }

    getCounterVisits(): number {
        return this.counterVisits;
    }

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