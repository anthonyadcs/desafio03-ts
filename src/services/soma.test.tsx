//Teste utilizado para exemplificação do funcionamento dos Testes Unitários e do Desenvolvimento Orientado a Testes (TDD) 

import {soma, multiplica} from './soma'

describe('soma', () => {
  //Aqui é informado o que é esperado do meu teste
  it('Deve somar 1 ao número informado', () => {
    //Arrange = Configuração que é necessário fazer para o teste iniciar ()
    //Act = O ato, o que é acionado quando a configuração necessária é ativada
    const value = soma(1)
    
    //Assert = Asserção. A verificação do resultado do ato anterior.
    expect(value).toBe(2)
  })

  it('Deve multiplicar o número informado por 2', () => {
    const value = multiplica(2, 2)
    expect(value).toBe(4)
  })

  it('Deve multiplicar o número informado por 3', () => {
    const value = multiplica(2, 3)
    expect(value).toBe(6)
  })

  it('Deve informar um erro com multiplicador diferente de 2 ou 3', () => {
    const value = multiplica(2, 4)
    expect(value).toBe('Multiplicador não aceito')
  })
})