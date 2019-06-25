import RICKANDMORTY  from './data/rickandmorty/rickandmorty';

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const data = () => {
  return RICKANDMORTY;
};

const sortBY = () => {
  return 12;
};

const filterData = (data, condition) => {
  return data.filter(item => {
    return item == condition;
  });
};

const mostrar = () => {
  return 'mostrar';

};

export { data, sortBY, filterData, mostrar };

