import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Cursor   from './components/Cursor';
import Home     from './pages/Home';
import About    from './pages/About';
import Skills   from './pages/Skills';
import Projects from './pages/Projects';
import Contact  from './pages/Contact';

// Page transition wrapper
function PageWrapper({ children }) {
  const location = useLocation();
  const [display, setDisplay] = useState(children);
  const [fade, setFade]       = useState(false);

  useEffect(() => {
    setFade(true);
    
    const t = setTimeout(() => { setDisplay(children); setFade(false); }, 260);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div
      style={{
        opacity: fade ? 0 : 1,
        transform: fade ? 'translateY(12px)' : 'none',
        transition: 'opacity .28s ease, transform .28s ease',
      }}
    >
      {display}
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/"        element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about"   element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/skills"  element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects"element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}