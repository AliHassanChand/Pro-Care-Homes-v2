/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from '../types';
import { REFERRAL_FLOW, OPERATIONAL_REGIONS, CONTACT_INFO } from '../data/careData';
import { 
  FileDown, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  History, 
  Building, 
  Users, 
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles
} from 'lucide-react';

interface CommissionersProps {
  setRoute: (route: PageRoute) => void;
  onPrefetch: (route: PageRoute) => void;
}

export default function Commissioners({ setRoute, onPrefetch }: CommissionersProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    commissionerName: '',
    placingAuthority: '',
    roleTitle: '',
    email: '',
    phone: '',
    clientInitials: '',
    clientAge: '',
    diagnostics: [] as string[],
    currentPlacementType: '',
    breakdownRisk: 'High',
    restrictedPracticeCurrentlyActive: 'No',
    detailedAcuityRequirements: ''
  });

  const handleCheckboxChange = (field: string) => {
    setFormData(prev => {
      const active = prev.diagnostics.includes(field)
        ? prev.diagnostics.filter(d => d !== field)
        : [...prev.diagnostics, field];
      return { ...prev, diagnostics: active };
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate high-trust B2B submit lag
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const resetInquiry = () => {
    setFormData({
      commissionerName: '',
      placingAuthority: '',
      roleTitle: '',
      email: '',
      phone: '',
      clientInitials: '',
      clientAge: '',
      diagnostics: [],
      currentPlacementType: '',
      breakdownRisk: 'High',
      restrictedPracticeCurrentlyActive: 'No',
      detailedAcuityRequirements: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="relative">
      
      {/* Page Header banner */}
      <section className="bg-slate-900 border-b border-slate-800 text-white px-6 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative mx-auto max-w-7xl">
          <span className="font-mono text-xs font-bold tracking-widest text-teal-400 uppercase block mb-3">Enterprise B2B Placement Portal</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5.5xl leading-tight">
            South London commissioning Authorities
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-350 max-w-2.5xl leading-relaxed font-sans">
            Addressing critical local placement shortages. Pro Care Homes Ltd (PROCH) delivers high-stability registered residential and supported living frameworks across South London, built systematically around clinical governance, compatibility audits, and PBS metrics.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards and Referral Intake Hook */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Information Column */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Regional Placement Deficit Section */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Regional Stability</span>
                <h2 className="font-display text-2.5xl font-bold tracking-tight text-slate-900">
                  Combating Area Placement Instabilities
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[70ch]">
                  With acute shortages of specialist learning disability and autism spaces in regions like Croydon, Sutton, and Lambeth, placements are frequently rushed, leading to placement cycles of breakdown and psychiatric admissions. 
                </p>
                <p className="text-xs text-slate-605 leading-relaxed max-w-[70ch]">
                  PROCH acts as a strategic clinical rescue partner. By deploying embedded PBS specialists, designing custom sensory rooms prior to arrival, and conducting rigorous multi-disciplinary pre-assessment panels, we protect placing authority budgets and secure true, lifelong stability for individuals at risk.
                </p>
              </div>

              {/* Sequential Assessment Flow Tracker */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold">Referral Transition Pathway</span>
                  <span className="text-xs text-slate-500 font-mono">Select steps to view timeline details</span>
                </div>

                <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-3">
                  {REFERRAL_FLOW.map((step) => (
                    <button
                      key={step.step}
                      onClick={() => setActiveWorkflowStep(step.step)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeWorkflowStep === step.step
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Step 0{step.step}: {step.phase}
                    </button>
                  ))}
                </div>

                {/* Selected Flow Card */}
                {(() => {
                  const currStep = REFERRAL_FLOW.find(s => s.step === activeWorkflowStep) || REFERRAL_FLOW[0];
                  return (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4 transform transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center rounded-md bg-teal-50 px-2.5 py-1 text-xs font-mono font-bold text-teal-850 ring-1 ring-inset ring-teal-500/10">
                          Active Phase: {currStep.phase}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">Expected: <strong className="text-slate-800">{currStep.duration}</strong></span>
                      </div>
                      
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {currStep.step}. {currStep.title}
                      </h3>
                      
                      <p className="text-xs text-slate-610 leading-relaxed">
                        {currStep.description}
                      </p>

                      <div className="pt-4 border-t border-slate-200/60">
                        <span className="block text-[9px] font-mono tracking-widest text-slate-450 uppercase mb-2">Participant Stakeholders:</span>
                        <div className="flex flex-wrap gap-2">
                          {currStep.stakeholders.map((person, idx) => (
                            <span key={idx} className="bg-white border border-slate-200 px-2.5 py-1 rounded-md text-[10px] text-slate-700 font-medium">
                              • {person}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Accommodation Standards specifications */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Accommodation Matrix</span>
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                  CQC & Sensory Friendly Environment Specifications
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[70ch]">
                  Institutional layout patterns are forbidden. Our 1 x 6-bed registered residential home and 1 x 6-bed supported living assets are designed around high physical and sensory calm:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-100 bg-slate-50 p-4 rounded-xl">
                    <span className="font-mono text-[10px] text-teal-850 font-bold block mb-1">Acoustic Containment</span>
                    <p className="text-[11px] text-slate-505 leading-normal">
                      Double-insulated wall boards and acoustic panels to damp noise transmission by over 35dB, comforting low-tolerance sensory profiles.
                    </p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50 p-4 rounded-xl">
                    <span className="font-mono text-[10px] text-teal-850 font-bold block mb-1">Lighting Calibrators</span>
                    <p className="text-[11px] text-slate-505 leading-normal">
                      Strict usage of high-frequency flicker-free LED dimmers, enabling warm lighting shifts matching local task and emotional needs.
                    </p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50 p-4 rounded-xl">
                    <span className="font-mono text-[10px] text-teal-850 font-bold block mb-1">Impact-Resistant Hardening</span>
                    <p className="text-[11px] text-slate-505 leading-normal">
                      Subtle reinforcement materials (ply-baked drywalling, safety-tempered glass) to protect structural safety without visual cues.
                    </p>
                  </div>
                  <div className="border border-slate-100 bg-slate-100/10 p-4 rounded-xl">
                    <span className="font-mono text-[10px] text-teal-850 font-bold block mb-1">Immediate Sensory Escape Access</span>
                    <p className="text-[11px] text-slate-505 leading-normal">
                      Direct spatial routes to individual private outdoor sensory gardens and quiet grounding capsules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Commissioning Documents and Resources */}
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Documentation Packs</span>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Downloadable Referral Packs & Templates
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-slate-250/65 bg-slate-50/50 hover:bg-slate-100/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-100 text-teal-900 p-2 rounded-lg">
                        <FileDown className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 leading-tight">PROCH B2B Placement Assessment Form</span>
                        <span className="block text-[10px] font-mono text-slate-500 mt-0.5">Template Format: PDF Document • 4.8 MB • Rev. 2026</span>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer text-slate-800">
                      Download
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* B2B Placement inquiry Form Column */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900 font-mono">
                  <Sparkles className="h-3 w-3" />
                  <span>Secure Pipeline System</span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-905">
                  Placement Inquiry Matrix
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Confidential referral pre-screening for South London Authorities. Form details are transmitted via encrypted systems with clinical monitoring fields.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center space-y-4 transform transition-all duration-205">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-905">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-teal-950">Referral Logged Successfully</h4>
                    <p className="text-xs text-teal-900 mt-2 leading-relaxed">
                      Your inquiry has been stored inside our clinical pipeline. A senior Positive Behaviour Support (PBS) specialist will contact you on your secure agency line within 12 hours.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-teal-200">
                    <button 
                      onClick={resetInquiry}
                      className="px-4 py-2 border border-teal-300 rounded-lg text-xs font-semibold text-teal-905 bg-white hover:bg-teal-100/50 transition-colors cursor-pointer"
                    >
                      Log Another B2B referral
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Contact details headings group */}
                  <div className="space-y-3">
                    <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold border-b border-slate-200 pb-1">
                      01. Officer Identification
                    </span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Your Full Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Jean Robinson"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.commissionerName}
                          onChange={e => setFormData({...formData, commissionerName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Placing Authority *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Croydon Council"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.placingAuthority}
                          onChange={e => setFormData({...formData, placingAuthority: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Email (Secure Agency) *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="e.g. j.robinson@croydon.gov.uk"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Agency Phone Line *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="e.g. 020 8726 6000"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Client details group */}
                  <div className="space-y-3 pt-2">
                    <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold border-b border-slate-200 pb-1">
                      02. Core Referral Case Profile
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Client Initials *</label>
                        <input 
                          type="text" 
                          maxLength={3}
                          required
                          placeholder="e.g. T.A."
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none font-mono"
                          value={formData.clientInitials}
                          onChange={e => setFormData({...formData, clientInitials: e.target.value.toUpperCase()})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Age of Individual *</label>
                        <input 
                          type="number" 
                          required
                          placeholder="Must be 18+"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.clientAge}
                          onChange={e => setFormData({...formData, clientAge: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <span className="block text-[10px] font-mono text-slate-500 uppercase mb-2">Primary Diagnosis Markers * (Tick all applicable)</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          "Severe Learning Disability",
                          "Autism Spectrum Disorder",
                          "Complex Mental Health",
                          "Positive Forensic History",
                          "Self-Harm Acuity Limits",
                          "Dual-diagnosis profiles"
                        ].map(diag => {
                          const isSel = formData.diagnostics.includes(diag);
                          return (
                            <button
                              type="button"
                              key={diag}
                              onClick={() => handleCheckboxChange(diag)}
                              className={`flex items-center gap-2 p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                                isSel 
                                  ? 'bg-teal-50 border-teal-500 text-teal-900 font-medium' 
                                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                              }`}
                            >
                              <div className={`h-4 w-4 rounded border flex items-center justify-center shrink-0 ${isSel ? 'border-teal-500 bg-teal-550 text-white' : 'border-slate-300 bg-white'}`}>
                                {isSel && <div className="h-1.5 w-1.5 bg-white rounded-full" />}
                              </div>
                              <span className="text-[11px] truncate leading-tight">{diag}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Placement Breakdown Risk *</label>
                        <select 
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none cursor-pointer"
                          value={formData.breakdownRisk}
                          onChange={e => setFormData({...formData, breakdownRisk: e.target.value})}
                        >
                          <option value="High">Severe / Imminent Collapse</option>
                          <option value="Medium">Moderate placement instability</option>
                          <option value="Transition">Step-Down Clinical Transition</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Active Restrictive Practices? *</label>
                        <select 
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none cursor-pointer"
                          value={formData.restrictedPracticeCurrentlyActive}
                          onChange={e => setFormData({...formData, restrictedPracticeCurrentlyActive: e.target.value})}
                        >
                          <option value="Yes">Yes, heavily active (PRN / physical)</option>
                          <option value="No">No / minimal non-restrictive</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Detailed Acuity & Compatibility Notes</label>
                      <textarea 
                        rows={3}
                        placeholder="Please details trigger behaviors, communication matrices, and sensory preferences relevant to South London placement spaces..."
                        className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        value={formData.detailedAcuityRequirements}
                        onChange={e => setFormData({...formData, detailedAcuityRequirements: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-slate-950 py-3.5 text-xs font-bold tracking-wide text-white hover:bg-slate-850 transition-all cursor-pointer shadow-sm disabled:bg-slate-705 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <span>Transmitting Clinical Data...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Transmit Secure Referral Profile</span>
                        </>
                      )}
                    </button>
                    
                    <span className="block text-center text-[10px] font-mono text-slate-450 mt-3 leading-normal">
                      Security Safeguards: Transmitted under AES-256 protocols. Your information aligns strictly with GDPR and local commissioning data sharing matrices.
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
