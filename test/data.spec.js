require('../src/data.js');


describe('dataLovers', () => {
  
  it('deberia ser un objeto', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');
  });
});

describe('filtrado', () => {
  it('is a function', () => {
    expect(typeof example.filtrado).toBe('function');
    });