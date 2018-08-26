class telecom{
    name: string;
    constructor(brand: string) { this.name= brand }

    range(bandwidth: number = 0) {
        console.log(`we are ${this.name} brand with range of ${bandwidth}`)
    };
}
class landline extends telecom {
    constructor(brand: string) { super(brand); }
    range(bandwidth = 2000) {
        console.log("mobile specs..");
        super.range(bandwidth);
    }
    
}
class mobile extends telecom {
    constructor(brand: string) { super(brand); }
    range(bandwidth = 5000) {
        console.log("mobile specs..");
        super.range(bandwidth);
    }
}
let bsnl = new telecom("BSNL")
let moto:telecom = new mobile("moto")
bsnl.range();
moto.range(75000);