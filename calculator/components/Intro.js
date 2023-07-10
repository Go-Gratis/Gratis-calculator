import Image from 'next/image'
import logo from '../assets/images/intro.png'

const Intro = (props) => {
  return (
    <div className="container mx-auto w-max">
        <Image src={logo} alt="Logo" />
    </div>
  );
};

export default Intro;