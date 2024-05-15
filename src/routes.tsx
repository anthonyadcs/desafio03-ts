import { Home } from './pages/Home';
import {Conta} from './pages/Conta';
import {ShowInfo} from './pages/ShowInfo';
import {Routes, Route} from 'react-router-dom'
import {useContext} from 'react'
import {AppContext} from './components/AppContext/AppContext'

// Componente MainRoutes que define as rotas principais da aplicação
export const MainRoutes = () => {
  // Obtém o status de login do contexto da aplicação
  const { isLoggedIn } = useContext(AppContext)
  
  return (
    // Define as rotas da aplicação
    <Routes>
      {/* Rota para a página inicial */}
      <Route path='/' element={
         isLoggedIn ? <Conta/> : <Home/>
      }/> 
      {/* Rota para a página da conta com verificação de login */}
      <Route path='/conta/:id' element=
        {
          isLoggedIn ? <Conta/> : <Home/>
        }/>
        
      <Route path='/conta/:id/showinfo' element={isLoggedIn ? <ShowInfo/> : <Home/>}/>
  </Routes>
  )
}