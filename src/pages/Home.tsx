import {Text, FormControl, FormLabel, Input} from '@chakra-ui/react'
import {ButtonSub} from '../components/ButtonSub/ButtonSub'
import {useState, useContext } from 'react'
import { login } from '../services/login'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../components/AppContext/AppContext'
import {changeLocalStorage} from '../services/storage'

// Página Home que exibe o formulário de login
export const Home = () => {
  // Estado para armazenar o email digitado pelo usuário
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Obtém a função para alterar o status de login do contexto da aplicação
  const {setIsLoggedIn} = useContext(AppContext)
  // Obtém a função de navegação do React Router
  const navigate = useNavigate()

  // Função para validar o usuário ao fazer login
  const validateUser = async (email:string, password: any) => {
    const loggedIn= await login(email, password) // Verifica se o login é válido

    if(!loggedIn){
      // Redireciona para a página inicial se o login não for válido
      navigate('/') 
    } else {
      // Define o status de login como true e navega para a página da conta do usuário
      setIsLoggedIn(true)
      changeLocalStorage('DIOBank', {login: true})
      navigate('/conta/1')
    }
  }

  return (
    <>
      <Text 
        fontSize="2xl" 
        textAlign="center"
        bgGradient='linear(to-r, #E94D5F, #3893CF)' 
        bgClip='text'
        fontWeight="semibold"
        textTransform = 'uppercase'
        >
          Faça login
      </Text>

      {/* Formulário de email */}
      <FormControl>
        <FormLabel 
            fontWeight="bold">
              <Text 
              bgGradient='linear(to-r, #E94D5F, #3893CF)' 
              bgClip='text'
              textTransform = 'uppercase'
              marginTop='10px'
              >
                Email
              </Text>
        </FormLabel>
        
        <Input 
          placeholder="EMAIL" 
          type="email"
          onChange = {(e) => {setEmail(e.target.value)}}
        />
      </FormControl>

      {/* Formulário de senha */}
      <FormControl>
        <FormLabel 
          fontWeight="bold">
            <Text 
            bgGradient='linear(to-r, #E94D5F, #3893CF)' 
            bgClip='text'
            textTransform = 'uppercase'
            fontSize="sm"
            marginTop='10px'
            >
              Senha
            </Text>
        </FormLabel>
        <Input 
        placeholder="SENHA" 
        type="password"
        onChange = {(e) => {setPassword(e.target.value)}}
        />
      </FormControl>

      {/* Botão de login */}
      <ButtonSub event={() => validateUser(email, password)} text="Entrar"/>
  </>
  )
}