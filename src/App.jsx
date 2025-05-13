import Layout from "./compoments/Layout"
import Inicio from "../pages/Inicio"
import Sobre from "../pages/Sobre"
import Contato from "../pages/Contato"
import Perfil from "../pages/Perfil"
import Produtos from "../pages/Produtos"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="Contato" element={<Contato />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="Produtos" element={<Produtos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
