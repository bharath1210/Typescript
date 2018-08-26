function buildName(firstName="andrew", ...lastName:string[]){
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  
let result2 = buildName("Bob", undefined);       
let result3 = buildName("Bob", "Adams", "Sr.");  
let result4 = buildName("Bob", "Adams");         
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);