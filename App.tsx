
import React, { useState, useEffect } from 'react';
import BrochurePage from './components/BrochurePage';
import { CLINICAL_CONTENT, NON_CLINICAL_CONTENT } from './constants';
import { ProductType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<ProductType | 'landing'>('landing');

  // Handle hardware back button logic simulation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage('landing');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: ProductType | 'landing') => {
    if (page !== 'landing') {
      window.history.pushState({ page }, '');
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const LandingPage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfaf8] safe-area-bottom">
      <div className="w-full max-w-md flex flex-col items-center px-8 space-y-12">
        <header className="flex flex-col items-center text-center space-y-6">
           <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-1000">
              <h1 className="text-5xl font-black text-gray-900 tracking-tighter">
                YUSHI <span className="text-orange-yushi">2026</span>
              </h1>
              <div className="w-16 h-1.5 bg-orange-yushi rounded-full mx-auto"></div>
           </div>
        </header>

        <div className="w-full space-y-4">
          <button 
            onClick={() => navigateTo('clinical')}
            className="w-full group bg-white p-6 rounded-[28px] shadow-lg hover:shadow-xl active:scale-95 transition-all border border-orange-50/50 flex items-center text-left"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-yushi mr-5 shrink-0">
               <i className="fa-solid fa-user-md text-3xl"></i>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-orange-yushi/60 tracking-wider">01 CLINICAL</span>
                <i className="fa-solid fa-arrow-right text-xs text-orange-200"></i>
              </div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">临床医学方向</h2>
              <p className="text-xs text-gray-400 font-medium">医学路径诊断</p>
            </div>
          </button>

          <button 
            onClick={() => navigateTo('non-clinical')}
            className="w-full group bg-white p-6 rounded-[28px] shadow-lg hover:shadow-xl active:scale-95 transition-all border border-orange-50/50 flex items-center text-left"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-yushi mr-5 shrink-0">
               <i className="fa-solid fa-flask-vial text-3xl"></i>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-orange-yushi/60 tracking-wider">02 NON-CLINICAL</span>
                <i className="fa-solid fa-arrow-right text-xs text-orange-200"></i>
              </div>
              <h2 className="text-xl font-bold text-gray-900 leading-tight">非临床医学方向</h2>
              <p className="text-xs text-gray-400 font-medium">医学路径诊断</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcf8f5] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Mobile Top Navigation */}
      {currentPage !== 'landing' && (
        <nav className="fixed top-0 left-0 right-0 z-[60] bg-white/70 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
          <div className="max-w-md mx-auto flex justify-between items-center">
            <button 
              onClick={() => navigateTo('landing')}
              className="w-10 h-10 flex items-center justify-center text-gray-800 bg-gray-100 rounded-full active:scale-90 transition-transform"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="flex items-center space-x-2">
               <span className="text-orange-yushi font-bold text-sm">YUSHI</span>
            </div>
            <div className="w-10"></div> {/* Spacer for symmetry */}
          </div>
        </nav>
      )}

      <main className="transition-opacity duration-300">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'clinical' && (
          <div className="pt-14">
            <BrochurePage content={CLINICAL_CONTENT} isClinical={true} />
          </div>
        )}
        {currentPage === 'non-clinical' && (
          <div className="pt-14">
            <BrochurePage content={NON_CLINICAL_CONTENT} isClinical={false} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
