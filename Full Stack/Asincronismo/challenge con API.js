//XMLHTTPRequest
const API = 'https://api.escuelajs.co/api/v1';

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


function fetchData(urlAPI, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4 ){

            //0 -> Se ha inicializado
            //1 -> Loading
            //2 -> Se ha cargado
            //3 -> Procesamiento si hay descarga
            //4 -> Completado 
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
                // xhttp.responseText es text entonces JSON.parse para hacerlo objeto formato JSON
            }else {
                const error = new Error('Error' + urlAPI);
                return callback(error, null);
    
            }
            
        } 
    };
    xhttp.send();
};

fetchData(`${API}/products`, function (error1, data1){
    if (error1){
        return console.error(`ERROR en petición 1: ${error1}`);

    } else {
        fetchData(`${API}/products/${data1[5].id}`, function (error2, data2){
            if (error2){
                return console.error(`ERROR en petición 2: ${error2}`);
        
            } else {
                fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
                    if(error3){
                        return console.error(`ERROR en petición 3: ${error3}.`);
                    }else{
                        console.log(`Data1: ${data1[5]}. Data2: ${data2.title}. Data3: ${data3.name}`);

                    }
                });
            }
        });
    }
   
});
/*
En package.json poner dentro de scripts
"callback": "node ruta/archivo.js"

*/