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
        {/* <FinalCTA /> */}
        {/* <BreakdownSection /> */}
        {/* <ComparisonSection /> */}
        {/* <FAQ /> */}        
        {/* Final CTA Section before footer */}
        {/* <section className="py-20 px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale?</h2>
            <div className="flex justify-center">
                <button className="py-4 px-12 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    Book Your Call Now
                </button>
            </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;