// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const data = () => {
  return 'rickandmorty.js';
};

const sortBY = () => {
  return '';
};

const filtrado = () => {
  return 'filtrado';
};

const mostrar = () => {
  return 'mostrar';

};

document.querySelector('#botonesPersonajes').addEventListener('click', traerDatos());
function traerDatos(){
const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'rickandmorty.json', true);
xhttp.send();
xhttp.onreadystatechange = function(){

  if(this.readyState == 4 && this.status == 200){

    console.log(this.responseText);
  } 
}

}

window.example = {
  example,
  filtrado,
  mostrar
};

