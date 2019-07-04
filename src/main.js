//import { data, filterData } from './data.js';
//const data = require('./data.js');
let info_html = document.getElementById("character_list");
let info = data();
//console.log(info);
//let character = info[0];
//console.log(character.name);

let button= document.getElementById("Femenino");
let button2= document.getElementById("Masculino");
let button3= document.getElementById("Indefinido");
let button_character = document.getElementById("boton_personajes");

button_character.addEventListener('click', () => {
    console.log("evento");
    info.forEach(function(character) {
        console.log(character.name);
      
    }); 
});

button.addEventListener('click',() => {
    let result = filterData(info,"Female");
    info_html.innerHTML = "";
    result.forEach(function(character) {
        console.log(character.name);
        info_html.innerHTML += print_character(character);
    }); 

});

button2.addEventListener('click',() => {
    let result = filterData(info,"Male");
    info_html.innerHTML = "";
    result.forEach(function(character) {
        console.log(character.name);
        info_html.innerHTML += print_character(character);
    }); 

});

button3.addEventListener('click',() => {
    let result = filterData(info,"unknown");
    info_html.innerHTML = "";
    result.forEach(function(character) {
        console.log(character.name);
        info_html.innerHTML += print_character(character);
    }); 

});


function print_character(character) {

    return '<div class="card">' +
                `<img src="${character.image}">` +
                '<div class="container">' +
                    `<h4>${character.name}</h4>` +
                    `<p>${character.status}</p>` +
                    `<p>${character.species}</p>` +
                    `<p>${character.gender}</p>` +
                    `<p>${character.origin.name}</p>` +
                    `<p>${character.location.name}</p>` +
                '</div>' +
            '</div>';
    
}
