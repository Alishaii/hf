"use client";

import Link from "next/link";
import { useState } from "react";

const statusColors: Record<string, { bg: string; text: string }> = {
  Active: { bg: "bg-[#f0fdf4] text-[#15803d]", text: "text-[#15803d]" },
  Reached: { bg: "bg-[#fff7ed] text-[#c2410c]", text: "text-[#c2410c]" },
  Interested: { bg: "bg-[#eff6ff] text-[#1447e6]", text: "text-[#1447e6]" },
  "In Progress": { bg: "bg-[#eff6ff] text-[#1447e6]", text: "text-[#1447e6]" },
  New: { bg: "bg-[#faf5ff] text-[#9333ea]", text: "text-[#9333ea]" },
};

const perfectMatchCandidates = [
  { initials: "MK", color: "bg-purple-600", name: "Markus Kruger", occupation: "-", status: "Active", lastContacted: "26.02.2026, 14:20", lastUpdated: "27.02.2026", phone: "+49 172 883 4109" },
  { initials: "SN", color: "bg-green-600", name: "Sophie Neumann", occupation: "Power Systems Engineer", status: "Reached", lastContacted: "-", lastUpdated: "27.02.2026", phone: "+49 028 927 2455" },
  { initials: "FC", color: "bg-violet-600", name: "Fahmi Chamakh", occupation: "-", status: "Active", lastContacted: "24.02.2026, 21:53", lastUpdated: "25.02.2026", phone: "+49 121 937 4162" },
  { initials: "LW", color: "bg-teal-600", name: "Lena Weber", occupation: "-", status: "Active", lastContacted: "22.02.2026, 09:15", lastUpdated: "23.02.2026", phone: "+49 381 883 4443" },
  { initials: "TS", color: "bg-blue-600", name: "Tobias Schafer", occupation: "E-Mobility Specialist", status: "Interested", lastContacted: "-", lastUpdated: "26.02.2026", phone: "+49 942 748 9274" },
  { initials: "AH", color: "bg-pink-600", name: "Anna Hoffmann", occupation: "-", status: "Active", lastContacted: "18.02.2026, 11:30", lastUpdated: "19.02.2026", phone: "+49 199 933 4729" },
  { initials: "JR", color: "bg-indigo-600", name: "Jan Richter", occupation: "-", status: "Active", lastContacted: "25.02.2026, 10:05", lastUpdated: "26.02.2026", phone: "+49 726 846 7389" },
];

const applicationsCandidates = [
  { initials: "MK", color: "bg-purple-600", name: "Markus Kruger", occupation: "-", status: "In Progress", lastContacted: "26.02.2026, 14:20", lastUpdated: "27.02.2026", phone: "+49 172 883 4109" },
  { initials: "SN", color: "bg-green-600", name: "Sophie Neumann", occupation: "Power Systems Engineer", status: "New", lastContacted: "-", lastUpdated: "27.02.2026", phone: "+49 028 927 2455" },
  { initials: "FC", color: "bg-violet-600", name: "Fahmi Chamakh", occupation: "-", status: "In Progress", lastContacted: "24.02.2026, 21:53", lastUpdated: "25.02.2026", phone: "+49 121 937 4162" },
  { initials: "LW", color: "bg-teal-600", name: "Lena Weber", occupation: "-", status: "In Progress", lastContacted: "22.02.2026, 09:15", lastUpdated: "23.02.2026", phone: "+49 381 883 4443" },
  { initials: "TS", color: "bg-blue-600", name: "Tobias Schafer", occupation: "-", status: "New", lastContacted: "-", lastUpdated: "26.02.2026", phone: "+49 942 748 9274" },
  { initials: "AH", color: "bg-pink-600", name: "Anna Hoffmann", occupation: "-", status: "In Progress", lastContacted: "18.02.2026, 11:30", lastUpdated: "19.02.2026", phone: "+49 172 241 4283" },
  { initials: "JR", color: "bg-indigo-600", name: "Jan Richter", occupation: "-", status: "In Progress", lastContacted: "25.02.2026, 10:05", lastUpdated: "26.02.2026", phone: "+49 726 846 7389" },
];

const tabs = ["Candidates", "Files", "Dashboard", "Details", "History"];

