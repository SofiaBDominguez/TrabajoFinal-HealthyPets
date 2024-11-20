export class Pacient {
    private id: number;
    private name: string;
    private specie: string;

    constructor(name:string, specie:string){
        this.id = Date.now();
        this.name = name;
        this.specie = specie;
    }

    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }

    getSpecie():string{
        return this.specie;
    }


    setSpecie(specie:string) {
        this.specie = specie;
    }

    setName(name:string){
        this.name = name;
    }

    setId(id:number){
        this.id = id;
    }

}