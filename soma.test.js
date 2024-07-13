const soma = require('./soma')

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(1,2)).toBe(4)
  })
})

const subtracao = require('./subtracao')

describe('Subtracao', () => {
  it('deverá subtrair dois números inteiros', () => {
    expect(subtracao(5,3)).toBe(2)
  })
})

const multiplicacao = require('./soma')

describe('Multiplicacao', () => {
  it('deverá multiplicar dois números inteiros', () => {
    expect(multiplicacao(2,3)).toBe(6)
  })
})

const divisao = require('./soma')

describe('Divisao', () => {
  it('deverá dividir dois números inteiros', () => {
    expect(divisao(6,3)).toBe(2)
  })
})