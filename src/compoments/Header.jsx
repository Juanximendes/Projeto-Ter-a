import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
    return (

        <header className="fullheader">
            <nav className="navheader" >
                <Link to="/">Inicio</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Contato">Contato</Link>
                <Link to="/Perfil">Perfil</Link>
                <Link to="/Produtos">Produtos</Link>
            </nav>
        </header>
    )

}










export default Header;