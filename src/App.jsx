
import './App.css'
import { NavBar } from './Components/Navbar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'

export const App = () => {
  return (
    <>  
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos al mercado de semillas! 😎"} />
    </>
  )
}
