import Image from 'next/image'
import Value1 from '../assets/images/value-1.png'
import Value2 from '../assets/images/value-2.png'
import Value3 from '../assets/images/value-3.png'



const CalculatorValueProp = () => {
    return (
        <div className="container mx-auto w-max">
            <div className="flex flex-row content-center">
                <div className='basis-1/3'><Image src={Value1} alt="Logo" /></div>
                <div className='basis-1/3'><Image src={Value2} alt="Logo" /></div>
                <div className='basis-1/3'><Image src={Value3} alt="Logo" /></div>
        </div>
        </div>
    )
}

export default CalculatorValueProp