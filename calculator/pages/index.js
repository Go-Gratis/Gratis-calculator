import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import CalculatorValueProp from '../components/CalculatorValueProp'
import Meaning from '../components/Meaning'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HERO calculator</title>
      </Head>
      <Header />
      <Intro />
      <CalculatorValueProp />
      <Meaning />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  )
}
