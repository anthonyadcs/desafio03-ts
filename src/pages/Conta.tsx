import {Center, SimpleGrid, Spinner} from '@chakra-ui/react'
import {useState, useEffect, useContext} from 'react'
import {api} from '../services/api'
import {CardInfo} from '../components/CardInfo/CardInfo'
import {useParams, useNavigate} from 'react-router-dom'
import {AppContext} from '../components/AppContext/AppContext'
import {DoubleButton} from '../components/DoubleButton/DoubleButton'

// Define a tipagem dos dados do usuário
interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  ID:string
}

// Página Conta que exibe informações da conta do usuário
export const Conta = () => {
  // Estado para armazenar os dados do usuário
  const [userData, setUserData] = useState<null | UserData>()
  // Obtém o ID do usuário a partir da URL
  const { id } = useParams()
  // Obtém o status de login e a função para alterar o status do contexto da aplicação
  const {isLoggedIn} = useContext(AppContext)
  //Obtém a função de navegação do React Router
  const navigate = useNavigate()

  // Formata a data e hora atual
  const actualData = new Date()
  const formattedDate = actualData.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '/')
  const formattedTime = actualData.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  const formattedDateTime = `${formattedDate}\n${formattedTime}`

  // Efeito para buscar os dados do usuário
  useEffect(() => {
    const getData = async () =>{
      const data: any | UserData = await api
      setUserData(data) // Atualiza o estado com os dados do usuário
    }

    getData()
  }, [])


  // Verifica se o ID do usuário na URL corresponde aos dados do usuário logado
  if((userData && id !== userData.ID) || (!isLoggedIn)){
    navigate('/') // Navega para a página inicial se as condições não forem atendidas.
  }
  return(
    <>
      <Center>
        <SimpleGrid columns={2} spacing={10}>
          {
            // Renderiza um spinner enquanto os dados do usuário não são carregados
            userData === undefined || userData === null ? (
              <Center>
                <Spinner thickness="2px" speed="0.5s" emptyColor="#3794D0" color="#E94D5F"/>
              </Center>
            ) :
            (
              // Renderiza as informações do usuário
              <>
                <CardInfo mainContent={`Bem vindo, ${userData?.name}`} content={formattedDateTime}/>
                <CardInfo mainContent='Saldo:' content={`R$ ${userData.balance}`}/>              
              </>
            )
          }
        </SimpleGrid>
      </Center>
      {
        // Renderiza o botão de logout apenas se o usuário estiver logado
        isLoggedIn && <DoubleButton/>
      }
    </>
  )
}