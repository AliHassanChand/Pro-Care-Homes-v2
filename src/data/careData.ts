/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  OfficeContactInfo, 
  Region, 
  ServicePillar, 
  ClinicalFramework, 
  ReferralStep, 
  CareerOpening, 
  VaultDocument 
} from '../types';

export const CONTACT_INFO: OfficeContactInfo = {
  name: "Pro Care Homes Ltd",
  domain: "procarehomes.co.uk",
  email: "Info@procarehomes.co.uk",
  phone: "02081661460",
  formattedPhone: "020 8166 1460",
  address: "South London Corporate Chambers, London, United Kingdom"
};

export const OPERATIONAL_REGIONS: Region[] = [
  { name: "Croydon", description: "Primary service hub for complex autism & sensory-friendly residences" },
  { name: "Sutton", description: "Bespoke supported living properties and community reintegration pathways" },
  { name: "Surrey", description: "Step-down therapeutic environments coordinating with Surrey clinical teams" },
  { name: "Kingston", description: "High-level physical adaptability layouts with comprehensive PBS oversight" },
  { name: "Lambeth", description: "Crisis stabilization and local clinical transition placements" },
  { name: "Southwark", description: "Active independent living development structures and vocational partnerships" },
  { name: "Merton", description: "Dual-diagnosis mental health support frameworks and MDT coordination" }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "specialist-residential",
    title: "Specialist Residential Care",
    description: "Highly structured therapeutic environments designed for adults with severe learning disabilities, high-acuity autism, and complex associated behaviours.",
    longDescription: "Our residential environments are engineered around physical comfort, high sensory compatibility, and structural stability. We operate smaller, high-staffing-ratio properties that feel native, quiet, and warm, avoiding any institutional layout. Specialized Positive Behaviour Support (PBS) practitioners are embedded directly within the environment.",
    iconName: "Home",
    highlights: [
      "1:1 to 2:1 staffing ratios based on multi-disciplinary acuity reviews",
      "Purpose-built sensory-calmed environment configurations",
      "Embedded Positive Behaviour Support (PBS) core implementation",
      "Full MCA, DoLS, and CQC-aligned safety controls"
    ]
  },
  {
    id: "supported-living",
    title: "Supported Living Packages",
    description: "Tailored independent housing solutions providing bespoke staffing pathways for individuals transitioning to greater self-reliance.",
    longDescription: "We coordinate with specialist housing associations to deliver properties of the highest standard. Individuals lease their own spaces, receiving highly responsive, values-based care packages focused on personal and domestic skill development, vocational inclusion, and total citizenship support.",
    iconName: "ShieldCheck",
    highlights: [
      "Bespoke, multi-tenancy or single-occupancy premium design standards",
      "Individualized daily living skill development tracks",
      "Integrated community involvement campaigns",
      "Responsive on-call emergency framework"
    ]
  },
  {
    id: "transitional-outreach",
    title: "Transitional Outreach",
    description: "A clinical step-down bridge supporting service users transitioning from secure psychiatric hospital settings back into local communities.",
    longDescription: "Designed to counteract placement breakdown, our transitional team works with individuals months prior to their hospital discharge. We map sensory profiles, capture trigger environments, and forge relation-first support bonds early to ensure high-stability transitions.",
    iconName: "Compass",
    highlights: [
      "Pre-discharge mapping and relationship baseline build",
      "Staged integration routines to prevent sensory flooding",
      "Integrated social worker and clinical lead coordination",
      "Tailored multi-stage integration timelines"
    ]
  },
  {
    id: "stabilisation-placements",
    title: "Stabilisation placements",
    description: "Rapid-response, high-governance placements engineered to rescue failing placements and prevent avoidable psychiatric hospital admissions.",
    longDescription: "When placement breakdowns occur, they traumatize the service user. Our rapid stabilization team steps in to inject experienced Positive Behaviour Support, restructure physical layouts, and support families/local networks. We seek to resolve the core crisis rather than transfer placing risk.",
    iconName: "Activity",
    highlights: [
      "Rapid MDT clinical audit within 24 hours of notification",
      "Symptom tracking & sensory environment calibration",
      "Systematic reduction of restrictive practice triggers",
      "Detailed root-cause analysis reporting to commissioners"
    ]
  },
  {
    id: "community-integration",
    title: "Community Integration Programs",
    description: "Asset-based lifestyle plans designed to ensure deep citizenship, local friendships, and vocational progression for our service users.",
    longDescription: "We do not believe in 'placements' that isolate. Every individual we support has an active Community Map identifying local libraries, therapeutic farms, sport clubs, sensory centers, and work opportunities. Goals are co-produced with service users to build a genuine sense of purpose.",
    iconName: "Users",
    highlights: [
      "Personalized local asset mappings and activity blueprints",
      "Vocational training and community inclusion partnerships",
      "Family-participatory event calendars and communication tracks",
      "Goal tracking based on authentic outcome measures"
    ]
  }
];

