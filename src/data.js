//import RICKANDMORTY  from './data/rickandmorty/rickandmorty.js';
//const info = require('./data/rickandmorty/rickandmorty.json');
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const data = () => {
  return RICKANDMORTY.results;
};

const sortBY = () => {
  return 12;
};

const filterData = (data, condition) => {
  return data.filter(item => {
    return item.gender === condition;
  });
};

const computeStats = (data) => {
  return data;

};



//export { data, sortBY, filterData, computeStats };

