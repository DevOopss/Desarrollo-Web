//Spread operator
let person = { name: 'Oscar', age: '28' };
let pais = 'Uruguay';
let data = { id: 1, ...person, pais };
console.log(data); //{ id: 1, name: 'Oscar', age: '28', pais: 'Uruguay' }
//rest
function sum(num, ...values) {
    console.log(values);
    let long = values.length - 1;
    console.log(num + long + ' Lady');
    return num + values[0];
}
sum(10, 1, 2, 3, 4,); 
/*
[ 1, 2, 3, 4 ]
13 Lady
*/

//enhanced object literals

function newUser(puser, page, pcountry) {

    /*return {
        puser: user,
        page: age,
        pcountry: country
    }*/
    return {
        puser,
        page,
        pcountry,
        id: 5698
    }

}
console.warn(newUser('Lady', 35, 'UY', newUser.id));
/////////////////////////////////////
const otrafunct = () => {
    return new Promise((resolve, reject) => {
        if (!true) {
            resolve('Lady');
        } else {
            reject('Pobre Lady');
        }
    });
}

otrafunct().then(response => console.log(response)).catch(err => console.log(err));

 var a = "Lady";
if(!!a){
console.log("if");
} else {
    console.log("else");
}

//

const hello = () => {
    console.warn("Lady");
}
export default hello();

//import hello from "apuntes.js";
/*
agregar a package.json al final después de la licencia:
"license": "MIT",
"type": "module"

*/

//Clases

class User {
    //metodos
    greeting() {
        return 'Holis';
    }
};
//puedo llamar tantas veces a la clase como se me ocurra
const gndx = new User();
console.log(gndx.greeting());

// Constructor

class usuario {
    constructor (nombre, edad) {
        // console.log('Nuevo Usuario');
        this.name = nombre;
        this.age = edad;
    }
    speak() {
        return 'Holis';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;

    }
    set uAge(n) {
        this.age = n;
    }

};

const david = new usuario('david', 15);
console.log(david.uAge);
console.log(david.uAge = 20);

//generator

function* iterate(array) {
    for (let value of array) {
        yield value;

    };
}
const it = iterate(['oscar', 'davi', 'ana', 'ulises', 'jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//////////////////

const arreglo1 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9, 10];
const sinRepe = [... new Set(arreglo1)];
console.log(sinRepe);

////////////////////////////////////////

const list = new Set();
list.add('Item1');
list.add('Item2');
list.add('Item3');
list.add('Item4').add("item 5");;
console.log(list);

//                              ECMAScript 7

const data2 = 2 ** 2;
console.log(data2);

//Array includes

let numbers = [1, 3, 4, 6, 7, 8]
console.log(numbers.includes(4));
//devuleve true or false. Es case sensitive.

const countries = { MX: 'Mexico', CO: 'Colombia' };
console.log(Object.entries(countries));

console.log(Object.values(countries));

//String padding
var cadena = "Lady";
console.log(cadena.padStart(15, 'Hola')); //HolaHolaHolLady
console.log(cadena.padStart(cadena.length + 4, 'Hola')); //HolaLady
console.log(cadena.padEnd(cadena.length + 4, 'Hola')); //LadyHola
console.log(cadena.padEnd(15, 'Hola')); //LadyHolaHolaHol

//Trailing commas
const edades = [24, 34, 25, 24, , , 45, ,];
console.log(edades, edades.length); //[ 24, 34, 25, 24, <2 empty items>, 45, <1 empty item> ] 8

//async functions

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async'), 2000)
            : reject(new Error('Error'));

    });
};

const otrafuncion = async () => {
const something = await fnAsync();
console.log(something);
console.log('Hola');
};

console.log('Before');
otrafuncion();
console.log('After');


// ECMAScript 9
//regex
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-02');
console.table(matchers);

//spread

