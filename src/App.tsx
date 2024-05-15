import {AppContextProvider} from './components/AppContext/AppContext'
import { Layout } from './components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import {MainRoutes} from './routes'
import { createLocalStorage, getAllLocalStorage } from './services/storage'

// Função App que define a estrutura da aplicação
function App() {
  !getAllLocalStorage('DIOBank') && createLocalStorage('DIOBank', {login: false})

  return (
      // Renderiza o componente BrowserRouter para gerenciar as rotas da aplicação
    <BrowserRouter>
      {/* Renderiza o componente AppContextProvider para fornecer o contexto da aplicação */}
      <AppContextProvider>
        {/* Renderiza o componente ChakraProvider para fornecer o tema e estilos da aplicação */}
        <ChakraProvider>
        {/* Renderiza o componente Layout para definir a estrutura da aplicação */}
          <Layout>
            {/* Renderiza as rotas principais da aplicação */}
            <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;