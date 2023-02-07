import {Link} from 'react-router-dom'

const Categorias = () => {
    return (
            <ul className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
                <div className="dropdown-menu">
                    <li><Link className="dropdown-item" to={"/category/aperitivos"}>Aperitivos</Link></li>
                    <li><Link className="dropdown-item" to={"/category/bebidaBlanca"}>Bebida Blanca</Link></li>
                    <li><Link className="dropdown-item" to={"/category/sinAlcohol"}>Bebidas Sin Alcohol</Link></li>
                    <li><Link className="dropdown-item" to={"/category/cervezas"}>Cervezas</Link></li>
                    <li><Link className="dropdown-item" to={"/category/vinos"}>Vinos</Link></li>
                    <div className="dropdown-divider" />
                    <li><Link className="dropdown-item" to={"/"}>Ver Todo</Link></li>
                </div>
            </ul>
    );
}

export default Categorias;
