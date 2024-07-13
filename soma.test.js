const { soma, subtracao, multiplicacao, divisao } = require('./soma');

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(2, 2)).toBe(4);
  });
});



describe('Subtracao', () => {
  it('deverá subtrair dois números inteiros', () => {
    expect(subtracao(5,3)).toBe(2);
  });
});



describe('Multiplicacao', () => {
  it('deverá multiplicar dois números inteiros', () => {
    expect(multiplicacao(2,3)).toBe(6);
  });
});



describe('Divisao', () => {
  it('deverá dividir dois números inteiros', () => {
    expect(divisao(6,3)).toBe(2);
  });
});

