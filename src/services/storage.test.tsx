import { getAllLocalStorage, createLocalStorage, changeLocalStorage } from './storage'

const obj = {
  login: false
}

describe('storage', () => {
    it('Deve retornar o objeto no localStorage', () => {
      const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
      getAllLocalStorage('DIOBank')
      expect(mockGetItem).toHaveBeenCalledWith('DIOBank')
    })

    it('Deve criar o objeto no localStorage', () => {
      const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
      createLocalStorage('objName', obj)
      expect(mockSetItem).toHaveBeenCalledWith('objName', JSON.stringify(obj))
    })
    
    it('Deve modificar o valor do objeto no localStorage', () => {
      const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
      changeLocalStorage('objName', obj)
      expect(mockSetItem).toHaveBeenCalledWith('objName', JSON.stringify(obj))
    })
})