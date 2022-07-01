import Logo from '../../assets/logo.png';
import './Menu.css';
import Button from './../Button/index';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Logo empresa" />
        </a>
        <Button as="a" className="ButtonLink" href="#">
          Novo Link
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
