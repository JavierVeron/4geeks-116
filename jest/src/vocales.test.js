const vocales = require('./vocales.js');

test('test #1', () => {
    expect(vocales('hola')).toBe('h0l4');
})

test('test #2', () => {
    expect(vocales('HOLA')).toBe('H0L4');
})

test('test #3', () => {
    expect(vocales('ROBERTO')).toBe('R0B3RT0');
})

test('test #4', () => {
    expect(vocales('Hola a todos!')).toBe('H0l4 4 t0d0s!');
})