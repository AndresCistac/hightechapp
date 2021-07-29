import './NavBar.css';
function NavBar(){ 
  return(
    <nav>
      <ul className="nav-ul">
        <h5 className="navbar-text">High Tech</h5>
        <li className="nav-link">
          <a className="nav_items" href="#">Home</a>
        </li>
        <li className="nav-link">
          <a className="nav_items" href="#">Notebooks</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Componentes para PC
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Procesadores</a></li>
            <li><a className="dropdown-item" href="#">Graficas</a></li>
            <li><a className="dropdown-item" href="#">Gabinetes</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
