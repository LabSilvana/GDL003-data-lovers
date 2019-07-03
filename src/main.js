import { data, filterData } from './data.js';
let info_html = document.getElementById("character_list");
let info = data();
//console.log(info);
//let character = info[0];
//console.log(character.name);

let button= document.getElementById("Femenino");
let button2= document.getElementById("Masculino");
let button3= document.getElementById("Indefinido")
let button_character = document.getElementById("boton_personajes");

button_character.addEventListener('click', () => {
    console.log("evento");
    info.forEach(function(character) {
        console.log(character.name);
        //print_character(character);
    }); 
});

button.addEventListener('click',() => {
    let result = filterData(info,"Female");
    //console.log(result);
    info_html.innerHTML = "";
    result.forEach(function(character) {
        console.log(character.name);
        print_character(character);
    }); 

});

button2.addEventListener('click',() => {
    let result = filterData(info,"Male");
    //console.log(result);
    info_html.innerHTML = "";
    result.forEach(function(character) {
        console.log(character.name);
        print_character(character);
    }); 

});

button3.addEventListener('click',() => {
    let result = filterData(info,"unknown");
    //console.log(result);
    info_html.innerHTML = "";
    result.forEach(function(character) {
        console.log(character.name);
        print_character(character);
    }); 

});


function print_character(character) {

    info_html.innerHTML += `<p>${character.name}</p>`;
    info_html.innerHTML += `<p>${character.status}</p>`;
    info_html.innerHTML += `<p>${character.species}</p>`;
    info_html.innerHTML += `<p>${character.gender}</p>`;
    info_html.innerHTML += `<p>${character.origin.name}</p>`;
    info_html.innerHTML += `<p>${character.location.name}</p>`;
    info_html.innerHTML += `<img src="${character.image}">`;
}
