import {Button} from '@chakra-ui/react'
import {MouseEventHandler} from 'react'

// Define a tipagem das props do componente
interface ButtonSubmit {
  event: MouseEventHandler
  text: string
}

// Componente ButtonSub que renderiza um botão com estilo e funcionalidade
export const ButtonSub = ({event, text} :ButtonSubmit) => {
  return (
    <Button
    onClick={event} //Executa a função event passada como prop quando o botão é clicado
    w='100%'
    fontWeight="bold"
    m="25px 0"
    bgGradient='linear(to-r, #31A2DB, #54539C, #E94D5F)'
    color='#fff'
    _hover={{
      background: "fff",
      transform: "scale(1.05)",
    }}
    >
      {text} {/*Exibe o texto passado como props*/}
    </Button>
  )
}