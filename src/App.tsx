import { RouterProvider, useRouter } from './contexts/RouterContext';
import { SearchProvider } from './contexts/SearchContext';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { AudienceSection } from './components/AudienceSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { SearchResults } from './components/SearchResults';
import { ScopePage } from './components/pages/ScopePage';
import { SalaryPage } from './components/pages/SalaryPage';
import { FuturePage } from './components/pages/FuturePage';
import { TopCompaniesPage } from './components/pages/TopCompaniesPage';
import { StudentsPage } from './components/pages/StudentsPage';
import { ProfessionalsPage } from './components/pages/ProfessionalsPage';
import { CuriousPage } from './components/pages/CuriousPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { FAQPage } from './components/pages/FAQPage';
import { SupportPage } from './components/pages/SupportPage';
import { useEffect, useState } from 'react';

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'scope':
        return <ScopePage />;
      case 'salary':
        return <SalaryPage />;
      case 'future':
        return <FuturePage />;
      case 'top-companies':
        return <TopCompaniesPage />;
      case 'students':
        return <StudentsPage />;
      case 'professionals':
        return <ProfessionalsPage />;
      case 'curious':
        return <CuriousPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'support':
        return <SupportPage />;
      default:
        return (
          <div className="min-h-screen">
            <HeroSection />
            <FeatureSection />
            <AudienceSection />
            <Footer />
          </div>
        );
    }
  };

  return (
    <>
      {renderPage()}
      <Chatbot />
    </>
  );
}

export default function App() {
  return (
    <SearchProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </SearchProvider>
  );
}