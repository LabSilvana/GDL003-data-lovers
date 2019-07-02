import { data } from './data.js';
let info_html = document.getElementById("character_list")
let info = data();
//console.log(info);
//let character = info[0];
//console.log(character.name);
info.forEach(function(character){
    //console.log(character.name);

    info_html.innerHTML += `<p>${character.name}</p>`;



});

