import Image from 'next/image'
import logo from '../assets/images/hero-logo.png'

const Header = (props) => {
  return (
    <header className="py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Image src={logo} alt="Logo" />
      </nav>
    </header>
  );
};

export default Header;