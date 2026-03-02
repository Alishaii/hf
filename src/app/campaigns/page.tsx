"use client";

import Link from "next/link";
import { useState } from "react";

const campaigns = [
  {
    id: "1",
    title: "Cloud Architect",
    company: "SAP SE",
    owner: "Lisa Hartmann",
    location: "Walldorf",
    salary: "95-120k",
    workplace: "Hybrid",
    workload: "Full-time",
    status: "Launched" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 12,
    contactedTotal: 12,
    inProgress: 4,
    reviewChanges: 1,
  },
  {
    id: "2",
    title: "DevOps Engineer",
    company: "Deutsche Telekom",
    owner: "Polly Korsun",
    location: "Bonn",
    salary: "70-85k",
    workplace: "Remote",
    workload: "Full-time",
    status: "Launched" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 12,
    contactedTotal: 12,
    inProgress: 4,
    reviewChanges: 0,
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Zalando SE",
    owner: "Lisa Hartmann",
    location: "Berlin",
    salary: "95-120k",
    workplace: "Hybrid",
    workload: "Full-time",
    status: "Launched" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 18,
    contactedTotal: 20,
    inProgress: 4,
    reviewChanges: 0,
  },
  {
    id: "4",
    title: "Machine Learning Engineer",
    company: "Bosch",
    owner: "Polly Korsun",
    location: "Stuttgart",
    salary: "85-110k",
    workplace: "Hybrid",
    workload: "Full-time",
    status: "Launched" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 3,
    contactedTotal: 9,
    inProgress: 1,
    reviewChanges: 3,
  },
  {
    id: "5",
    title: "Sales Manager DACH",
    company: "Henkel AG",
    owner: "Max Weber",
    location: "Walldorf",
    salary: "95-120k",
    workplace: "Hybrid",
    workload: "Full-time",
    status: "Created" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 0,
    contactedTotal: 0,
    inProgress: 0,
    reviewChanges: 0,
  },
  {
    id: "6",
    title: "Backend Developer (Java)",
    company: "Allianz SE",
    owner: "Lisa Hartmann",
    location: "Munich",
    salary: "75-95k",
    workplace: "Remote",
    workload: "Part-time",
    status: "Launched" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 11,
    contactedTotal: 23,
    inProgress: 8,
    reviewChanges: 0,
  },
  {
    id: "7",
    title: "Supply Chain Analyst",
    company: "Continental AG",
    owner: "Max Weber",
    location: "Hannover",
    salary: "95-120k",
    workplace: "Hybrid",
    workload: "Full-time",
    status: "Created" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 5,
    contactedTotal: 10,
    inProgress: 2,
    reviewChanges: 0,
  },
  {
    id: "8",
    title: "Financial Controller",
    company: "Fresenius SE",
    owner: "Max Weber",
    location: "Walldorf",
    salary: "95-120k",
    workplace: "Hybrid",
    workload: "Full-time",
    status: "Launched" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 7,
    contactedTotal: 15,
    inProgress: 3,
    reviewChanges: 2,
  },
  {
    id: "9",
    title: "Marketing Lead",
    company: "Adidas AG",
    owner: "Polly Korsun",
    location: "Nuremberg",
    salary: "95-120k",
    workplace: "Hybrid",
    workload: "Full-time",
    status: "Launched" as const,
    nextStep: "Interview scheduled for tomorrow",
    contacted: 9,
    contactedTotal: 18,
    inProgress: 5,
    reviewChanges: 0,
  },
];

