const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Aperitivos</a>
                    <a className="dropdown-item" href="#">Cervezas</a>
                    <a className="dropdown-item" href="#">Gin</a>
                    <a className="dropdown-item" href="#">Ron</a>
                    <a className="dropdown-item" href="#">Vino</a>
                    <a className="dropdown-item" href="#">Vodka</a>
                    <a className="dropdown-item" href="#">Whysky</a>
                    <a className="dropdown-item" href="#">Bebidas sin Alcohol</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Ver todo</a>
                </div>
            </li>
    );
}

export default Categorias;
