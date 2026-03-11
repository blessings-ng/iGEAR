import React from 'react';
// 1. IMPORT ROUTING TOOLS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeroVSL from './components/HeroVSL';
import SocialProof from './components/SocialProof';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BreakdownSection from './components/BreakdownSection';
import OfferSection from './components/OfferSection';
import OtherInformation from './components/OtherInformation';
import ComparisonSection from './components/ComparisonSection';
import ClientsInterview from './components/ClientsInterview';
import FinalCTA from './components/FinalCTA';
import PromiseSection from './components/PromiseSection';
// import TiltCard from './components/TiltCard';

// 2. IMPORT YOUR NEW PORTFOLIO COMPONENT
// (Adjust this path if you saved your Portfolio component somewhere else)
import Portfolio from './components/Portfolio'; 

// 3. GROUP YOUR CURRENT LANDING PAGE SECTIONS TOGETHER
function Home() {
  return (
    <main>
      <HeroVSL />
      <SocialProof />
      <OfferSection />
      <Process />
      <ClientsInterview />
      <PromiseSection />
      <OtherInformation /> 
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-blue-500 selection:text-white overflow-x-hidden ">
      {/* <Navbar /> */}
      
      {/* 4. SET UP THE ROUTES */}
      <BrowserRouter>
        <Routes>
          {/* Your main landing page */}
          <Route path="/" element={<Home />} />
          
          {/* Your new portfolio page */}
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

      {/* Footer stays outside the router so it shows on ALL pages */}
      <Footer />
    </div>
  );
}

export default App;