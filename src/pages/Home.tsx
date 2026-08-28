import SEO from '../components/SEO';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Partners from '../components/sections/Partners';
import WhyUs from '../components/sections/WhyUs';
import Process from '../components/sections/Process';
import Industries from '../components/sections/Industries';
import Careers from '../components/sections/Careers';
import CTA from '../components/sections/CTA';
import { useI18n } from '../i18n';

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <SEO
        title={t.home.seo.title}
        description={t.home.seo.description}
        path="/"
      />
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
