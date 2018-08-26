enum animals{
    dog,
    cat,
    lion,
    tiger
}
function list(sound: string, spec:list) {
    console.log(sound+" has a sound for "+animals[0])
}
list("bow bow",animals[0])