//Funções utilizadas para exemplificação do funcionamento dos Testes Unitários e do Desenvolvimento Orientado a Testes (TDD) 

export const soma = (num: number) :number => {
  return num + 1 
}

export const multiplica = (num: number, mult: number) :number | string => {
  if(mult === 2 || mult === 3){
    return num * mult
  } else{
    return 'Multiplicador não aceito'
  }
}