const filters = ["Status", "Company", "Workplace", "Workload", "Salary"];

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["Germany"]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-8 h-[76px]">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-gray-900">Campaigns</h1>
            <span className="text-sm text-gray-400">277</span>
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

      {/* Review Changes Banner */}
      {campaigns.reduce((sum, c) => sum + c.reviewChanges, 0) > 0 && (
        <div className="mx-8 mt-4 flex items-center justify-between bg-[#fffbeb] border border-[#fde68a] rounded-[10px] pl-4 pr-2 py-2">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span className="text-[13px] text-[#92400e]">
              You have {campaigns.reduce((sum, c) => sum + c.reviewChanges, 0)} contact changes to review
            </span>
          </div>
          <button className="text-[12px] font-semibold text-[#973c00] px-3 py-1 rounded-[6px] hover:bg-[#fef3c7] transition-colors">
            Review changes
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-medium text-[#9ca3af]">Filter by</span>
          {/* Active filter: Germany */}
          <button className="flex items-center gap-1 pl-[13px] pr-[10px] py-2 rounded-[10px] bg-[#faf5ff] border border-[#e9d5ff] text-[13px] font-medium text-[#9333ea]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
            Germany
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          {filters.map((filter) => (
            <button
              key={filter}
              className="flex items-center gap-1 pl-[13px] pr-[10px] py-2 rounded-[10px] bg-white border border-[#e5e7eb] text-[13px] font-medium text-[#5a5f72] hover:border-gray-300 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {filter === "Status" && <><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></>}
                {filter === "Company" && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></>}
                {filter === "Workplace" && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>}
                {filter === "Workload" && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                {filter === "Salary" && <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>}
              </svg>
              {filter}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          ))}
          <button className="text-[12px] text-[#9ca0b0] hover:text-gray-600 ml-1">
            Clear all
          </button>
        </div>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search positions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 bg-white"
          />
        </div>
      </div>

      {/* Campaign Cards Grid */}
      <div className="px-8 pb-8 grid grid-cols-3 gap-5">
        {campaigns.map((campaign) => (
          <Link
            key={campaign.id}
            href={`/campaigns/${campaign.id}`}
            className="bg-white rounded-[14px] border-l-2 border-[#22c55e] pl-[22px] pr-[24px] pt-[18px] pb-[10px] flex flex-col gap-[14px] hover:shadow-lg transition-all group"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-[6px]">
                <span className="text-[10px] text-[#a1a1aa]">
                  <span className="uppercase">Owner:</span>{" "}
                  <span className="font-medium text-[#71717a]">{campaign.owner}</span>
                </span>
                <button
                  className="w-[28px] h-[28px] rounded-[7px] flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-gray-100 transition-opacity"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ca3af">
                    <circle cx="12" cy="5" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="12" cy="19" r="1.5"/>
                  </svg>
                </button>
              </div>
              <h3 className="text-[18px] font-semibold text-[#111827] leading-[20.8px]">
                {campaign.title}
              </h3>
              <p className="text-[14px] font-medium text-[#797979] mt-px">{campaign.company}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-[10px]">
              <span className="flex items-center gap-[5px] px-[12px] py-[8px] rounded-[8px] bg-white border border-[#ecedf2] text-[12.5px] font-normal text-[#5a5e72]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {campaign.location}
              </span>
              <span className="flex items-center gap-[5px] px-[12px] py-[8px] rounded-[8px] bg-white border border-[#ecedf2] text-[12.5px] font-normal text-[#5a5e72]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
                {campaign.salary}
              </span>
              <span className="flex items-center px-[12px] py-[8px] rounded-[8px] bg-white border border-[#ecedf2] text-[12.5px] font-normal text-[#5a5e72]">
                {campaign.workplace}
              </span>
              <span className="flex items-center px-[12px] py-[8px] rounded-[8px] bg-white border border-[#ecedf2] text-[12.5px] font-normal text-[#5a5e72]">
                {campaign.workload}
              </span>
            </div>

            {/* Next Steps */}
            <div>
              <p className="text-[10px] uppercase text-[#a8aab1] mb-2">
                Next steps
              </p>
              <div className="flex items-center gap-1.5 bg-[#ecfdf5] rounded-[10px] px-3 py-[9px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
                <span className="text-[12.5px] font-medium text-[#065f46]">
                  {campaign.nextStep}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center">
              <div className="flex-1 flex flex-col items-center gap-1 py-2">
                <div className="text-[22px] font-bold text-[#1a1a2e] leading-[22px]">
                  {campaign.contacted}
                  <span className="text-[14px] font-medium text-[rgba(26,26,46,0.35)] tracking-[1px]">
                    /{campaign.contactedTotal}
                  </span>
                </div>
                <div className="text-[12px] text-[#a8aab1]">Contacted</div>
              </div>
              <div className="w-px h-[30px] bg-gray-200" />
              <div className="flex-1 flex flex-col items-center gap-1 py-2">
                <div className="text-[22px] font-bold text-[#1a1a2e] leading-[22px]">
                  {campaign.inProgress}
                </div>
                <div className="text-[12px] text-[#a8aab1]">In Progress</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
