import RICKANDMORTY  from './data/rickandmorty/rickandmorty.js';

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


<<<<<<< HEAD
export { data, sortBY, filterData, computeStats };
=======
export { data, sortBY, filterData, computeStats }
;
>>>>>>> 8a0c540b829ec38c6ee29ab5e779b9abae9facae
