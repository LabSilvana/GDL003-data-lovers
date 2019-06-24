require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');
  });
});

  it('returns `mostrar`', () => {
    expect(mostrar.mostrar()).toBe('mostrar');
});
