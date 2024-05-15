import {Box, Text} from '@chakra-ui/react'

// Define a tipagem das props do componente
interface ICardInfo {
  mainContent: string;
  content: string;
}

// Componente CardInfo que renderiza um cartão com informações
export const CardInfo = ({mainContent, content}: ICardInfo) => {
  return (
    <Box bgColor="#e9e9e9" minW="120px" padding={8} borderRadius='5px' display="flex" justifyContent="center" flexDirection="column" textAlign="center" alignItems="center">
      <Text fontWeight="bold" mb = "15px">
        {mainContent} {/* Exibe o conteúdo principal */}
      </Text>
      <Text>
        {content} {/* Exibe o conteúdo adicional */}
      </Text>
    </Box>
  )
}