const user2 = {username: 'gndx', age: 34, pais: 'UY'};
const {username, ...values} = user2;
  console.log(username);
  console.log(values);
  ////////////////
  //finally
  const otrafunct2 = () => {
    return new Promise((resolve, reject) => {
        if (!true) {
            resolve('Lady');
        } else {
            reject('Pobre Lady');
        }
    });
}

otrafunct2().then(response => console.log(response)).catch(err => console.log(err)).finally(()=> console.log('finalmente'));

async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);

}
const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

async function ArrayOfNames(arreglo){
    for await (let value of arreglo){
        console.log(value);
    }
}
const names = ArrayOfNames(['Lady', 'Romina', 'Potota', 'El Wiwí']);
console.log('After');


//ECMAScript 10
//flat
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));
/*[
  1, 1, 2, 3, 4,
  1, 3, 5, 6, 1,
  2, 4
]*/

//flatmap
const array2 =[1, 2, 3, 4, 5];
console.log(array2.flatMap(v=>[v, v*2]));

//trimstart-trimend
const holitas ='          Lady          ';
console.log(holitas);
console.log(holitas.trimStart().trimEnd());


//try catch

try {
    lady();
} catch (error){
    console.log(error);
}

try {
    lady();
} catch {
    console.log('No encuentro la funcion');
} finally {
    console.log('finalmente');
}

//fromentries
const entries = new Map([['name', 'oscar'], ['age', '34']]);
console.log(entries);
console.log(Object.fromEntries(entries));

//ECMAScript 11

//optional-chaining

const usuarios = {
    gndx : {
        pais: 'UY',
    },
    ana: {
        pais : 'MX',
    },
};

console.log(usuarios.gndx.pais);

console.log(usuarios?.lady?.edad); //undefined


//bigInt

const aBigNumber = 85207896560565495185209519517895713850168418760566485618n; //el n al final es porque el número es enorme
const anotherBigNumber = BigInt (785189246308524185684100006396875230872);

//nullish
/*
const otronumero =2;
const validate = otronumero ?? 5;
console.log(validate);
//me devuelve 2

*/
const otronumero =null;
const validate = otronumero ?? 5;
console.log(validate);
//me da 5
/*
esto significa que si otronumero es nulo le asignamos el 5
*/
//Promise all settled

const promesa1 = new Promise ((resolve, reject) => reject('Reject'));
const promesa2 = new Promise ((resolve, reject) => resolve('resolve'));
const promesa3 = new Promise ((resolve, reject) => resolve('resolve 2'));
const promesa4 = new Promise (function (resolve, reject) { resolve('resolve 3')});

Promise.allSettled([promesa1, promesa2, promesa3, promesa4]).then(response => console.log(response));

//global this

/*
Resuelve incompatibilidades entre diferentes ambientes
*/
console.log(window); //navegador
console.log(global); //node
console.log(self); //webworker
console.log(globalThis); //expone conforme al contexto

//Match all

const regex2 = /\b(Apple)+\b/g;
const frutas = 'Apple, Banana, Apple, Kiwi, Kiwi, etc';
for (const match of frutas.matchAll(regex2)){
console.log(match);
}
//Dynamic import
/*const ruta = "./modulo.js"

// Utilizando promesas
import(ruta)
    .then( modulo => {
        modulo.funcion1()
        modulo.funcion2()
    })
    .catch(error => console.log(error))
    
// Utilizando async/await
async function importarModulo(rutaDelModulo) {
    const modulo = await import(rutaDelModulo)
    modulo.funcion1()
    modulo.funcion2()
}

importarModulo(ruta)

///////////////
const boton = document.getElementById("boton")

boton.addEventListener("click", async function () {
    const modulo = await import('./modulo.js')
    modulo.funcion()
})
//<script type="module" src="ruta/modulo.js"></script> codigo en html
*/

//ECMAScript 12

//numeric separator
const value2 = 100_000_000;
console.log(value2);

//replace all

const string2 ='JavaScript es maravilloso';
const replacedString =string.replace("JavaScript", 'TypeScript');
console.log(replacedString);

