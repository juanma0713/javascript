

//tipo de variable String
let nombre = "Juan";
console.log(nombre);
console.log(typeof nombre);



//tipo de variable number
let numero = 200;
console.log(numero);
console.log(typeof numero);



//tipo de variable objeto
let objeto = {
    nombre: "Juan Manuel",
    apellido: "Ruiz Gil",
    telefono: "311267543"
}
console.log(objeto);
console.log(typeof objeto);




//tipo de variable boolean 
let bandera = false;
console.log(bandera);

//funciones
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion);




//tiposimbolo
let simbolo = Symbol("prueba simbolo");
console.log(simbolo);
console.log(typeof simbolo);




//definicion de clases
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);



//undefined
  let x;

console.log(x);
console.log(typeof x);

  x=undefined;

console.log(x);
console.log(typeof x);




//variables tipo null
let y=null;
console.log(y);
console.log(typeof y);
    

//arreglos
let autos = ['BMW','AUDI','VOLVO','MAZDA'];
console.log(autos);
console.log(typeof autos);



//cadenas vacias
let e = '';
console.log(e);
console.log(typeof e);

             


              //concatenacion







f="Juan";
console.log(f);
console.log(typeof f);

///////////////////////

//es una constante el valor no se puede cambiar
//const nombre = "yo";

let nombre1 = "Arlet";
let apellido2 = "perez";
let nombrecompleto = nombre1 + '  ' +apellido2;
console.log(nombrecompleto);
console.log(typeof nombrecompleto);

//mates

let vari=2;
let varid=4;
let varit=5;
let varic=3;

let multi = varid * varid;
let div = multi/varic;
let rest = div-varic;

console.log(typeof " mul: "+multi + " div: " +typeof div+" rest: "+rest)

//tipos de imprimir





 //operadores matematocos

 let a= 3, b=4, c= 1, d=4;


 let z= a+b;
 console.log("el resultado de la suma es: "+z);


z = a-b;
 console.log("el resultado de la resta es: "+z);


z= a*b;
 console.log("el resultado de la multiplicacion es: "+z);

z = a/b;
 console.log("el resultado de la division es: "+z);


z= a % b;
 console.log(z);


 //calculo exponencial
 z= a ** b;
 console.log(z);



let v = a*b + c/d;
console.log(v);

v = c+a * b/d;
console.log(v);




                 //operadores de comparacion




let r = 3,t=2,o="3";

//se revisa el valor sin importar el tipo
let p= r == o;
console.log(p);


//revisa los valores y tambien el tipo de dato
p = r===c;
console.log(p);


//revisa el valor sin importar el tipo
let m = r!=o;
console.log(m);


//revisa el valor validando el tipo de dato
m = r!==o;
console.log(m);

//operadores relacionales

m= r<t;
console.log(m);

m= r>t;
console.log(m);

m= r<=t;
console.log(m);

m= r>=t;
console.log(m);

let q = 2;


if(q%2==0){
console.log("el numero es par")
}else {
    console.log("el numero es impar")
}

// codiconal

let adulto = 18;
let menor= 17
let edad=20;
if(edad<adulto){
    console.log("es menor");
}else {
    console.log("es mayor")
}

// ocn && 

let j=11;
let valmin = 0, valmax = 10;

if(j>=valmin && j<=valmax){
    console.log("Esta dentro deel rango")
}else{
    console.log("no esta dentro de rango")
}

let vacaciones=true, descanso=false;
if(vacaciones || descanso){
    console.log("padre ira al evento");
}else{
    console.log("el padre no puede ir al evento");
}

// operador ternario ??

let resul = (1>2)? "verdadero" : "false";
console.log(resul);


let por = 40;
let par = (por%2==0)? "el numero es par" : "es impar";
console.log(par);

//String to number
let minumero= "18";
let edad1 = Number(minumero);
console.log(typeof edad1);

if(edad >= 18){
    console.log("puede votar");
}else {
    console.log("no puede votar");
}

// con ternario

let nrt = "19";

let nedad= Number(nrt);
let vot = (nedad>=19)? "no puede votar" : "puede votar";
console.log(vot);


// ejemplo isNan= is not a number

if ( isNaN(nrt)) {
    console.log("No es un numero");
    
}else{
    console.log("si es numero")
}

//solitos
let numeroio = 10;

if (numero == 1){
    console.log("El numero es uno");
}
else if( numero == 2){
    console.log("Numero dos");
}
else if ( numero == 3){
    console.log("Numero tres");
}
else{
    console.log("Numero desconocido");
}  

//switch 
let numero1 = 9;
switch (numero1){

    case 1:
       console.log("Numero uno");
    break;

    case 2:
        console.log("numero dos");
    break;

    case 3:
        console.log("esta en el rango");
    break;

    case 4:
        console.log("esta en el rango");
    break;

    default: 
    console.log("esta fuera del rango");


}





