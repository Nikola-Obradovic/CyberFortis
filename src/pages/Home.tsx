import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Partners from '../components/sections/Partners';
import WhyUs from '../components/sections/WhyUs';
import Process from '../components/sections/Process';
import Industries from '../components/sections/Industries';
import Careers from '../components/sections/Careers';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
       <WhyUs />
      <Services />
      <Partners />
      <Careers />
      <Process />
      <Industries />
     
      <CTA />
    </>
  );
}
