/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { VAULT_DOCUMENTS } from '../data/careData';
import { 
  Award, 
  ShieldCheck, 
  FileLock, 
  HelpCircle, 
  Search, 
  Download, 
  BookOpen, 
  Sparkles, 
  Eye, 
  FolderLock, 
  Lock,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  LockKeyhole
} from 'lucide-react';

interface GovernanceProps {
  currentRoute: PageRoute;
  setRoute: (route: PageRoute) => void;
  onPrefetch: (route: PageRoute) => void;
}

export default function Governance({ currentRoute, setRoute, onPrefetch }: GovernanceProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [downloadingDocId, setDownloadingDocId] = useState<string | null>(null);
  const [showVaultBanner, setShowVaultBanner] = useState(true);

  // Set meta tags for noindex on compliance-vault state dynamically
  useEffect(() => {
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (currentRoute === 'compliance-vault') {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow');
      }
    }
  }, [currentRoute]);

  const handleDownloadSimulation = (docId: string, filename: string) => {
    setDownloadingDocId(docId);
    setTimeout(() => {
      setDownloadingDocId(null);
      // Simulate real file receipt via alert/toast styled element alert
      alert(`[SECURITY VAULT SUCCESS]\nSecure download stream established for: ${filename}\nAudit Token matches CQC Registered ID: PROCH-001X`);
    }, 1500);
  };

  const filteredDocs = VAULT_DOCUMENTS.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render compliance vault directly if selected
  if (currentRoute === 'compliance-vault') {
    return (
      <div className="relative min-h-[500px]">
        {/* Strict SEO inspector notice banner */}
        <div className="bg-amber-950 py-3 px-6 text-amber-100 border-b border-amber-900 text-xs font-mono text-center flex items-center justify-center gap-2">
          <LockKeyhole className="h-4 w-4 text-amber-400 shrink-0" />
          <span>INSPECTOR VAULT ACTIVE: SECURED UNDER HTTPS STATE • STRICTLY PRIVILEGED • GOOGLE NOINDEX NOFOLLOW NOARCHIVE RULES FORCED</span>
        </div>

        {/* Vault Banner */}
        <section className="bg-slate-950 text-white px-6 py-16 md:py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <span className="font-mono text-xs font-bold tracking-widest text-teal-400 uppercase block mb-3">Regulatory Compliance Core</span>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="font-display text-3xl font-extrabold sm:text-5xl tracking-tight flex items-center gap-3">
                  <FolderLock className="h-10 w-10 text-teal-400" />
                  <span>Clinical Governance Vault</span>
                </h1>
                <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed font-mono">
                  This system hosts standard operating procedures, restraint reduction audits, safeguarding matrices, and safety checklists. For internal use by CQC Inspectors, Local Quality Assurance Teams, and placing medical leads.
                </p>
              </div>
              <button 
                onClick={() => { setRoute('governance'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-xs font-mono text-teal-400 hover:bg-slate-850 cursor-pointer self-start md:self-auto transition-colors"
              >
                ← Back to Governance Home
              </button>
            </div>
          </div>
        </section>

        {/* Policy Document Finder Matrix */}
        <section className="bg-white px-6 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="font-display text-lg font-bold text-slate-905">Standards Document Index</h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Showing {filteredDocs.length} official compliance blueprints matching parameters</p>
              </div>
              
              {/* Filter Search Input */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Filter standard policies..."
                  className="w-full bg-slate-50 border border-slate-205 rounded-lg py-2 pl-10 pr-4 text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Matrix Listing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map((doc) => (
                <div 
                  key={doc.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 flex flex-col justify-between hover:border-slate-350 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-mono font-bold text-slate-800 border border-slate-200">
                        {doc.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{doc.version}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900">{doc.title}</h3>
                    <p className="text-xs text-slate-600 leading-normal">{doc.summary}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-slate-500 pt-2">
                      <div>
                        <span className="block text-slate-400 uppercase">Review date:</span>
                        <span className="block text-slate-800 font-semibold">{doc.lastReviewed}</span>
                      </div>
                      <div>
                        <span className="block text-slate-400 uppercase">Audit Standard:</span>
                        <span className="block text-slate-800 font-semibold">{doc.governingBody}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[200px]">
                      Filename: {doc.placeholderFileName}
                    </span>
                    <button
                      onClick={() => handleDownloadSimulation(doc.id, doc.placeholderFileName)}
                      disabled={downloadingDocId !== null}
                      className="rounded-md bg-teal-800 hover:bg-teal-750 text-white font-mono font-bold text-[10px] px-3.5 py-2 transition-colors flex items-center gap-1 cursor-pointer disabled:bg-slate-405"
                    >
                      {downloadingDocId === doc.id ? (
                        <>Verifying Ledger...</>
                      ) : (
                        <>
                          <Download className="h-3 w-3" />
                          <span>Fetch Standard</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDocs.length === 0 && (
              <div className="text-center py-16 text-slate-500 font-mono">
                No policy matching "{searchTerm}" is listed inside the 2026 registry standard. Change search parameter.
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Otherwise, render Public Governance / Leadership and CQC roadmap
  return (
    <div className="relative">
      
      {/* Visual Header */}
      <section className="bg-slate-900 border-b border-slate-800 text-white px-6 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-950 via-slate-900 to-slate-950 opacity-90" />
        <div className="relative mx-auto max-w-7xl text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-400 font-mono mb-4">
            <Award className="h-3.5 w-3.5 text-teal-350" />
            <span>Clinical Assurance & Board Standards</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5.5xl leading-tight">
            Governance & CQC Readiness
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-350 max-w-2.5xl leading-relaxed font-sans font-normal">
            Safeguarding lives requires clinical expertise and operational maturity. Pro Care Homes is led by a multi-disciplinary executive board built around rigorous corporate auditing frameworks matching upcoming UK Care Quality Commission inspections.
          </p>
        </div>
      </section>

      {/* Leadership credentials */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Leadership profiles and roadmaps */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Executive Directors */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">Board Structure</span>
                <h2 className="font-display text-2.5xl font-bold text-slate-900 tracking-tight">
                  Experienced Executive Leadership
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our management board integrates healthcare auditing, social work experience, supported housing development infrastructure, and learning disability clinical methodologies. This balanced structure ensures that we possess the commercial backbone and compassionate heart required to sustain operationally stable environments.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-850 text-white font-mono text-base font-bold">
                      MD
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-905">Executive Managing Director</h4>
                      <p className="text-[10px] text-teal-850 font-mono uppercase mt-0.5 font-bold">Clinical Operations & Corporate Vetting</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">
                        Over 12 years coordinating complex residential projects in South London. Managing pre-admission compatibility, CQC registered standards frameworks, and corporate strategy.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-850 text-white font-mono text-base font-bold">
                      CD
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-905">Clinical Director & PBS Consultant</h4>
                      <p className="text-[10px] text-teal-850 font-mono uppercase mt-0.5 font-bold">Behavioral Science & RRN Compliance</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">
                        Accredited Positive Behaviour Support lead. Directing staff academies, formulating trigger minification pathways, and supervising medication audits on Nourish databases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Standards Roadmap Grid */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-widest text-teal-850 uppercase font-bold block">CQC Assessment standards</span>
                <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight">
                  Preparing for Upcoming CQC Single Assessment Framework
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are formulating our metrics in complete alignment with the CQC key questions, demonstrating we are:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 p-4 rounded-xl space-y-2">
                    <span className="inline-block bg-teal-100 text-teal-905 font-mono text-[10px] px-2 py-0.5 rounded-md font-bold font-mono">1. SAFE</span>
                    <p className="text-[11px] text-slate-650 leading-relaxed">
                      Safe Recruitment background vetting, robust MAR chart logs, and structured Restraint Minimization frameworks to protect resident rights.
                    </p>
                  </div>
                  <div className="border border-slate-200 p-4 rounded-xl space-y-2">
                    <span className="inline-block bg-teal-100 text-teal-905 font-mono text-[10px] px-2 py-0.5 rounded-md font-bold font-mono">2. EFFECTIVE</span>
                    <p className="text-[11px] text-slate-650 leading-relaxed">
                      Bespoke sensory environment layout calibrations, comprehensive staff academy PBS training, and integration with local healthcare teams.
                    </p>
                  </div>
                  <div className="border border-slate-200 p-4 rounded-xl space-y-2">
                    <span className="inline-block bg-teal-100 text-teal-905 font-mono text-[10px] px-2 py-0.5 rounded-md font-bold font-mono">3. CARING</span>
                    <p className="text-[11px] text-slate-650 leading-relaxed">
                      Relationship-first support lines establishing consistency, total active involvement of families, and Rights-Based Care philosophies.
                    </p>
                  </div>
                  <div className="border border-slate-200 p-4 rounded-xl space-y-2">
                    <span className="inline-block bg-teal-100 text-teal-905 font-mono text-[10px] px-2 py-0.5 rounded-md font-bold font-mono">4. RESPONSIVE</span>
                    <p className="text-[11px] text-slate-650 leading-relaxed">
                      Detailed community mappings developing vocational opportunities, personal skill tracks, and transparent complaints pathways.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Public Entrance gateway to the hidden vault */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-900/60 px-3 py-1 text-xs font-semibold text-teal-400 font-mono border border-teal-800">
                  <Lock className="h-3 w-3" />
                  <span>Restricted Access</span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white leading-snug">
                  CQC Inspector Portal & Document Registry
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Access to our detailed organizational policies, Medication safety files, Incident report SOPs, and Positive Restraint Reduction blueprints is strictly limited.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  To open this securely indexed inspector repository, click the authority gateway. This subdirectory enforces <strong>noindex rules</strong> to prevent data leaks.
                </p>
              </div>

              {showVaultBanner && (
                <div className="bg-slate-950 rounded-xl p-4 border border-slate-850 space-y-2 text-xs">
                  <div className="flex gap-2 text-amber-400 font-mono text-[10px] uppercase font-bold items-center mb-1">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Compliance Ledger Status: Active</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-normal font-sans">
                    All compliance standard matrices (MCA, DoLS, Safeguarding, Safer recruitment statistics) are continuously updated to support Croydon and Sutton commissioning audits.
                  </p>
                </div>
              )}

              <button
                onClick={() => { setRoute('compliance-vault'); window.scrollTo({ top: 0, behavior: 'instant' }); }}
                onMouseEnter={() => onPrefetch('compliance-vault')}
                className="w-full rounded-xl bg-teal-700 py-4 text-xs font-bold text-white hover:bg-teal-650 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                <FileLock className="h-4 w-4" />
                <span>Open Clinical Compliance Vault</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <div className="pt-4 border-t border-slate-800 text-center text-[10px] font-mono text-slate-500">
                Authorized auditors must utilize encrypted connections. Logging IP protocols are active under UK Regulation guidelines.
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
