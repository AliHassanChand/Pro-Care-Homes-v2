/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CAREER_OPENINGS, CONTACT_INFO } from '../data/careData';
import { 
  Briefcase, 
  Award, 
  GraduationCap, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  Send, 
  Lock,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface CareersProps {
  setRoute: (route: PageRoute) => void;
  onPrefetch: (route: PageRoute) => void;
}

export default function Careers({ setRoute, onPrefetch }: CareersProps) {
  const [selectedJobId, setSelectedJobId] = useState<string>("snr-pbs-support");
  const [applied, setApplied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    nvqLevel: 'Level 2',
    rightToWork: 'Yes',
    hasDbs: 'Yes',
    coverNotes: ''
  });

  const activeJob = CAREER_OPENINGS.find(j => j.id === selectedJobId) || CAREER_OPENINGS[0];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setApplied(true);
    }, 1100);
  };

  const handleJobSelect = (id: string) => {
    setSelectedJobId(id);
    const element = document.getElementById("application-form-panel");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postcode: '',
      nvqLevel: 'Level 2',
      rightToWork: 'Yes',
      hasDbs: 'Yes',
      coverNotes: ''
    });
    setApplied(false);
  };

  return (
    <div className="relative">
      
      {/* Careers Banner */}
      <section className="bg-slate-900 border-b border-slate-800 text-white px-6 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative mx-auto max-w-7xl">
          <span className="font-mono text-xs font-bold tracking-widest text-teal-400 uppercase block mb-3">Health & Social Care Careers</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5.5xl leading-tight">
            Specialist Support Careers
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-350 max-w-2.5xl leading-relaxed font-sans font-normal">
            We are building an elite, high-retention clinical care workforce. By ensuring competitive wages, paid induction standards, continuous PBS academy pathways, and <strong>targeting less than 10% agency reliance</strong>, we protect both our staff welfare and resident stability.
          </p>
        </div>
      </section>

      {/* Main Grid: Listings and Career values */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left listings, training and values Column */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Strategic Agency Reliance Statement */}
              <div className="rounded-2xl border border-teal-250 bg-teal-50/50 p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-teal-805" />
                  <span className="font-mono text-[10px] tracking-widest text-teal-900 uppercase font-bold">The PROCH Workforce Charter</span>
                </div>
                <h2 className="font-display text-xl font-bold text-teal-950 tracking-tight leading-tight">
                  Why We Target Under 10% Staffing Agency Reliance
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Consistent relationships are the core driver of de-escalation inside complex autism and learning disability environments. Frequent shifts by unregistered, unfamiliar temporary agency workers can double distress triggers and compromise support outcomes. 
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  We combat this trend: Our rotas are over-staffed, our payroll is managed in-house, and our team receives stable, contracted hours with guaranteed clinical supervision. At PROCH, our staff have careers, not gig work.
                </p>
              </div>

              {/* Active Career Openings Showcase */}
              <div className="space-y-6">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Current Vacancies</span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                  Select an Active Opportunity:
                </h3>
                
                <div className="space-y-4">
                  {CAREER_OPENINGS.map((job) => {
                    const isSelected = selectedJobId === job.id;
                    return (
                      <div 
                        key={job.id}
                        className={`rounded-xl border p-5 transition-all text-left ${
                          isSelected 
                            ? 'bg-slate-50 border-slate-900 shadow-xs' 
                            : 'bg-white border-slate-200/80 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <span className="inline-flex items-center rounded-md bg-teal-50 px-2.5 py-0.5 text-xs font-mono font-medium text-teal-800 ring-1 ring-inset ring-teal-605/10 mb-2">
                              {job.department}
                            </span>
                            <h4 className="font-display text-lg font-bold text-slate-905">{job.title}</h4>
                            
                            <div className="flex flex-wrap gap-4 mt-2.5 text-xs text-slate-500 font-mono">
                              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                              <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5" /> {job.salary}</span>
                              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => handleJobSelect(job.id)}
                            className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-4 py-2 text-xs font-bold cursor-pointer transition-colors shrink-0"
                          >
                            Apply For This Role
                          </button>
                        </div>

                        {isSelected && (
                          <div className="mt-5 pt-5 border-t border-slate-200 space-y-4 transform transition-all duration-150">
                            <div>
                              <h5 className="font-mono text-[9px] tracking-widest text-slate-450 uppercase mb-2 font-bold">Brief Description:</h5>
                              <p className="text-xs text-slate-650 leading-relaxed">{job.description}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-mono text-[9px] tracking-widest text-slate-450 uppercase mb-2 font-bold">Key Responsibilities:</h5>
                                <ul className="space-y-1.5 text-xs text-slate-600">
                                  {job.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex gap-2 items-start">
                                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-mono text-[9px] tracking-widest text-slate-450 uppercase mb-2 font-bold">Candidate Requirements:</h5>
                                <ul className="space-y-1.5 text-xs text-slate-600">
                                  {job.requirements.map((req, idx) => (
                                    <li key={idx} className="flex gap-2 items-start">
                                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="rounded-lg bg-teal-50/50 border border-teal-100 p-4">
                              <span className="font-mono text-[9px] tracking-widest text-teal-900 uppercase font-bold block mb-1">Protection Notes:</span>
                              <p className="text-[11px] text-teal-950 leading-relaxed">{job.agencyRelianceMitigationNotes}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Training and Pathway Matrix */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Qualifications Matrix</span>
                <h3 className="font-display text-xl font-bold text-slate-905">
                  Paid Training & PBS Academy Progression
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[70ch]">
                  You are never expected to work in stressful isolation. We fund structured educational advancement modules to turn clinical caregiving into a certified science:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="border border-slate-100 bg-slate-50 p-4 rounded-xl text-center space-y-2">
                    <GraduationCap className="h-6 w-6 text-teal-800 mx-auto" />
                    <h5 className="text-xs font-bold text-slate-900">Health NVQ Pathways</h5>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Full corporate financing and mentoring for NVQ Level 3 and Level 5 health leadership certificates.
                    </p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50 p-4 rounded-xl text-center space-y-2">
                    <Award className="h-6 w-6 text-teal-800 mx-auto" />
                    <h5 className="text-xs font-bold text-slate-900">PBS Practitioner Track</h5>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Intense coursework in Functional Behavioural Assessment accredited by the British Institute of Learning Disabilities (BILD).
                    </p>
                  </div>
                  <div className="border border-slate-100 bg-slate-50 p-4 rounded-xl text-center space-y-2">
                    <ShieldCheck className="h-6 w-6 text-teal-800 mx-auto" />
                    <h5 className="text-xs font-bold text-slate-900">RRN Restraint Minimizaton</h5>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Specialist certification in de-escalation models restricting the use of physical containment options.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Application Form Column */}
            <div id="application-form-panel" className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900 font-mono">
                  <Sparkles className="h-3 w-3" />
                  <span>Values recruitment platform</span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                  Safer Support application
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit your details directly to our workforce audits team. We enforce strict pre-employment reference checks before starting rotas.
                </p>
              </div>

              {applied ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-905">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-teal-950">Application Logged</h4>
                    <p className="text-xs text-teal-900 mt-2 leading-relaxed">
                      Thank you, <strong>{formData.firstName}</strong>. Your values-based application has passed to our HR vetting panel.
                    </p>
                    <p className="text-[11px] text-teal-800 mt-2 italic">
                      You will be notified on the status of your interview roadmap within 48 hours.
                    </p>
                  </div>
                  <button 
                    onClick={resetForm}
                    className="px-4 py-2 border border-teal-300 rounded-lg text-xs font-semibold text-teal-905 bg-white hover:bg-teal-100/50 transition-colors cursor-pointer"
                  >
                    File Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  
                  <div className="rounded-lg bg-orange-50 border border-orange-200 p-3.5 space-y-1.5 text-xs text-orange-900">
                    <span className="block font-bold">Currently Applying For:</span>
                    <span className="block font-semibold font-display text-slate-900 text-sm">
                      {activeJob.title}
                    </span>
                    <span className="block text-[10px] text-slate-600 leading-normal font-mono">
                      Location: {activeJob.location} • Salary base: {activeJob.salary}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold border-b border-slate-200 pb-1">
                      01. Contact Credentials
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">First Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Liam"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.firstName}
                          onChange={e => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Last Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Carter"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.lastName}
                          onChange={e => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Email *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="e.g. liam.carter@mail.co.uk"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Phone Line *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="e.g. 07700 900077"
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Postcode (South London Priority) *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. CR0 1XP"
                        className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none font-mono"
                        value={formData.postcode}
                        onChange={e => setFormData({...formData, postcode: e.target.value.toUpperCase()})}
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="block font-mono text-[9px] tracking-widest text-slate-400 uppercase font-bold border-b border-slate-200 pb-1">
                      02. Mandatory Care Checks
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">RTW UK? *</label>
                        <select 
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none cursor-pointer"
                          value={formData.rightToWork}
                          onChange={e => setFormData({...formData, rightToWork: e.target.value})}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No / Need Sponsorship</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Active DBS? *</label>
                        <select 
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none cursor-pointer"
                          value={formData.hasDbs}
                          onChange={e => setFormData({...formData, hasDbs: e.target.value})}
                        >
                          <option value="Yes">Yes (Enhanced Adult Barred)</option>
                          <option value="Update">On Update service</option>
                          <option value="No">No (Must file check)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Highest Care NVQ *</label>
                        <select 
                          className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none cursor-pointer"
                          value={formData.nvqLevel}
                          onChange={e => setFormData({...formData, nvqLevel: e.target.value})}
                        >
                          <option value="None">No NVQ yet</option>
                          <option value="Level 2">NVQ Level 2</option>
                          <option value="Level 3">NVQ Level 3</option>
                          <option value="Level 5">NVQ Level 5 / Clinical</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Professional Experience & Values Statements (Optional)</label>
                      <textarea 
                        rows={3}
                        placeholder="Tell us why consistent, relationship-first care without agency reliance matters in your support work..."
                        className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        value={formData.coverNotes}
                        onChange={e => setFormData({...formData, coverNotes: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-slate-950 py-3.5 text-xs font-bold tracking-wide text-white hover:bg-slate-850 transition-all cursor-pointer shadow-sm disabled:bg-slate-705 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Validating Vetting Records...</span>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Submit Vetted Application</span>
                        </>
                      )}
                    </button>
                    
                    <span className="block text-center text-[10px] font-mono text-slate-450 mt-3 leading-normal">
                      <Lock className="inline-flex h-3 w-3 mr-1" />
                      All submittals are encrypted and processed under the Skills for Care UK Safer Recruitment protocols.
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
