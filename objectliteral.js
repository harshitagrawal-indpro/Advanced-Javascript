let create = (color , brand) => ({color1:color, brand1: brand, engine: function(){
    console.log("engine started");
}})

let c1= create("black","Audo");
let c11= create("black1","Audo1");
let c12= create("black2","Audo2");

console.log(c1);
console.log(c11);
console.log(c12);