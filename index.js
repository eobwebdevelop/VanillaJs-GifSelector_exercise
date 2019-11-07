const tacoGifs = [
    'https://media.giphy.com/media/10wtUWPq0MgKfC/giphy.gif',
    'https://media.giphy.com/media/hrlfMpZwcEdiM/giphy.gif',
    'https://media.giphy.com/media/PrRVvcwgty7K0/giphy.gif'
];

const catsGifs = [
    'https://media.giphy.com/media/SJk9xTbxcg0DFDs89d/giphy.gif',
    'https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif',
    'https://media.giphy.com/media/5ztEKjZUDQ0XC/giphy.gif'
];

const friendsGifs = [
    'https://media.giphy.com/media/KiaU2EUyxjQB2/giphy.gif',
    'https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif',
    'https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif'
];


//declaro las variables
let selectId = document.getElementById('gif-selector');
let giftList = document.getElementById('gif-list');
let selectedValue;

//Comparo con los values de los ids
let idCat = document.getElementById('cats');
let idFriends = document.getElementById('friends');
let idTacos = document.getElementById('tacos');

//Creo el listener para capturar el evento con addEventListener
//object.addEventListener("change", myScript);  --> Mi objeto sería el id del selector que coge todo el objeto
//ESTRUCTURA QUE TIENE QUE MOSTRAR LOS GIFS YA ESTA HECHA
selectId.addEventListener("change", (e) => {
    if(e.target.value == idCat.value ){
         const renderCats = (catsGifs) => {
            giftList.innerHTML = ' ';
            catsGifs.map((gif) => {
               const li = document.createElement('li');
               const p = document.createElement('p');
               const img = document.createElement('img');
               img.src = gif;
               giftList.appendChild(li);
               li.appendChild(p);
               p.appendChild(img);
            })
         }
         renderCats(catsGifs);

    } else if (e.target.value == idFriends.value ){
        // No hace falta crear una funcion para llamarla en el mismo sitio donde la vas a crear
        //se puede eliminar la funcion y la llamada y funciona igual
            giftList.innerHTML = ' ';
            friendsGifs.map((gif) => {
               const li = document.createElement('li');
               const p = document.createElement('p');
               const img = document.createElement('img');
               img.src = gif;
               giftList.appendChild(li);
               li.appendChild(p);
               p.appendChild(img);
            })

       
    } else if(e.target.value == idTacos.value){

        
            giftList.innerHTML = ' ';
            tacoGifs.map((gif) => {
               const li = document.createElement('li');
               const p = document.createElement('p');
               const img = document.createElement('img');
               img.src = gif;
               giftList.appendChild(li);
               li.appendChild(p);
               p.appendChild(img);
            })

    
    }
})



