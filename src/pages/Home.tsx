/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SERVICE_PILLARS, CLINICAL_FRAMEWORKS, GOVERNANCE_RULES, CONTACT_INFO } from '../data/careData';
import { 
  Home as HomeIcon, 
  ShieldCheck, 
  Compass, 
  Activity, 
  Users, 
  ChevronRight, 
  Phone, 
  CheckCircle2, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HomeProps {
  setRoute: (route: PageRoute) => void;
  onPrefetch: (route: PageRoute) => void;
}

export default function Home({ setRoute, onPrefetch }: HomeProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("specialist-residential");
  const [activeFrameworkAcronym, setActiveFrameworkAcronym] = useState<string>("PBS");

  // Map icon strings to actual lucide components dynamically
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Home": return <HomeIcon className="h-6 w-6" />;
      case "ShieldCheck": return <ShieldCheck className="h-6 w-6" />;
      case "Compass": return <Compass className="h-6 w-6" />;
      case "Activity": return <Activity className="h-6 w-6" />;
      case "Users": return <Users className="h-6 w-6" />;
      default: return <ShieldCheck className="h-6 w-6" />;
    }
  };

  const activeService = SERVICE_PILLARS.find(s => s.id === selectedServiceId) || SERVICE_PILLARS[0];
  const activeFramework = CLINICAL_FRAMEWORKS.find(f => f.acronym === activeFrameworkAcronym) || CLINICAL_FRAMEWORKS[0];

  const handleCTAInquiry = () => {
    setRoute('commissioners');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSpeakWithTeam = () => {
    setRoute('careers');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-[#FDFCFB] px-6 py-12 md:py-20 border-b border-[#E6E2DF]">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left Column: Title and details */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-800 w-fit uppercase font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Specialist Residential Care & Supported Living</span>
              </div>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-[#1A1C1A] sm:text-7xl leading-[1.05]">
                Creating <span className="italic font-light text-teal-350">genuine</span> homes,<br />not placements.
              </h1>

              <p className="text-base sm:text-lg text-[#5A5A5A] max-w-xl leading-relaxed font-sans font-normal">
                Providing premium, expert-led support for adults with <strong>learning disabilities</strong>, <strong>autism</strong>, and <strong>complex mental health needs</strong> across South London commissioning domains.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  onClick={handleCTAInquiry}
                  onMouseEnter={() => onPrefetch('commissioners')}
                  className="rounded-xl border-2 border-teal-800 px-8 py-4 text-sm font-bold tracking-wide text-teal-800 hover:bg-[#F2F4F2] transition-all cursor-pointer text-center"
                >
                  Explore Our Care Models
                </button>
                <button
                  onClick={handleSpeakWithTeam}
                  onMouseEnter={() => onPrefetch('careers')}
                  className="rounded-xl bg-teal-350 px-8 py-4 text-sm font-bold tracking-wide text-white hover:bg-teal-450 transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
                >
                  Speak With Our Team
                </button>
              </div>
            </div>

            {/* Right Column: Hero Image Frame */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="aspect-[4/5] rounded-[2rem] bg-[#E9E5E0] overflow-hidden border-[12px] border-white shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000')", 
                    opacity: 0.88,
                    filter: "sepia(0.08)"
                  }} 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                <div className="flex items-center gap-4 text-left">
                  <div className="text-4xl font-serif text-teal-800 font-bold">90%</div>
                  <div className="text-[10px] leading-tight text-slate-500 font-semibold uppercase tracking-wider">
                    In-House Core<br/>Workforce Target
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Line */}
          <div className="mx-auto mt-16 max-w-7xl border-t border-slate-200 pt-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <span className="block font-display text-2.5xl font-bold text-[#1A1C1A]">100%</span>
                <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">PBS Compliant</span>
              </div>
              <div>
                <span className="block font-display text-2.5xl font-bold text-teal-350">&lt; 10%</span>
                <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Agency Dependency</span>
              </div>
              <div>
                <span className="block font-display text-2.5xl font-bold text-[#1A1C1A]">12 Beds</span>
                <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">S London Capacity</span>
              </div>
              <div>
                <span className="block font-display text-2.5xl font-bold text-teal-350">90 Days</span>
                <span className="block text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Safe Transition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy Statement */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="block font-mono text-xs tracking-widest text-teal-750 uppercase font-semibold mb-3">Our Core Philosophy</span>
          <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl leading-relaxed">
            Placements isolate. Genuine homes integrate, liberate, and ground. At PROCH, we construct residential spaces and support teams around the individual—securing safety without sacrificing dignity, and progress without sacrificing comfort.
          </p>
        </div>
      </section>

      {/* Core Service Pillars Section - Interactive Grid */}
      <section className="bg-slate-50 border-y border-slate-200 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center md:text-left mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-teal-800 uppercase block mb-2">Service Framework</span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4.5xl tracking-tight">
              Specialist Living Pathways
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl leading-relaxed">
              We design and operate services built for high stability, true clinical integration, and compassionate risk-reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            {/* Service Selection Column */}
            <div className="lg:col-span-5 space-y-3">
              {SERVICE_PILLARS.map((service) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`block w-full p-5 text-left rounded-xl border transition-all duration-150 cursor-pointer ${
                      isSelected 
                        ? 'bg-white border-teal-500 shadow-md ring-1 ring-teal-500/10' 
                        : 'bg-slate-100 hover:bg-white border-slate-200/60 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-teal-800 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        {getServiceIcon(service.iconName)}
                      </div>
                      <div className="flex-1">
                        <span className="block text-sm font-bold text-slate-900 leading-tight">
                          {service.title}
                        </span>
                        <span className="block text-xs text-slate-500 truncate mt-1 max-w-[250px]">
                          {service.description}
                        </span>
                      </div>
                      <ChevronRight className={`h-4 w-4 transition-transform ${isSelected ? 'text-teal-600 translate-x-1' : 'text-slate-450'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm min-h-[460px] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-850 border border-teal-100 mb-6">
                  {getServiceIcon(activeService.iconName)}
                  <span>{activeService.title}</span>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
                  Premium {activeService.title} Delivery
                </h3>
                
                <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-[65ch]">
                  {activeService.longDescription}
                </p>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h4 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold mb-4">
                    Active Quality Audits In South London:
                  </h4>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {activeService.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-xs text-slate-500 font-mono">
                  Operational standard coordinated with multi-disciplinary clinical teams.
                </span>
                <button
                  onClick={() => { setRoute('commissioners'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-700 hover:underline cursor-pointer"
                >
                  <span>Review Placement Compatibility</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Methodology Matrix (PBS, TIC, PIE) */}
      <section className="bg-white px-6 py-20 md:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-teal-850 uppercase block mb-2">Clinical Foundations</span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4.5xl tracking-tight">
              Theoretical & Practical Matrix
            </h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We apply proven, high-acuity therapeutic models systematically across our environments to prevent distress triggers.
            </p>
          </div>

          <div className="flex justify-center gap-2 border-b border-slate-100 pb-px mb-12">
            {CLINICAL_FRAMEWORKS.map((framework) => {
              const isActive = activeFrameworkAcronym === framework.acronym;
              return (
                <button
                  key={framework.acronym}
                  onClick={() => setActiveFrameworkAcronym(framework.acronym)}
                  className={`px-6 py-3.5 text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                    isActive 
                      ? 'border-slate-900 text-slate-900 bg-slate-50/50' 
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/20'
                  }`}
                >
                  <span className="font-mono block text-xs tracking-widest font-extrabold text-teal-700 uppercase mb-0.5">{framework.acronym}</span>
                  <span>{framework.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-md bg-teal-50 px-2.5 py-1 text-xs font-mono font-bold text-teal-850 ring-1 ring-inset ring-teal-500/10">
                Active Protocol: {activeFramework.acronym} Framework
              </span>
              
              <h3 className="font-display text-2.5xl font-bold tracking-tight text-slate-900">
                {activeFramework.subtitle}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeFramework.description}
              </p>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h4 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold mb-3">
                  Core Implementation Standard:
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-800 text-white font-mono text-xs font-bold">
                    100%
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    This structure is fully integrated in our recruitment standards, staff training program, and clinical audits.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 bg-slate-50 rounded-2xl border border-slate-200/80 p-8">
              <h4 className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold mb-4">
                Operational Framework Pillars:
              </h4>
              <div className="space-y-4">
                {activeFramework.keyPrinciples.map((principle, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 font-mono text-xs font-extrabold text-teal-800">
                      0{index + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-slate-700 leading-normal font-medium">
                        {principle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder Rules Blueprint Section */}
      <section className="bg-[#F9F8F6] text-[#2D332D] px-6 py-20 md:py-28 relative overflow-hidden border-t border-[#E6E2DF]">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-teal-800 uppercase block mb-3">Clinical Ethics & Governance</span>
            <h2 className="font-display text-3xl font-extrabold text-[#1A1C1A] sm:text-4.5xl tracking-tight">
              The Golden Governance Rules
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed font-sans">
              Pro Care Homes Ltd is built upon non-negotiable operational principles, guaranteeing that we never prioritize commercial targets over clinical safety or staffing densities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {GOVERNANCE_RULES.map((rule) => (
              <div 
                key={rule.num}
                className="relative rounded-2xl border border-[#E6E2DF] bg-white p-8 shadow-xs flex flex-col justify-between hover:border-teal-800 hover:shadow-md transition-all duration-150"
              >
                <div>
                  <span className="block font-serif text-3.5xl font-extrabold text-teal-800 italic mb-6">
                    Rule {rule.num}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-[#1A1C1A] tracking-tight leading-snug">
                    {rule.title}
                  </h3>
                  
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                    {rule.detail}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#6B705C] font-semibold">
                  <ShieldCheck className="h-4 w-4 text-teal-800" />
                  <span>CQC Safeguarding Standard Verified</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-[#E6E2DF] pt-12">
            <p className="text-sm text-slate-600 mb-6 font-sans">
              To learn more about our executive director board and compliance roadmaps, visit our governance section.
            </p>
            <button
              onClick={() => { setRoute('governance'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
              className="inline-flex items-center gap-2 rounded-lg bg-teal-800 px-6 py-3.5 text-xs font-bold tracking-wide text-white hover:bg-teal-700 transition-all cursor-pointer shadow-sm"
            >
              <span>Explore Clinical Governance Vault</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final Pathway Hub */}
      <section className="bg-white px-6 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#f0f9ff]/40 border border-slate-200/60 p-8 md:p-12 text-center relative overflow-hidden shadow-xs">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="font-mono text-xs font-bold tracking-widest text-teal-800 uppercase block mb-3">Referral Liaison Hub</span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight leading-tight sm:text-4xl">
              Are you looking for a clinical placement rescue or specialized step-down provider?
            </h2>
            <p className="mt-6 text-sm text-slate-650 leading-relaxed max-w-2xl mx-auto">
              Our Positive Behaviour Support practitioners are on standby to conduct assessments across Richmond, Croydon, Sutton, and Surrey commissioning domains.
            </p>
            
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
              <button
                onClick={handleCTAInquiry}
                className="rounded-xl bg-slate-950 px-8 py-4 text-xs font-bold tracking-wide text-white hover:bg-slate-850 transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Initiate Assessment Process</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="rounded-xl border border-slate-350 bg-white px-8 py-4 text-xs font-bold tracking-wide text-slate-800 hover:bg-slate-50 transition-all cursor-pointer font-mono flex items-center justify-center gap-2"
              >
                <Phone className="h-3.5 w-3.5 text-teal-850" />
                <span>Call Placement Director: {CONTACT_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
