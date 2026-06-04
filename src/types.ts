/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute = 'home' | 'commissioners' | 'families' | 'careers' | 'governance' | 'compliance-vault';

export interface OfficeContactInfo {
  name: string;
  domain: string;
  email: string;
  phone: string;
  formattedPhone: string;
  address: string;
}

export interface Region {
  name: string;
  description: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  highlights: string[];
}

export interface ClinicalFramework {
  acronym: string;
  name: string;
  subtitle: string;
  description: string;
  keyPrinciples: string[];
}

export interface ReferralStep {
  step: number;
  phase: string;
  title: string;
  description: string;
  duration: string;
  stakeholders: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  agencyRelianceMitigationNotes: string;
}

export interface VaultDocument {
  id: string;
  title: string;
  category: 'Policy' | 'Framework' | 'Standard' | 'CQC';
  version: string;
  lastReviewed: string;
  governingBody: string;
  summary: string;
  placeholderFileName: string;
}
