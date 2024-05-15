import {Flex, Box} from '@chakra-ui/react'
import {Header} from '../Header/Header'

// Componente Layout que define a estrutura da aplicação
export const Layout = ({children}:any) => {
  return (
    <Flex minHeight='100vh' backgroundColor='#9413dc' flexDirection="column" alignItems="center" justifyContent='center'>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='50px 50px' maxW="lg" textAlign="center">
        {/* Renderiza o componente Header */}
        <Header/>
        {/* Renderiza os filhos do componente Layout */}
        { children }
      </Box>
    </Flex>
  )
}