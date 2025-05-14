import Header from './Header/Header';
import Footer from "./Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import RouterPages from '../routes/RouterPages';




export default function Layout() {
    return (
        <BrowserRouter>
            <Header />

            <RouterPages />

            <Footer />
        </BrowserRouter>
    );
}