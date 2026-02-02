import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

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
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="o-nama" element={<About />} />
            <Route path="usluge" element={<ServicesPage />} />
            <Route path="kontakt" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
