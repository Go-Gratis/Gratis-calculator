import Image from 'next/image'
import Benefits from '../assets/images/benefits.png'

const Intro = (props) => {
  return (
    <div className="container mx-auto w-max">
        <Image src={Benefits} alt="Logo" />
    </div>
  );
};

export default Intro;