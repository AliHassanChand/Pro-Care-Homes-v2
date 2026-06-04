/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute } from '../types';
import { CONTACT_INFO, OPERATIONAL_REGIONS } from '../data/careData';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Award, FileLock, Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentRoute: PageRoute;
  setRoute: (route: PageRoute) => void;
  onPrefetch: (route: PageRoute) => void;
}

export default function Layout({ children, currentRoute, setRoute, onPrefetch }: LayoutProps) {
  const handleLogoClick = () => {
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FDFCFB]">
      {/* Dynamic Content Main area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Enterprise-grade Multi-Column Footer Grid */}
      <footer className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Identity Column */}
            <div className="space-y-4">
              <button 
                onClick={handleLogoClick}
                className="flex items-center gap-2 text-left focus:outline-none cursor-pointer group"
                onMouseEnter={() => onPrefetch('home')}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500 text-slate-900 shadow-sm ring-1 ring-teal-500/10 group-hover:bg-teal-400 transition-colors">
                  <ShieldCheck className="h-5.5 w-5.5" />
                </div>
                <div>
                  <span className="block font-display text-base font-bold tracking-tight text-white">
                    PRO CARE HOMES LTD
                  </span>
                  <span className="block font-mono text-[9px] tracking-wider text-slate-400 uppercase">
                    PROCH PLATFORM
                  </span>
                </div>
              </button>
              
              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                Creating genuine homes, not placements for adults with complex learning disabilities, autism, and acute mental health needs.
              </p>

              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <span className="block text-[10px] font-mono tracking-widest text-teal-400 uppercase font-bold">
                  Clinical Care Software
                </span>
                <p className="mt-1 text-xs text-slate-300">
                  Operational care tracking, clinical journals, and MAR charts handled exclusively via the <span className="font-semibold text-white">Nourish Digital Care Record Platform</span>.
                </p>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="font-display text-sm font-semibold tracking-wider text-teal-400 uppercase">
                Care Frameworks
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button 
                    onClick={() => { setRoute('home'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    onMouseEnter={() => onPrefetch('home')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Positive Behaviour Support (PBS)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setRoute('home'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    onMouseEnter={() => onPrefetch('home')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Trauma-Informed Care (TIC)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setRoute('home'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    onMouseEnter={() => onPrefetch('home')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Psychologically Informed Environments (PIE)
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setRoute('commissioners'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    onMouseEnter={() => onPrefetch('commissioners')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                  >
                    <span>MDT Review Frameworks</span>
                    <ArrowSmallRight className="h-3 w-3" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Placement Hubs Column */}
            <div className="space-y-4">
              <h3 className="font-display text-sm font-semibold tracking-wider text-teal-400 uppercase">
                South London Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {OPERATIONAL_REGIONS.map((region) => (
                  <span 
                    key={region.name}
                    className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-700/50"
                  >
                    {region.name}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-450 leading-relaxed mt-2">
                Providing placement availability and compatibility assessments to London Local Authorities and Integrated Care Boards (ICBs).
              </p>
            </div>

            {/* Governance Column */}
            <div className="space-y-4">
              <h3 className="font-display text-sm font-semibold tracking-wider text-teal-400 uppercase">
                Quality & Protection
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <button 
                    onClick={() => { setRoute('governance'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    onMouseEnter={() => onPrefetch('governance')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <Award className="h-4 w-4 text-teal-450" />
                    <span>CQC Registration Roadmap</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setRoute('governance'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    onMouseEnter={() => onPrefetch('governance')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <FileLock className="h-4 w-4 text-teal-450" />
                    <span>Clinical Compliance Vault</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { setRoute('careers'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                    onMouseEnter={() => onPrefetch('careers')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <Heart className="h-4 w-4 text-teal-450" />
                    <span>Values-Based Safer Recruitment</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-12 flex flex-col gap-6 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between text-slate-400 text-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-mono">{CONTACT_INFO.formattedPhone}</a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span>London Operating Centres</span>
              </span>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Registered Provider ID: PROCH001
            </div>
          </div>

          {/* Copyright Area */}
          <div className="mt-8 border-t border-slate-800/60 pt-8 text-center text-xs text-slate-500 font-mono">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <p>© {new Date().getFullYear()} Pro Care Homes Ltd (Trading as PROCH). All Rights Reserved.</p>
              <div className="flex justify-center gap-4 text-[11px]">
                <span>Registered in England & Wales</span>
                <span>•</span>
                <button 
                  onClick={() => { setRoute('governance'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  CQC Regulatory Framework
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Minimal Arrow Icon
function ArrowSmallRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={props.className} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
