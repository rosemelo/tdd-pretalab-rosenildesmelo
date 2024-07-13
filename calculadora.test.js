const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new calculadora()
    expect(calculadora.soma(2,2)).toEqual(4)

  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new calculadora()
    expect(calculadora.subtracao(5,3)).toEqual(2)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new calculadora()
    expect(calculadora.multiplicacao(2,3)).toEqual(6)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new calculadora()
    expect(calculadora.soma(6,3)).toEqual(2)
  })
})