export const CLINICAL_FRAMEWORKS: ClinicalFramework[] = [
  {
    acronym: "PBS",
    name: "Positive Behaviour Support",
    subtitle: "Evidence-Based Positive Intervention Models",
    description: "A values-led framework aiming to improve the quality of life for the individual and those around them, reducing both the severity of behaviors that challenge and the need for restrictive practices.",
    keyPrinciples: [
      "Person-centered values targeting core inclusion and personal growth",
      "Rigorous functional behavioral assessment to identify triggers and unmet needs",
      "Proactive environmental and sensory adjustments before challenge arises",
      "Constructive teaching of alternative communication and coping strategies"
    ]
  },
  {
    acronym: "TIC",
    name: "Trauma-Informed Care",
    subtitle: "Psychological Safety and Sensitive Support",
    description: "Recognizing that behaviors of distress are often coping mechanisms for past developmental or situational trauma. Our team changes the question from 'What is wrong with you?' to 'What has happened to you?'",
    keyPrinciples: [
      "Establishing physical and psychological safety as a structural baseline",
      "Fostering complete trustworthiness through clear, consistent operations",
      "Maximizing choice, control, and empowerment in everyday schedules",
      "Building positive collaborative relationships between staff and service users"
    ]
  },
  {
    acronym: "PIE",
    name: "Psychologically Informed Environments",
    subtitle: "Sensory & Spatial Architecture Design",
    description: "A specialized approach where our physical spaces, staffing dynamics, rules, and governance policies are consciously designed to support sensory stabilization and reduce clinical arousal levels.",
    keyPrinciples: [
      "Spatial acoustics, lighting controls, and sensory zones built for grounding",
      "Consistent, non-institutional aesthetic designs in all buildings",
      "Regular reflective practice groups for staff to evaluate relational dynamics",
      "Outcome measurement that prioritizes human connection and trust indexes"
    ]
  }
];

export const GOVERNANCE_RULES = [
  {
    num: "01",
    title: "Never admit a person we cannot safely support.",
    detail: "Safeguarding and clinical safety are paramount. We conduct rigorous, unbiased pre-admission compatibility reviews, declining placements where internal sensory dynamics or staffing compatibility could threaten the safety, comfort, or progress of either the prospective resident or our existing family."
  },
  {
    num: "02",
    title: "Never sacrifice governance for occupancy.",
    detail: "We are an ethical provider built for long-term clinical and social impact. We purposefully restrict admissions, maintaining custom transition protocols, rather than rushing empty beds to hit financial quotas. Our quality assurance framework governs our pace of growth."
  },
  {
    num: "03",
    title: "Never sacrifice staffing for profit.",
    detail: "High-quality, specialized care demands a permanent, well-compensated, and deeply trained workforce. We ensure higher-than-average staffing densities, commit to continuous specialist training, and work aggressively to keep permanent agency usage below 10%."
  }
];

