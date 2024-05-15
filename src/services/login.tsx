import {api} from './api'
import {createLocalStorage} from './storage'

// Função assíncrona que simula o processo de login
export const login = async (email:string, password: any):Promise<boolean> => {
  // Aguarda a resposta da chamada à API para obter os dados da conta
  const data:any = await api
  const accountData = data;
  console.log(accountData)

  createLocalStorage('accountInfos', accountData)

  // Verifica se o email fornecido é diferente do email retornado pela API
  if(email !== data.email || password !== data.password) {
    return false
  }

  return true
};