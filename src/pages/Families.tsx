/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CONTACT_INFO } from '../data/careData';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface FamiliesProps {
  setRoute: (route: PageRoute) => void;
  onPrefetch: (route: PageRoute) => void;
}

export default function Families({ setRoute, onPrefetch }: FamiliesProps) {
  const [submitted, setSubmitted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [familyEmail, setFamilyEmail] = useState("");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() && familyEmail.trim()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setInputText("");
    setFamilyEmail("");
    setSubmitted(false);
  };

  return (
    <div className="relative">
      
      {/* Visual Header */}
      <section className="bg-slate-900 border-b border-slate-800 text-white px-6 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative mx-auto max-w-7xl text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-400 font-mono mb-4">
            <Heart className="h-3.5 w-3.5 text-teal-350" />
            <span>Family Trust & Care Integration</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5.5xl leading-tight">
            Supporting Families with Integrity
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-350 max-w-2.5xl leading-relaxed font-sans font-normal">
            We understand that securing the right setting for your loved one is an emotional, high-stakes journey. PROCH focuses on building relationships based on values, transparency, and clinical excellence—creating a home where people grow.
          </p>
        </div>
      </section>

      {/* Main Family content block */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info grid */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Rights-Based Care Principles */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Care Philosophy</span>
                <h2 className="font-display text-2.5xl font-bold text-slate-900 tracking-tight">
                  Our Commitment to Rights-Based, Dignified Support
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[70ch]">
                  At Pro Care Homes, your loved one is never treated as a "placement". They are a tenant, a unique individual, and an active citizen. We design care schedules, sensory environments, and social activities around their authentic choice and voice.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-display">Complete Self-Determination</h4>
                      <p className="text-[11px] text-slate-505 mt-1 leading-normal">
                        Service users participate in layout designs of their personal spaces, coordinate their weekly meal tracks, and actively co-create PBS plans.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 font-display">Active Community Mapping</h4>
                      <p className="text-[11px] text-slate-505 mt-1 leading-normal">
                        We map the local area to connect individuals with libraries, sports clubs, sensory farms, and vocational pathways.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parent Communication Framework */}
              <div className="space-y-4 bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Parent & Guardian Partnership</span>
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-905">
                  How We Keep Families In the Loop
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[70ch]">
                  Safeguarding requires absolute transparency. We do not hide information or run institutional silos. Our communications process ensures complete reassurance:
                </p>
                
                <div className="space-y-4 pt-2">
                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/60">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 font-mono text-xs font-bold">
                      24h
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Incident Notification Guarantee</h4>
                      <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                        Families are notified within 24 hours of any significant behavioral challenge, health update, or change inside the medication standard of their loved one.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/60">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 font-mono text-xs font-bold">
                      Wk
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Weekly Care Logs Summary</h4>
                      <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                        We send weekly high-level summaries compiled from the Nourish platform, detailing positive achievements, wellness milestones, and lifestyle outings.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200/60">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 font-mono text-xs font-bold">
                      Qtr
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Quarterly Multitrust Circles</h4>
                      <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                        Structured meetings with multi-disciplinary stakeholders, family members, and advocacy leads to evaluate and progress PBS and lifestyle goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safeguarding & Complaints Procedures */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Safety Assurance</span>
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                  Safeguarding & Fair Complaints Pathways
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[70ch]">
                  We maintain zero-tolerance rules regarding abuse, institutional neglect, or restrictive practices that do not comply with the strict Restraint Reduction Network guidelines.
                </p>
                <p className="text-xs text-slate-605 leading-relaxed max-w-[70ch]">
                  Families can voice worries directly. When a complaint is lodged, a formal quality coordinator independent of that specific care home is assigned to investigate, ensuring an unbiased and timely resolution (Acknowledged within 48 hours, fully processed and reported in writing within 14 days).
                </p>
              </div>

              {/* Service User Guide Placeholder */}
              <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold">Aesthetic Guides</span>
                  <h4 className="font-display text-base font-bold text-slate-900 leading-snug">
                    Request Our Easy-Read 'New Home' Family Guide
                  </h4>
                  <p className="text-xs text-slate-500">
                    A beautiful, sensory-designed brochure helping family members and futures tenants visualize our spaces.
                  </p>
                </div>
                <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-800 hover:bg-slate-5 hover:shadow-xs transition-colors cursor-pointer flex items-center gap-1.5 shrink-0">
                  <BookOpen className="h-4 w-4 text-teal-800" />
                  <span>Request Easy-Read PDF</span>
                </button>
              </div>

            </div>

            {/* Interactive Family Question Form */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900 font-mono">
                  <Sparkles className="h-3 w-3" />
                  <span>Family Support Link</span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                  How Can We Support You?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have questions about funding layouts, CQC progress, current vacancies in South London, or local safety frameworks? Let our family intake leads guide you.
                </p>
              </div>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-905">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-teal-950 font-bold">Inquiry Logged</h4>
                    <p className="text-xs text-teal-900 mt-2 leading-relaxed">
                      Your question has been securely routed to our Registered Managers. We will contact you at <strong>{familyEmail}</strong> within 24 hours.
                    </p>
                  </div>
                  <button 
                    onClick={resetForm}
                    className="px-4 py-2 border border-teal-300 rounded-lg text-xs font-semibold text-teal-905 bg-white hover:bg-teal-100/50 transition-colors cursor-pointer"
                  >
                    Ask another question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Your Email Target *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. elizabeth.jones@outlook.com"
                      className="w-full bg-white border border-slate-205 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      value={familyEmail}
                      onChange={e => setFamilyEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">How can we support you & your loved one? *</label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Please share any diagnostic notes, local authority parameters, or questions regarding transition timelines..."
                      className="w-full bg-white border border-slate-205 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      value={inputText}
                      onChange={e => setInputText(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-slate-950 py-3 text-xs font-bold text-white hover:bg-slate-850 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Send Family Inquiry</span>
                  </button>

                  <div className="pt-2 border-t border-slate-205/60 space-y-3">
                    <span className="block text-[9px] font-mono tracking-widest text-slate-450 uppercase mb-1">Immediate Support Helpline:</span>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-teal-800 transition-colors font-mono"
                    >
                      <Phone className="h-4 w-4 text-teal-650" />
                      <span>{CONTACT_INFO.formattedPhone} (Mon - Fri, 9am - 5pm)</span>
                    </a>
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
