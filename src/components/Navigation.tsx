/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CONTACT_INFO } from '../data/careData';
import { Menu, X, Phone, Mail, ShieldCheck, MapPin, Building, Award, ArrowRight } from 'lucide-react';

interface NavigationProps {
  currentRoute: PageRoute;
  setRoute: (route: PageRoute) => void;
  onPrefetch: (route: PageRoute) => void;
}

export default function Navigation({ currentRoute, setRoute, onPrefetch }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: PageRoute; sub: string }[] = [
    { label: "Home", route: 'home', sub: "The Authority Hub" },
    { label: "Commissioners", route: 'commissioners', sub: "B2B Placements" },
    { label: "Families", route: 'families', sub: "B2C Trust" },
    { label: "Governance & CQC", route: 'governance', sub: "Standards & Vault" },
    { label: "Careers", route: 'careers', sub: "Workforce & Hiring" },
  ];

  const handleNavClick = (route: PageRoute) => {
    setRoute(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      {/* Upper Micro Info Bar */}
      <div className="hidden w-full bg-slate-900 py-2.5 text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-teal-400" />
              <span>South London Service Hubs</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Building className="h-3.5 w-3.5 text-teal-400" />
              <span>CQC Registered Provider: PROCH</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-teal-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="flex items-center gap-1.5 font-mono text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-teal-400" />
              <span>{CONTACT_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand identity logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          onMouseEnter={() => onPrefetch('home')}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-800 text-white shadow-sm ring-1 ring-teal-900/10 group-hover:bg-teal-700 transition-colors">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <span className="block font-display text-lg font-bold tracking-tight text-slate-900">
              PRO CARE HOMES
            </span>
            <span className="block font-mono text-[10px] tracking-widest text-slate-500 uppercase">
              Specialist Residential & Supported Living
            </span>
          </div>
        </button>

        {/* Desktop Links with hover intent prefetching */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route || (item.route === 'governance' && currentRoute === 'compliance-vault');
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                onMouseEnter={() => onPrefetch(item.route)}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer ${
                  isActive 
                    ? 'text-teal-850 bg-teal-50 ml-1 first:ml-0' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 right-4 left-4 h-0.5 bg-teal-700 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right side Call to action */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => handleNavClick('commissioners')}
            onMouseEnter={() => onPrefetch('commissioners')}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-white hover:bg-slate-800 transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
          >
            <span>Initiate Referral</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 lg:hidden hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[80px] bottom-0 z-40 flex flex-col bg-slate-900 text-white lg:hidden">
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-4">
              Navigation Menu
            </span>
            <div className="space-y-3">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route || (item.route === 'governance' && currentRoute === 'compliance-vault');
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`block w-full rounded-xl p-4 text-left border transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-teal-800/80 border-teal-600 text-teal-50' 
                        : 'bg-slate-800/40 border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="block text-base font-bold">{item.label}</span>
                    <span className="block text-xs text-teal-300/80 font-mono mt-0.5">{item.sub}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 space-y-4">
              <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase mb-2">
                Emergency Placement Liaison
              </span>
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 w-full bg-teal-800 rounded-xl p-4 text-left cursor-pointer hover:bg-teal-700 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-900/50">
                  <Phone className="h-5 w-5 text-teal-300" />
                </div>
                <div>
                  <span className="block text-xs text-teal-200">Enquiry Hotline</span>
                  <span className="block text-base font-bold font-mono">{CONTACT_INFO.formattedPhone}</span>
                </div>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 w-full bg-slate-800/50 border border-slate-800 rounded-xl p-4 text-left cursor-pointer hover:bg-slate-800 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                  <Mail className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Written Communications</span>
                  <span className="block text-sm font-semibold truncate max-w-[200px]">{CONTACT_INFO.email}</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-slate-950 p-6 text-center text-[11px] text-slate-500 border-t border-slate-900 font-mono">
            Pro Care Homes Ltd • Creating genuine homes, not placements.
          </div>
        </div>
      )}
    </header>
  );
}