export const REFERRAL_FLOW: ReferralStep[] = [
  {
    step: 1,
    phase: "Screening",
    title: "Initial Contact & Referral",
    description: "Placement team or commissioner submits detailed medical history, clinical profiles, and funding parameters.",
    duration: "24 Hours",
    stakeholders: ["Social Worker", "Brokerage Officer", "PROCH Placement Lead"]
  },
  {
    step: 2,
    phase: "Assessment",
    title: "Compatibility & Clinical Assessment",
    description: "Our core Positive Behaviour Support (PBS) practitioners conduct hands-on observations in the current setting and audit clinical files.",
    duration: "3 - 5 Days",
    stakeholders: ["PBS Lead", "Registered Manager", "Family/Advocate"]
  },
  {
    step: 3,
    phase: "Governance",
    title: "MDT Panel & Governance Review",
    description: "Internal and external multi-disciplinary teams review potential impacts on current layouts, sensory vectors, and staffing capabilities.",
    duration: "48 Hours",
    stakeholders: ["MDT Board", "Clinical Advisors", "Registered Manager"]
  },
  {
    step: 4,
    phase: "Planning",
    title: "Bespoke Transition Design",
    description: "Formulation of the 90-day transition blueprint, sensory adjustments to the housing unit, and key staff introductions.",
    duration: "7 - 14 Days",
    stakeholders: ["Transition Officer", "Therapeutic Staff", "Service User"]
  },
  {
    step: 5,
    phase: "Admission",
    title: "Staged Placement Transition",
    description: "Staged admissions with outreach support, moving gradually from day-visits to overnight stays and final warm residency.",
    duration: "Variable",
    stakeholders: ["Corporate Care Team", "Family", "Local Care Team"]
  },
  {
    step: 6,
    phase: "Governance",
    title: "MDT Review & Progression Tracker",
    description: "Formal structured reviews are scheduled at day 30, 60, and 90 to calibrate behaviour support and target long-term stabilization goals.",
    duration: "Ongoing",
    stakeholders: ["Commissioner", "MDT Panel", "Registered Manager"]
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "snr-pbs-support",
    title: "Senior Positive Behaviour Support (PBS) Practitioner",
    department: "Clinical & Behaviours",
    location: "Croydon & Sutton residential locations",
    type: "Full-Time (40 Hours/Week)",
    salary: "£36,000 - £42,000 / annum",
    description: "Lead the formulation, analysis, and implementation of outstanding PBS pathways. You will mentor support staff, conduct sensory Audits, and liaise directly with South London commissioning clinical networks.",
    responsibilities: [
      "Carry out clinical functional behavior assessments for residential and outreach cases",
      "Draft, adjust, and evaluate high-quality PBS plans, sensory diets, and communication pathways",
      "Conduct reflective practice sessions and interactive practical training for peer support workers",
      "Attend local Multi-Disciplinary Team (MDT) panels and social worker reviews representing the client"
    ],
    requirements: [
      "Professional Qualification (BCBA, PBS Academy credential, or degree in Social Care/Psychology with certified PBS expertise)",
      "Excellent track record of reducing restrictive practice in residential settings",
      "Minimum 3 years working inside complex autism or severe mental health support services"
    ],
    agencyRelianceMitigationNotes: "PROCH protects staff welfare: No double-shifts, guaranteed professional clinical supervision, and structured funding for Master's-level health certifications. We do not use permanent agency support lines."
  },
  {
    id: "ld-support-worker",
    title: "Specialist Support Worker (Complex Learning Disabilities)",
    department: "Residential Operations",
    location: "Sutton & Merton high-sensory projects",
    type: "Full-Time or Pro-Rata (Flexible Shifts)",
    salary: "£13.50 - £15.80 / hour (with weekend enhancements)",
    description: "Forge true relationships, support independent domestic skill loops, and reinforce daily lifestyle integration for adult residents following customized PBS guides.",
    responsibilities: [
      "Assist residents with complex learning disabilities in their domestic, sensory, and vocational schedules",
      "Provide sensitive, highly proactive relational support, preventing triggers and sensory overload",
      "Maintain rigorous, accurate digital care logs using our integrated Nourish Care Platform system",
      "Escort residents during local community programs, work-placements, and therapeutic sensory sessions"
    ],
    requirements: [
      "NVQ/QCF Level 2 or 3 in Health and Social Care (or readiness to complete program with our funding)",
      "Values-based professional mindset focusing on human dignity, active citizenship, and warm engagement",
      "Previous complex behaviors experience is an advantage but a proactive, caring heart is essential"
    ],
    agencyRelianceMitigationNotes: "All staff participate in paid induction modules. We promote internally—every operational director started as an active support worker."
  },
  {
    id: "deputy-registered-mgr",
    title: "Deputy Care Manager (CQC Compliance Lead)",
    department: "Corporate Quality & Compliance",
    location: "Regional Office - South London Services",
    type: "Full-Time",
    salary: "£38,000 - £44,000 / annum",
    description: "Support our Registered Managers in preparing for upcoming CQC operational evaluations, leading auditing programs, safeguarding protocols, and medication safety systems.",
    responsibilities: [
      "Monitor, audit, and improve compliance markers against exact CQC Key Question quality criteria",
      "Supervise daily care records, incident files, and medication charts on the Nourish software suite",
      "Act as safeguarding coordinator, coordinating investigations and organizing local agency reports",
      "Direct safer-recruitment background checks and values-based induction trainings"
    ],
    requirements: [
      "NVQ Level 5 in Leadership for Health and Social Care (or equivalent progress)",
      "Comprehensive understanding of CQC Single Assessment Frameworks and South London Commissioning guidelines",
      "Minimum 2 years inside a deputy or senior leadership capacity within a CQC regulated facility"
    ],
    agencyRelianceMitigationNotes: "Generous healthcare benefits, pension matching, and absolute corporate commitment to maintain safe, fully-staffed rotas."
  }
];

