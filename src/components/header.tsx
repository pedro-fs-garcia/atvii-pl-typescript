import { Component} from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render(){
        return (
            <header className="bg-dark text-white py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-white text-decoration-none">
                        <h1 className="h4 mb-0">C4P PetShop</h1>
                    </Link>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/clientes" className="nav-link text-white">Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pets" className="nav-link text-white">Pets</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/produtos" className="nav-link text-white">Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/servicos" className="nav-link text-white">Serviços</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Registros
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/registro/compra" className="dropdown-item">Registro de Compra</Link></li>
                                    <li><Link to="/registro/venda" className="dropdown-item">Registro de Venda</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}