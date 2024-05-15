import {getAllLocalStorage} from '../services/storage'
import {Box, Text, Stack, Center} from '@chakra-ui/react'
import {ButtonSub} from '../components/ButtonSub/ButtonSub'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {AppContext} from '../components/AppContext/AppContext'

export const ShowInfo = () => {
  const navigate = useNavigate()
  const accountInfos = getAllLocalStorage('accountInfos')
  const parseAccountInfos = accountInfos ? JSON.parse(accountInfos) : undefined
  const {isLoggedIn} = useContext(AppContext)

  const backTo = () => {
    navigate(`/conta/${parseAccountInfos.ID}`)
  }
  
  return (
    <>
      <Box>
        <Center>
          <Stack direction='row' spacing='5px' fontSize='xl'>
            <Text textAlign="left" noOfLines={1}>Aqui estão suas informações,</Text>
            <Text fontWeight="bold" bgGradient='linear(to-r, #E94D5F, #54539C, #31A2DB)' bgClip='text'>{parseAccountInfos.name}:</Text>
          </Stack>
        </Center>
      </Box>

      <Box display='flex' mt='15px' bgColor='#e9e9e9' borderRadius='5px' flexDirection="column" alignItems="flex-start" padding={8}>
        <Stack direction='row' spacing = '5px' paddingLeft='15px' fontSize='md' display="block">
          <Text fontWeight='bold' display='inline-block' marginRight="5px">Nome completo: </Text>
          <Text display='inline-block'>{parseAccountInfos.fullname}</Text>
        </Stack>

        <Stack direction='row' spacing = '5px' paddingLeft='15px' fontSize='md' display="block">
          <Text fontWeight='bold' display='inline-block' marginRight="5px">Email: </Text>
          <Text display='inline-block'>{parseAccountInfos.email}</Text>
        </Stack>
        
        <Stack direction='row' spacing = '5px' paddingLeft='15px' fontSize='md' display="block">
          <Text fontWeight='bold' display='inline-block' marginRight="5px">Endereço: </Text>
          <Text display='inline-block'>{parseAccountInfos.address}</Text>
        </Stack>

        <Stack direction='row' spacing = '5px' paddingLeft='15px' fontSize='md' display="block">
          <Text fontWeight='bold' display='inline-block' marginRight="5px">Número de telefone: </Text>
          <Text display='inline-block'>{parseAccountInfos.phoneNumber}</Text>
        </Stack>

      </Box>

      {
        isLoggedIn && <ButtonSub event={() => backTo()} text='Voltar'/>
      }
    </>
  )
}