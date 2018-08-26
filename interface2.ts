interface abc{
    length?: number;
    width?: number;
}
function area(values: abc): { width : number; heigth: number }{
    let newarea = { width: 30, heigth: 50 };
    if (values.length)
    {
        newarea.length = values.length;

    }
    if (values.width)
    {
        newarea.width = values.width;
    }
    return newarea;
}
let box = { width: 200 };
console.log(area(box));