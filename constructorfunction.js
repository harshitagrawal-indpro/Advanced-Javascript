// lets create an object constructor clas s
// for this u can use the followeing 

function Car(color, brand){
    this.color = color;
    this.brand = brand ;
    this.start = function(){
        console.log("Engine Started !")
    }
}

let car1 = new Car("blue","BMW");
let car2= new Car("black","Ferrari");