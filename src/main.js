import { filterData } from './data.js';
import RICKANDMORTY  from './data/rickandmorty/rickandmorty.js';

let test = filterData(RICKANDMORTY.results, "Male");

console.table(test);
