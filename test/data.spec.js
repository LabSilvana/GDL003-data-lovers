import { data } from './../src/data';

describe('describir el funcionamiento de la funcion data', () => {
  
  it('data debe ser una funcion', () => {
    expect(typeof data).toBe("function");
  });

  it('data debe regresar un objeto json', () => {
    expect(typeof data()).toBe("object");
  });

});

