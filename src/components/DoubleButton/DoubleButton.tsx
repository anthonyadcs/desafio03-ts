import {Flex, Spacer} from '@chakra-ui/react'
import {ButtonSub} from '../ButtonSub/ButtonSub'
import {useNavigate} from 'react-router-dom'
import {changeLocalStorage, getAllLocalStorage} from '../../services/storage'
import {useContext} from 'react'
import {AppContext} from '../AppContext/AppContext'


export const DoubleButton = () => {
  const navigate = useNavigate()
  const {setIsLoggedIn} = useContext(AppContext)
  const accountData = getAllLocalStorage('accountInfos')
  const {ID} = accountData ? JSON.parse(accountData) : undefined

  const logout = () => {
    // Define o status de login como false
    changeLocalStorage('DIOBank', {login: false})
    setIsLoggedIn(false)
     // Navega para a página inicial
    navigate('/')
  }

  const showInfo = () => {
    navigate(`/conta/${ID}/showinfo`)
  }

  return(
    <Flex gap={5}>
      <ButtonSub event={() => logout()} text='Sair'/>
      <Spacer/>
      <ButtonSub event={() => showInfo()} text='Perfil'/>
    </Flex>
  )
}