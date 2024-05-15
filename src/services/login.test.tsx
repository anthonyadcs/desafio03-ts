import { login } from "./login"

// Bloco de testes para a função login
describe('login', () => {
    // Email de exemplo para os testes
    const mockEmail = 'anthony@gmail.com'
    const mockPassword = 'anthonypass'
    
    // Teste para verificar se o login é válido com um email correto
    it('Deve ser verdadeiro caso o email seja válido', async () => {
    // Chama a função login com o email de exemplo
    const emailAndPasswordResponse = await login(mockEmail, mockPassword) 
    // Verifica se a resposta é truthy (verdadeira)
    expect(emailAndPasswordResponse).toBeTruthy()
})

// Teste para verificar se o login é inválido com um email incorreto
    it('Deve exibir um erro caso o email seja inválido', async () => {
    // Chama a função login com um email inválido
    const emailAndPasswordResponse = await login('email@invalido.com', 'senhainválida')
    // Verifica se a resposta é falsy (falsa)
    expect(emailAndPasswordResponse).toBeFalsy()
    })

})