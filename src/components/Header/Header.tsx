import {Box, Text} from '@chakra-ui/react'
import {DIO} from './img/DIO'
export const Header  = () => {
  return(
    // Componente Header que renderiza o cabeçalho da aplicação
    <Box display="flex" alignItems="flex-end" gap="10px" paddingLeft="20px" padding="20px" marginBottom="30px">
      <DIO/> {/* Renderiza o componente DIO (SVG da logo da Digital Innovation One) */}
      <Text fontWeight="extrabold" fontSize="2xl"alignSelf="end" bgGradient='linear(to-r, #E94D5F, #54539C, #31A2DB)' bgClip='text'>
        BANK {/* Exibe o texto "BANK" com o gradiente aplicado */}
      </Text>
    </Box>
  )
}