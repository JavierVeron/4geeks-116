const suma = require('./suma.js');

test('suma 1 y 2 igual a 3', () => {
    const resultado = suma(1, 2);
    expect(resultado).toBe(3);
})

test('suma 2 y 3 igual a 5', () => {
    const resultado = suma(2, 3);
    expect(resultado).toBe(5);
})