const test = require ('./../src/data');

describe('describir el funcionamiento de la funcion data', () => {
  
  it('data debe ser una funcion', () => {
    expect(typeof test.data).toBe("function");
  });

  it('data debe regresar un objeto json', () => {
    expect(typeof data()).toBe("object");
  });

});

describe('describir la funcion filter', () => {
  it('que filter sea una funcion', () => {
    expect(typeof filterData).toBe("function");
  });

  it('filtre los datos con genero Masculino',() => {
    //"gender": "Male"
    let info = data();
    let test_result = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      }
    };
    expect(filterData(info, "Male")).toContain(test_result);
  });
})
;