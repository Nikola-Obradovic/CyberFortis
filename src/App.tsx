import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { I18nProvider } from './i18n';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Karijere = lazy(() => import('./pages/Karijere'));
const NasaRjesenja = lazy(() => import('./pages/NasaRjesenja'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-red border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <I18nProvider>
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Karijere />} />
            <Route path="solutions" element={<NasaRjesenja />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
    </I18nProvider>
  );
}

export default App;
