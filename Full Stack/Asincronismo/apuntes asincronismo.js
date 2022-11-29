//callbacks
 function summa (num1, num2){
    console.log('Estamos en summa');
    console.log(num1 + num2);
    return num1 + num2;
    
    
};

 function calc (num1, num2, callbackkaka){
    console.log('Estamos en calc con callbackkaka');
    
    return callbackkaka(num1, num2)
    

};
console.log('voy a llamar a calc');
calc (1, 2, summa);
console.log('terminó el proceso');
//sirve console.log(calc (1, 2, summa));

setTimeout(function(){
    console.log('Hola Mundo!');
}, 2000);

function salutatio(nombre, ...otrosvalores){
    console.log (`Hola ${nombre}.
        Los valores adicionales son ${otrosvalores}
    `);
};

setTimeout (salutatio, 2000, 'Lady');

//XMLHTTPRequest

const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            //0 -> Se ha inicializado
            //1 -> Loading
            //2 -> Se ha cargado
            //3 -> Procesamiento si hay descarga
            //4 -> Completado 
            callback(null, JSON.parse(xhttp.responseText));
            // xhttp.responseText es text entonces JSON.parse para hacerlo objeto formato JSON
        } else {
            const error = new Error('Error' + urlAPI);
            return callback(error, null);

        }
    };
    xhttp.send();
};

//promesa
const cows = 15;
const contarvacas = new Promise(function(resolve, reject){
    //resolve('Resuelto');
    if (cows > 10){
        resolve('Suficientes');
    } else {
        reject(' Faltan vaquitas');
    }
 });

 contarvacas.then(function(result){
    console.log(result);

 }).catch((error)=>{
    console.log(error);
 }).finally(function (){
    console.log('terminó la promesa de contar las vaquitas');
 });

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve('Listo'), 2000)
        : reject(new Error('Error'));
    });
}

async function llamofn () {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
} 
console.log('Before llamofn();');
llamofn();
console.log('After llamofn();');

/* Si no es función async el console da esto
Before llamofn();
Promise { <pending> }
Hello
After llamofn();
*/

function* generador(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const g = generador();
console.log(g); // Object [Generator] {}
console.log(g.next().value); //1
// NO se puede usar g.next().next() ni g.next.next(); No las reconoce como válidas
//console.log(g.next(3).value);  igual me devulelve 2.

function* iterar(arreglo){
    
   
        
       
            for (let value of arreglo){
             
            yield value;
        
        }
       
           
        };
        
    
   /* var arr = arreglo;
    for (let i =0; i=arr.length -1; i++){
        yield arr[i];
    }*/


const it = iterar([1, 2, 3, 4,]);
//console.log(it.next()); { value: 1, done: false }
console.log(it.next().value); //returnea 1
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


/*import fetch from'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

//Declaración de fetchData como la función del Generador
async function* fetchData(url) {
	const response = await fetch(url);
	yield await response.json();
}

//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value y done
fetchData(`${urlApi}/products`).next().then(({ value, done }) => {
	console.log(value); //Imprime la lista de los Productos de la API
	
	const idProduct =value[0].id; //Extrae el id del producto que queremos manipular
 	
	console.log(`Copiame: ${urlApi}/products/${idProduct} y pegame en el navegador`);
	
	fetchData(`${urlApi}/products/${idProduct}`).next().then(({ value, done }) => {
        	
		console.log(value.title); //Imprime el Título del producto solicitado
        
		const idCategory = value.category.id;
        
fetchData(`${urlApi}/categories/${idCategory}`).next().then(({ value, done }) => {
           
			console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
        	});
    	});
});*/