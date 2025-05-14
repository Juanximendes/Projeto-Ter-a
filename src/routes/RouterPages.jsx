import Contato from "../../pages/Contato/Contato"
import Inicio from "../../pages/Inicio/Inicio"
import Sobre from "../../pages/Sobre/Sobre"
import Perfil from "../../pages/Perfil/Perfil"
import Produtos from "../../pages/Produtos/Produtos"
import Layout from "../compoments/Layout"
import { Routes, Route } from "react-router-dom"


export default function RouterPages() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}/>
                <Route index element={<Inicio />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="Contato" element={<Contato />} />
                <Route path="Perfil" element={<Perfil />} />
                <Route path="Produtos" element={<Produtos />} />
        </Routes>
    )
} 