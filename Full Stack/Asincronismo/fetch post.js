/*import fetch from 'node-fetch'; 

const API = 'https://api.escuelajs.co/api/v1';*/
import fetch from 'node-fetch'; 

const API = 'https://api.escuelajs.co/api/v1';


function fetchData (urlAPI) {
    return fetch(urlAPI);
}

function postData(urlAPI, data){
    const response =fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        header: {
            'Content-Type': 'application/json',

        },
        body : JSON.stringify(data),
    });
    return response;
}

const data= {
    "title": "Bitdefender",
  "price": 123,
  "description": "Antivirus",
  "categoryId": 6,
  "images": ["https://www.bitdefender.es/etc.clientlibs/bitdefender/clientlibs/clientlib-site/resources/images/aem/b-red-mask.png"]
};
postData(`${API}/producs`).then(response => response.json).then(console.log(data)).catch(error =>{console.error(error);}).finally(() => {console.log('terminó')});

//
 /*import fetch from 'node-fetch'; 

 const API = 'https://api.escuelajs.co/api/v1';
*/
function postData2(urlAPI, data2){
    const response =fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',

        },
        body : JSON.stringify(data2),
    });
    return response;
}



const data2= {
    "id": "6",
    "name": "Security Software",
    "image": "https://www.ocu.org/-/media/ocu/images/home/tecnologia/antivirus/antivirus%20teclado.jpg"
};

postData2(`${API}/categories`).then(response => response.json).then(console.log(data2)).catch(error =>{console.error(error);}).finally(() => {console.log('terminó')});

/*{
  "title": "New Product",
  "price": 10,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}
https://www.bitdefender.es/etc.clientlibs/bitdefender/clientlibs/clientlib-site/resources/images/aem/b-red-mask.png
*/