import React, { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components with preloading and retry logic
const lazyLoad = (importFn: () => Promise<any>) => {
  return lazy(() => 
    importFn().catch((error) => {
      console.error('Failed to load component:', error);
      return importFn(); // Retry once
    })
  );
};

const Overview = lazyLoad(() => import('./components/Overview'));
const WhyAttend = lazyLoad(() => import('./components/WhyAttend'));
const Solutions = lazyLoad(() => import('./components/Solutions'));
const Schedule = lazyLoad(() => import('./components/Schedule'));
const Pricing = lazyLoad(() => import('./components/Pricing'));
const FAQ = lazyLoad(() => import('./components/FAQ'));
const Footer = lazyLoad(() => import('./components/Footer'));
const Founders = lazyLoad(() => import('./components/Founders'));
const BrandLetters = lazyLoad(() => import('./components/BrandLetters'));

// Loading component
const LoadingSection = () => (
  <div className="min-h-[300px] md:min-h-[400px] flex items-center justify-center">
    <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <main>
        {[
          { Component: Overview, key: 'overview' },
          { Component: WhyAttend, key: 'why-attend' },
          { Component: Solutions, key: 'solutions' },
          { Component: Schedule, key: 'schedule' },
          { Component: Pricing, key: 'pricing' },
          { Component: Founders, key: 'founders' },
          { Component: FAQ, key: 'faq' },
          { Component: BrandLetters, key: 'brand-letters' }
        ].map(({ Component, key }) => (
          <ErrorBoundary key={key}>
            <Suspense fallback={<LoadingSection />}>
              <Component />
            </Suspense>
          </ErrorBoundary>
        ))}
      </main>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSection />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;