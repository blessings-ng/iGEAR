import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-blue-500 selection:text-white overflow-x-hidden ">
      {/* <Navbar /> */}
      
      <main>
        <HeroVSL />
        <SocialProof />
        <OfferSection />
        <Process />
        <ClientsInterview />
        <PromiseSection />
        <OtherInformation /> 
        
      </main>

      <Footer />
    </div>
  );
}

export default App;