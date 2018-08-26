let test = Symbol();
let test1 = Symbol();
let test2 = Symbol();   //symbol() is unique
let test3 = Symbol();   //here we can use Symbol() as key for oject

let TEST = {
    [test]: "bharath",
    [test1]: 5,
    [test2]:"333"
}
console.log(TEST[test])