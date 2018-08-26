let test = ["bharath", "mech", 2017];

for (let test1 of test) {
    console.log(test1);   //for..of  gives values
}

for (let test2 in test) {
    console.log(test2);   //for..in gives key
}