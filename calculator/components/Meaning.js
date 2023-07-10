import Image from 'next/image'
import logo from '../assets/images/intro.png'

const Intro = (props) => {
  return (
    <div className="container mx-auto w-full bg-yellow-300 h-50 p-36">
        <div className="text-4xl text-indigo-900 text-center p-3"> What do you mean by home retrofits?</div>
        <div className="text-2xl text-indigo-800 text-center">
            What is a home energy retrofit? How does it work?
        </div>
        <div className="text-2xl text-indigo-800 text-center">
            What types of projects are we referring to?
        </div>
    </div>
  );
};

export default Intro;