import Image from 'next/image'
import logo from '../assets/images/hero-logo.png'

const Footer = (props) => {
  return (
    <footer className="py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Image src={logo} alt="Logo" />
      </nav>
      <div className='text-center p-2'> 2023 Climatebase Fellowship Capstone Project</div>
    </footer>
  );
};

export default Footer;