export const VAULT_DOCUMENTS: VaultDocument[] = [
  {
    id: "vault-medication-policy",
    title: "Medication Management Policy & PRN Protocol",
    category: "Policy",
    version: "v4.2 (2026 Edition)",
    lastReviewed: "March 2026",
    governingBody: "CQC Safe & NICE Guidelines",
    summary: "Comprehensive structure for medication reconciliation, double-signed MAR charts on Nourish, medication storage safety, and detailed guidelines for PRN administration to strictly avoid chemical restraint.",
    placeholderFileName: "PROCH_Medication_Management_v4.2.pdf"
  },
  {
    id: "vault-safeguarding-framework",
    title: "Safeguarding Adults at Risk Prevention Framework",
    category: "Framework",
    version: "v5.1 (2026 Edition)",
    lastReviewed: "April 2026",
    governingBody: "London Multi-Agency Safeguarding Board",
    summary: "Clear procedural flows for immediate response, whistleblowing pathways, multi-agency referral protocols, and incident review methodologies designed to protect service user rights.",
    placeholderFileName: "PROCH_Safeguarding_Framework_v5.1.pdf"
  },
  {
    id: "vault-safer-recruitment",
    title: "Safer Recruitment Audit & Background Validation Tracker",
    category: "Standard",
    version: "v3.0 (2026 Edition)",
    lastReviewed: "May 2026",
    governingBody: "CQC Well-Led & Skills for Care UK",
    summary: "Pre-employment auditing protocols: Mandatory triple references, gaps in employment investigations, enhanced DBS (Adult Barred List) matches, and professional validation checklists.",
    placeholderFileName: "PROCH_Safer_Recruitment_Audit_v3.0.pdf"
  },
  {
    id: "vault-restrictive-practice-reduction",
    title: "Restrictive Practice Minimisation & Positive Behaviour Framework",
    category: "Framework",
    version: "v6.2 (2026 Edition)",
    lastReviewed: "May 2026",
    governingBody: "Restraint Reduction Network (RRN) Standards",
    summary: "Rigorous standards outlining the systemic containment of restrictive interventions. Focuses on environmental calms, PBS planning, physical de-escalation strategies, and rigorous post-incident debriefings.",
    placeholderFileName: "PROCH_Restrictive_Practice_Reduction_v6.2.pdf"
  },
  {
    id: "vault-mca-dols",
    title: "Mental Capacity Act (MCA) & DoLS Standard Compliance Manual",
    category: "Policy",
    version: "v4.0 (2026 Edition)",
    lastReviewed: "January 2026",
    governingBody: "Mental Capacity Act 2005 & Liberty Protection Standards",
    summary: "Best-interests assessments, capacity screening protocols, DoLS applications pathways, and continuous support models aimed at preserving client autonomy and choice.",
    placeholderFileName: "PROCH_MCA_DoLS_Compliance_v4.0.pdf"
  },
  {
    id: "vault-complaints-procedure",
    title: "Complaints, Grievances, and Feedback Resolution Policy",
    category: "Policy",
    version: "v3.1 (2026 Edition)",
    lastReviewed: "February 2026",
    governingBody: "CQC Responsive Guidelines & Local Ombudsman",
    summary: "Transparent pathways for service users, families, and professionals to lodge feed. Outlines formal investigation timelines (acknowledgement within 48h, final resolution inside 14 days).",
    placeholderFileName: "PROCH_Complaints_Policy_v3.1.pdf"
  },
  {
    id: "vault-incident-reporting",
    title: "Serious Incident Incident Investigation & Reporting Stand Operating Procedures",
    category: "Standard",
    version: "v4.5 (2026 Edition)",
    lastReviewed: "June 2026",
    governingBody: "CQC Statutory Notification Framework",
    summary: "Reporting workflows detailing when to submit a CQC statutory notification, root-cause investigation forms, and local authority quality team collaborative action guidelines.",
    placeholderFileName: "PROCH_Serious_Incident_Reporting_v4.5.pdf"
  },
  {
    id: "vault-governance",
    title: "Quality Assurance Auditing & Clinical Governance Framework",
    category: "Framework",
    version: "v5.0 (2026 Edition)",
    lastReviewed: "May 2026",
    governingBody: "CQC Well-Led & Integrated Audit Standards",
    summary: "Structure of our quarterly auditing schedule: Medication audits, health & safety checks, support-log compliance checks, and feedback analysis loops conducted directly by external QA consultants.",
    placeholderFileName: "PROCH_Clinical_Governance_QA_v5.0.pdf"
  }
];
