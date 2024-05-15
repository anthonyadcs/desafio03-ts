// Dados da conta de exemplo
const conta = {
  email: 'anthony@gmail.com',
  password: 'anthonypass',
  name: 'Anthony',
  fullname: 'Anthony da Costa Silva',
  address: 'Rua Exemplo, nº 1',
  phoneNumber: '(99)99999-9999',
  balance: '2000,00',
  ID: '1',
}

// Simula uma chamada assíncrona à API que retorna os dados da conta após 1.5 segundos
export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1500);
})