import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Menu.css';
import Button from './../Button/index';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Logo empresa" />
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo Link
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
