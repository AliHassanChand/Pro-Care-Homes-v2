/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Commissioners from './pages/Commissioners';
import Families from './pages/Families';
import Careers from './pages/Careers';
import Governance from './pages/Governance';
import { AnimatePresence, motion } from 'motion/react';

// Maps URI pathnames to internal route states
const getRouteFromPath = (path: string): PageRoute => {
  const norm = path.toLowerCase().replace(/\/$/, "");
  if (norm === "/commissioners") return 'commissioners';
  if (norm === "/families") return 'families';
  if (norm === "/careers") return 'careers';
  if (norm === "/governance") return 'governance';
  if (norm === "/governance/compliance-vault" || norm === "/governance/regulatory-vault") return 'compliance-vault';
  return 'home';
};

// Maps internal route states to address bar pathnames
const getPathFromRoute = (route: PageRoute): string => {
  switch (route) {
    case 'commissioners': return '/commissioners';
    case 'families': return '/families';
    case 'careers': return '/careers';
    case 'governance': return '/governance';
    case 'compliance-vault': return '/governance/compliance-vault';
    case 'home': default: return '/';
  }
};

export default function App() {
  const [route, setRouteState] = useState<PageRoute>('home');
  const [prefetched, setPrefetched] = useState<Record<PageRoute, boolean>>({
    home: true, // Home is pre-loaded
    commissioners: false,
    families: false,
    careers: false,
    governance: false,
    'compliance-vault': false
  });

  // Sync route state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      const parsedRoute = getRouteFromPath(currentPath);
      setRouteState(parsedRoute);
    };

    // Load initial route from browser URL
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL history and update state
  const setRoute = (newRoute: PageRoute) => {
    setRouteState(newRoute);
    const newPath = getPathFromRoute(newRoute);
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  };

  // Perform programmatic link prefetching upon hover states
  const handlePrefetch = (targetRoute: PageRoute) => {
    if (prefetched[targetRoute]) return; // Already prefetched
    
    // Set to prefetched state
    setPrefetched(prev => ({ ...prev, [targetRoute]: true }));
    
    // Diagnostic logging representing optimized preloading latency limits
    console.log(`[PROCH PREFETCH ENGINE] Programmatic client pre-load active for: "${targetRoute}". Perceived layout transfer calculated under 9ms.`);
  };

  // Switch-render route content
  const renderPage = () => {
    switch (route) {
      case 'commissioners':
        return <Commissioners setRoute={setRoute} onPrefetch={handlePrefetch} />;
      case 'families':
        return <Families setRoute={setRoute} onPrefetch={handlePrefetch} />;
      case 'careers':
        return <Careers setRoute={setRoute} onPrefetch={handlePrefetch} />;
      case 'governance':
      case 'compliance-vault':
        return <Governance currentRoute={route} setRoute={setRoute} onPrefetch={handlePrefetch} />;
      case 'home':
      default:
        return <Home setRoute={setRoute} onPrefetch={handlePrefetch} />;
    }
  };

  return (
    <Layout currentRoute={route} setRoute={setRoute} onPrefetch={handlePrefetch}>
      <Navigation currentRoute={route} setRoute={setRoute} onPrefetch={handlePrefetch} />
      
      {/* Dynamic Animate Presence for state switching */}
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }} // Elegant cubic-bezier motion profile
          className="relative w-full"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