function CandidateTable({ candidates }: { candidates: typeof perfectMatchCandidates }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider w-[200px]">
            <div className="flex items-center gap-2">
              Applicant
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"/></svg>
            </div>
          </th>
          <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Current Occupation</th>
          <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              Status
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 4l5 5 5-5"/><path d="M7 12l5 5 5-5"/></svg>
            </div>
          </th>
          <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              Last Contacted
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"/></svg>
            </div>
          </th>
          <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              Last Updated
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 15l5 5 5-5M7 9l5-5 5 5"/></svg>
            </div>
          </th>
          <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Contacts</th>
          <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((c, i) => (
          <tr key={i} className="border-b border-gray-50 hover:bg-purple-50/30 transition-colors">
            <td className="py-4 px-6">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center text-white text-xs font-semibold`}>
                  {c.initials}
                </div>
                <span className="text-sm font-medium text-gray-900">{c.name}</span>
              </div>
            </td>
            <td className="py-4 px-6 text-sm text-gray-500">{c.occupation}</td>
            <td className="py-4 px-4">
              <span className={`inline-flex items-center gap-0.5 text-xs font-medium rounded-full pl-3 pr-1.5 py-1 ${statusColors[c.status]?.bg || "bg-gray-50 text-gray-600"}`}>
                {c.status}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </span>
            </td>
            <td className="py-4 px-6 text-sm text-gray-500">{c.lastContacted}</td>
            <td className="py-4 px-6 text-sm text-gray-500">{c.lastUpdated}</td>
            <td className="py-4 px-6">
              <div className="flex items-center gap-2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0122 16.92z"/></svg>
                <span className="text-xs text-gray-400">{c.phone}</span>
              </div>
            </td>
            <td className="py-4 px-6">
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8zM20 8v6M23 11h-6"/></svg>
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-400">
                  <svg width="4" height="16" viewBox="0 0 4 16" fill="#9ca3af"><circle cx="2" cy="2" r="1.5"/><circle cx="2" cy="8" r="1.5"/><circle cx="2" cy="14" r="1.5"/></svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function CampaignSinglePage() {
  const [activeTab, setActiveTab] = useState("Candidates");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "Perfect Match": true,
    Applications: true,
    Proposal: false,
    Hired: false,
    Inactive: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-8 h-[76px]">
          <div className="flex items-center gap-3">
            <Link href="/campaigns" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </Link>
            <h1 className="text-lg font-semibold text-gray-900">Backend Developer (Java)</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Campaign Banner */}
      <div className="mx-6 mt-6 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 p-6 text-white shadow-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-medium px-3 pr-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#9bff53]" />
              Active
            </span>
            <span className="text-xs text-white/80">Published: 12/01/2026 by Rubi Corx</span>
          </div>
          <button className="px-5 py-2 rounded-[10px] bg-white/20 text-sm font-medium text-white hover:bg-white/30 transition-colors">
            Edit campaign
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">
          Backend Developer (Java) - Spezialisierung auf Battery En...
        </h2>
        <div className="flex items-center gap-6 text-sm text-white">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Berlin
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
            Experience: 3
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            91000 EUR / year
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-8 mt-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 pb-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search candidates..."
                className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </div>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8zM20 8v6M23 11h-6"/>
              </svg>
              Add Candidate
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-6 py-6 space-y-4">
        {/* Perfect Match */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div
            onClick={() => toggleSection("Perfect Match")}
            className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 2l1.2 3.6a2 2 0 001.2 1.2L15.5 8l-3.6 1.2a2 2 0 00-1.2 1.2L9.5 14l-1.2-3.6a2 2 0 00-1.2-1.2L3.5 8l3.6-1.2a2 2 0 001.2-1.2L9.5 2z"/>
                <path d="M18 12l.8 2.4a1 1 0 00.6.6L22 15.8l-2.6.8a1 1 0 00-.6.6L18 19.8l-.8-2.6a1 1 0 00-.6-.6L14 15.8l2.6-.8a1 1 0 00.6-.6L18 12z"/>
              </svg>
              <span className="text-base font-semibold text-gray-900">Perfect Match</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">12</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
                PM settings
              </button>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" className={`transition-transform ${expandedSections["Perfect Match"] ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
          {expandedSections["Perfect Match"] && (
            <div className="border-t border-gray-100">
              <CandidateTable candidates={perfectMatchCandidates} />
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection("Applications")}
            className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
              <span className="text-base font-semibold text-gray-900">Applications</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">7</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" className={`transition-transform ${expandedSections["Applications"] ? "rotate-180" : ""}`}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          {expandedSections["Applications"] && (
            <div className="border-t border-gray-100">
              <CandidateTable candidates={applicationsCandidates} />
            </div>
          )}
        </div>

        {/* Proposal */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection("Proposal")}
            className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <span className="text-base font-semibold text-gray-900">Proposal</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" className={`transition-transform ${expandedSections["Proposal"] ? "rotate-180" : ""}`}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          {expandedSections["Proposal"] && (
            <div className="border-t border-gray-100 py-12 text-center text-gray-400 text-sm">
              No results
            </div>
          )}
        </div>

        {/* Hired */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection("Hired")}
            className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
              </svg>
              <span className="text-base font-semibold text-gray-900">Hired</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" className={`transition-transform ${expandedSections["Hired"] ? "rotate-180" : ""}`}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* Inactive */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <button
            onClick={() => toggleSection("Inactive")}
            className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              <span className="text-base font-semibold text-gray-900">Inactive</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">5</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" className={`transition-transform ${expandedSections["Inactive"] ? "rotate-180" : ""}`}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
