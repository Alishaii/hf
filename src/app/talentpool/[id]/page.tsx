"use client";

import Link from "next/link";
import { useState } from "react";

const sidebarCandidates = [
  { id: "1", initials: "MK", color: "bg-purple-600", name: "Markus Kruger", role: "Senior Battery Engineer", company: "BMW Group", location: "Berlin", active: true },
  { id: "2", initials: "SN", color: "bg-green-600", name: "Sophie Neumann", role: "Battery Test Engineer", company: "CATL Europe", location: "Potsdam", isNew: true },
  { id: "3", initials: "FC", color: "bg-violet-600", name: "Fahmi Chamakh", role: "Power Systems Engineer", company: "Siemens Energy", location: "Berlin" },
  { id: "4", initials: "LW", color: "bg-teal-600", name: "Lena Weber", role: "E-Mobility Specialist", company: "Volkswagen AG", location: "Dresden" },
  { id: "5", initials: "TS", color: "bg-blue-600", name: "Tobias Schafer", role: "R&D Battery Engineer", company: "Bosch", location: "Stuttgart" },
  { id: "6", initials: "AH", color: "bg-pink-600", name: "Anna Hoffmann", role: "Battery Cell Analyst", company: "BASF SE", location: "Ludwigshafen" },
  { id: "7", initials: "JR", color: "bg-indigo-600", name: "Jan Richter", role: "Mechatronics Engineer", company: "Continental AG", location: "Hannover" },
  { id: "8", initials: "EB", color: "bg-emerald-600", name: "Elena Braun", role: "Energy Storage PM", company: "Varta AG", location: "Ellwangen" },
];

type CandidateDetail = {
  email: string;
  phone: string;
  skills: string[];
  matchingSkills: string[];
  experience: { letter: string; bg: string; text: string; title: string; company: string; period: string; tags: string[]; }[];
  education: { degree: string; school: string; period: string; };
  comments: { initials: string; name: string; tag: string; tagColor: string; time: string; text: string; likes?: number; reply?: { initials: string; name: string; time: string; text: string; }; }[];
};

const candidateDetails: Record<string, CandidateDetail> = {
  "1": {
    email: "m.kruger@bmw.de",
    phone: "+49 172 883 4109",
    skills: ["Battery Engineering", "Elektrotechnik", "Li-Ion Cells", "Thermal Management", "MATLAB/Simulink", "Power Electronics", "Li-Ion Cell Design", "LCAD (CATIA)", "CAD (CATIA)", "Python", "High Voltage Safety"],
    matchingSkills: ["Battery Engineering", "Elektrotechnik", "Li-Ion Cells"],
    experience: [
      { letter: "B", bg: "bg-[#e0f2fe]", text: "text-[#0284c7]", title: "Senior Battery Engineer", company: "BMW Group", period: "Mar 2019 – Present (6 years 11 months)", tags: ["Battery Engineering", "Thermal Management", "High Voltage Safety"] },
      { letter: "S", bg: "bg-[#fce7f3]", text: "text-[#be185d]", title: "Electrical Engineer", company: "Siemens AG", period: "Jun 2015 – Feb 2019 (3 years 8 months)", tags: ["Power Electronics", "Circuit Design"] },
      { letter: "T", bg: "bg-[#f0fdf4]", text: "text-[#15803d]", title: "Research Assistant", company: "TU Berlin", period: "Oct 2013 – May 2015 (1 year 7 months)", tags: [] },
    ],
    education: { degree: "M.Sc. Elektrotechnik", school: "TU Berlin", period: "2011 – 2013" },
    comments: [
      { initials: "TM", name: "Thomas Muller", tag: "Positive", tagColor: "bg-[#f0fdf4] text-[#15803d]", time: "2 hours ago", text: 'Spoke with him at the Munich Battery Conference last month. Very strong technical background, especially in thermal management. He mentioned he\'s open to new opportunities. I think he\'d be a great fit for the Berlin team. @Polly should we schedule a first call?', likes: 2, reply: { initials: "PK", name: "Polly Korsun", time: "1 hour ago", text: "Yes! Let's do it. I'll send him an outreach message this week. His profile matches all 3 key criteria perfectly." } },
      { initials: "SK", name: "Sarah Klein", tag: "Interview note", tagColor: "bg-[#eff6ff] text-[#1d4ed8]", time: "Yesterday", text: "Checked his LinkedIn -- he's been publishing articles on solid-state battery tech which aligns perfectly with the team's Q3 roadmap. Also noticed he has mutual connections with our CTO.", likes: 1 },
      { initials: "LB", name: "Lisa Becker", tag: "Question", tagColor: "bg-[#fef3c7] text-[#a16207]", time: "2 days ago", text: "Do we know his salary expectations? The budget for this position is between 85-95k. @Thomas did he mention anything about compensation when you spoke?" },
    ],
  },
  "2": {
    email: "s.neumann@catl-europe.com",
    phone: "+49 331 290 7744",
    skills: ["Battery Testing", "Cell Characterization", "EIS Analysis", "Thermal Runaway", "Python", "MATLAB", "Data Analysis", "Quality Assurance", "IEC Standards"],
    matchingSkills: ["Battery Testing", "Cell Characterization", "EIS Analysis"],
    experience: [
      { letter: "C", bg: "bg-[#dcfce7]", text: "text-[#16a34a]", title: "Battery Test Engineer", company: "CATL Europe", period: "Jan 2021 – Present (5 years 2 months)", tags: ["Battery Testing", "Cell Characterization"] },
      { letter: "F", bg: "bg-[#fef3c7]", text: "text-[#a16207]", title: "Test Lab Technician", company: "Fraunhofer ISE", period: "Mar 2018 – Dec 2020 (2 years 9 months)", tags: ["EIS Analysis", "Data Analysis"] },
    ],
    education: { degree: "M.Sc. Chemistry", school: "Universitat Potsdam", period: "2015 – 2017" },
    comments: [
      { initials: "PK", name: "Polly Korsun", tag: "Positive", tagColor: "bg-[#f0fdf4] text-[#15803d]", time: "1 day ago", text: "Sophie has a strong profile in cell characterization. Her CATL experience is very relevant for us. She just applied through our careers page — let's move quickly.", likes: 3 },
    ],
  },
  "3": {
    email: "f.chamakh@siemens-energy.com",
    phone: "+49 170 554 2288",
    skills: ["Power Systems", "Grid Integration", "Inverter Design", "SCADA", "PLC Programming", "AutoCAD", "Energy Storage", "Renewable Energy", "C++"],
    matchingSkills: ["Power Systems", "Grid Integration", "Inverter Design"],
    experience: [
      { letter: "S", bg: "bg-[#e0f2fe]", text: "text-[#0284c7]", title: "Power Systems Engineer", company: "Siemens Energy", period: "Aug 2020 – Present (5 years 7 months)", tags: ["Power Systems", "Grid Integration", "SCADA"] },
      { letter: "A", bg: "bg-[#fce7f3]", text: "text-[#be185d]", title: "Electrical Design Engineer", company: "ABB Ltd", period: "May 2017 – Jul 2020 (3 years 2 months)", tags: ["Inverter Design", "AutoCAD"] },
      { letter: "T", bg: "bg-[#f0fdf4]", text: "text-[#15803d]", title: "Graduate Trainee", company: "TU Berlin", period: "Sep 2015 – Apr 2017 (1 year 7 months)", tags: [] },
    ],
    education: { degree: "M.Sc. Electrical Engineering", school: "TU Berlin", period: "2013 – 2015" },
    comments: [
      { initials: "TM", name: "Thomas Muller", tag: "Interview note", tagColor: "bg-[#eff6ff] text-[#1d4ed8]", time: "3 days ago", text: "Had a call with Fahmi. Great communicator, very structured thinking. His grid integration expertise could fill a real gap in the Berlin team. Visa sponsorship is not needed — he's an EU citizen.", likes: 1 },
      { initials: "SK", name: "Sarah Klein", tag: "Neutral", tagColor: "bg-[#f3f4f6] text-[#6b7280]", time: "4 days ago", text: "His power systems background is solid, but he doesn't have direct battery experience. Might need ramp-up time on cell-level topics." },
    ],
  },
  "4": {
    email: "l.weber@volkswagen.de",
    phone: "+49 151 772 3390",
    skills: ["E-Mobility", "EV Drivetrain", "Battery Pack Design", "CATIA V5", "Project Management", "FMEA", "Agile", "SAP", "German (native)", "English (C1)"],
    matchingSkills: ["E-Mobility", "EV Drivetrain", "Battery Pack Design"],
    experience: [
      { letter: "V", bg: "bg-[#e0f2fe]", text: "text-[#0284c7]", title: "E-Mobility Specialist", company: "Volkswagen AG", period: "Feb 2020 – Present (6 years 1 month)", tags: ["E-Mobility", "Battery Pack Design", "CATIA V5"] },
      { letter: "P", bg: "bg-[#fef3c7]", text: "text-[#a16207]", title: "Mechanical Engineer", company: "Porsche AG", period: "Jul 2016 – Jan 2020 (3 years 6 months)", tags: ["EV Drivetrain", "Project Management"] },
    ],
    education: { degree: "Dipl.-Ing. Maschinenbau", school: "TU Dresden", period: "2010 – 2015" },
    comments: [
      { initials: "LB", name: "Lisa Becker", tag: "Positive", tagColor: "bg-[#f0fdf4] text-[#15803d]", time: "5 hours ago", text: "Lena's VW and Porsche background in e-mobility is outstanding. She has exactly the battery pack design skills we need. Salary expectations around 90k — within budget." },
    ],
  },
  "5": {
    email: "t.schafer@bosch.com",
    phone: "+49 160 993 1157",
    skills: ["Battery R&D", "Solid-State Batteries", "Electrochemistry", "Material Science", "Lab Management", "SEM/TEM", "Patent Writing", "R&D Strategy"],
    matchingSkills: ["Battery R&D", "Solid-State Batteries", "Electrochemistry"],
    experience: [
      { letter: "B", bg: "bg-[#e0f2fe]", text: "text-[#0284c7]", title: "R&D Battery Engineer", company: "Bosch", period: "Apr 2019 – Present (6 years 11 months)", tags: ["Battery R&D", "Solid-State Batteries"] },
      { letter: "M", bg: "bg-[#fce7f3]", text: "text-[#be185d]", title: "Materials Researcher", company: "Max Planck Institute", period: "Sep 2016 – Mar 2019 (2 years 6 months)", tags: ["Electrochemistry", "Material Science", "SEM/TEM"] },
    ],
    education: { degree: "Dr. rer. nat. Chemistry", school: "Universitat Stuttgart", period: "2012 – 2016" },
    comments: [
      { initials: "TM", name: "Thomas Muller", tag: "Positive", tagColor: "bg-[#f0fdf4] text-[#15803d]", time: "1 week ago", text: "Tobias published 12 papers on solid-state batteries. His R&D depth is exceptional. He mentioned he wants to move closer to product development — this role could be perfect." },
      { initials: "PK", name: "Polly Korsun", tag: "Question", tagColor: "bg-[#fef3c7] text-[#a16207]", time: "6 days ago", text: "Would he relocate from Stuttgart to Berlin? That's a big move. @Thomas did you get a sense of his flexibility on location?" },
    ],
  },
  "6": {
    email: "a.hoffmann@basf.com",
    phone: "+49 176 440 8823",
    skills: ["Cell Analysis", "Battery Degradation", "Cycling Tests", "Impedance Spectroscopy", "Origin Pro", "Technical Reporting", "ISO 17025", "Six Sigma"],
    matchingSkills: ["Cell Analysis", "Battery Degradation", "Cycling Tests"],
    experience: [
      { letter: "B", bg: "bg-[#e0f2fe]", text: "text-[#0284c7]", title: "Battery Cell Analyst", company: "BASF SE", period: "Jun 2021 – Present (4 years 9 months)", tags: ["Cell Analysis", "Impedance Spectroscopy"] },
      { letter: "E", bg: "bg-[#dcfce7]", text: "text-[#16a34a]", title: "Lab Analyst", company: "Evonik Industries", period: "Jan 2019 – May 2021 (2 years 4 months)", tags: ["Cycling Tests", "Technical Reporting"] },
    ],
    education: { degree: "M.Sc. Materials Science", school: "Universitat Heidelberg", period: "2016 – 2018" },
    comments: [
      { initials: "SK", name: "Sarah Klein", tag: "Neutral", tagColor: "bg-[#f3f4f6] text-[#6b7280]", time: "3 days ago", text: "Anna's analytical skills are strong, but she's more lab-focused. Not sure if she'd be comfortable in a fast-paced product engineering environment. Worth a screening call to understand her expectations." },
    ],
  },
  "7": {
    email: "j.richter@continental.com",
    phone: "+49 511 938 2274",
    skills: ["Mechatronics", "Embedded Systems", "BMS Design", "CAN Bus", "Firmware C/C++", "PCB Layout", "Altium Designer", "DOORS", "V-Model"],
    matchingSkills: ["Mechatronics", "Embedded Systems", "BMS Design"],
    experience: [
      { letter: "C", bg: "bg-[#e0f2fe]", text: "text-[#0284c7]", title: "Mechatronics Engineer", company: "Continental AG", period: "Oct 2018 – Present (7 years 5 months)", tags: ["Mechatronics", "BMS Design", "CAN Bus"] },
      { letter: "H", bg: "bg-[#fef3c7]", text: "text-[#a16207]", title: "Firmware Developer", company: "Hella GmbH", period: "Mar 2015 – Sep 2018 (3 years 6 months)", tags: ["Embedded Systems", "Firmware C/C++"] },
    ],
    education: { degree: "B.Eng. Mechatronics", school: "Leibniz Universitat Hannover", period: "2011 – 2015" },
    comments: [
      { initials: "TM", name: "Thomas Muller", tag: "Positive", tagColor: "bg-[#f0fdf4] text-[#15803d]", time: "2 days ago", text: "Jan's BMS experience at Continental is exactly what we're missing. He's designed battery management systems for production vehicles. Very hands-on engineer.", likes: 2 },
      { initials: "LB", name: "Lisa Becker", tag: "Question", tagColor: "bg-[#fef3c7] text-[#a16207]", time: "1 day ago", text: "His salary at Continental is likely around 80-85k. We could offer 90k+ to make the move attractive. @Polly shall I prepare a compensation package?" },
    ],
  },
  "8": {
    email: "e.braun@varta.com",
    phone: "+49 152 887 4450",
    skills: ["Energy Storage", "Product Management", "Roadmap Planning", "Stakeholder Mgmt", "Jira", "Confluence", "Battery Systems", "Market Analysis", "Scrum"],
    matchingSkills: ["Energy Storage", "Product Management", "Roadmap Planning"],
    experience: [
      { letter: "V", bg: "bg-[#dcfce7]", text: "text-[#16a34a]", title: "Energy Storage PM", company: "Varta AG", period: "May 2020 – Present (5 years 10 months)", tags: ["Energy Storage", "Roadmap Planning", "Stakeholder Mgmt"] },
      { letter: "S", bg: "bg-[#e0f2fe]", text: "text-[#0284c7]", title: "Junior Product Manager", company: "SMA Solar Technology", period: "Aug 2017 – Apr 2020 (2 years 8 months)", tags: ["Product Management", "Market Analysis"] },
    ],
    education: { degree: "M.Sc. Industrial Engineering", school: "KIT Karlsruhe", period: "2014 – 2017" },
    comments: [
      { initials: "PK", name: "Polly Korsun", tag: "Interview note", tagColor: "bg-[#eff6ff] text-[#1d4ed8]", time: "4 days ago", text: "Interesting hybrid profile — technical enough to understand battery systems but with strong PM skills. Could be great for bridging engineering and business teams. Let's set up a call." },
    ],
  },
};

export default function TalentpoolSinglePage() {
  const [commentText, setCommentText] = useState("");
  const [activeCandidate, setActiveCandidate] = useState("1");
  const candidate = sidebarCandidates.find((c) => c.id === activeCandidate)!;
  const detail = candidateDetails[activeCandidate];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(148deg, #f8fafc 0%, #faf5ff 100%)" }}>
      {/* Header bar - full width */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-[#f3f4f6] sticky top-0 z-40">
        <div className="flex items-center justify-between px-8 h-[76px]">
          <div className="flex items-center gap-[8px]">
            <Link href="/talentpool" className="flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b1b1b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </Link>
            <h1 className="text-[18px] font-semibold text-[#1b1b1b]">Battery Engineer Berlin</h1>
            <span className="bg-[#f3efff] text-[#8b5cf6] text-[12px] font-semibold px-[8px] py-[3px] rounded-full">8</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
            </button>
            <button className="w-9 h-9 rounded-[10px] flex items-center justify-center hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
      {/* Left Sidebar - Candidate List */}
      <div className="w-[340px] border-r border-gray-200 bg-white flex flex-col" style={{ height: "calc(100vh - 76px)", position: "sticky", top: "76px" }}>
        {/* Header */}
        <div className="px-[20px] py-[16px] border-b border-[#f0f0f5] flex flex-col gap-[11px]">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-[9px] top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0c4d4" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Refine search..."
              className="w-full pl-[33px] pr-4 py-[11px] rounded-[10px] border border-[#e8e5f0] bg-white text-[14px] placeholder-[#c0c4d4] shadow-[0_2px_12px_rgba(139,92,246,0.04)] focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-[4px] items-center">
            <span className="flex items-center gap-[3px] px-[9px] py-[5px] rounded-[8px] bg-[#faf5ff] border border-[#9333ea] text-[11px] text-[#9333ea]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Berlin, 50 km
              <button className="ml-0.5 hover:text-purple-800">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </span>
            <span className="flex items-center gap-[3px] px-[9px] py-[5px] rounded-[8px] bg-[#ecfdf5] border border-[#16a34a] text-[11px] text-[#16a34a]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
              Battery Engineer
              <button className="ml-0.5 hover:text-green-800">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </span>
            <button className="flex items-center gap-[4px] px-[9px] py-[5px] rounded-[7px] bg-white border border-[#ecedf2] text-[11px] font-medium text-[#5a5e72] hover:border-gray-300">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Experience
            </button>
            <button className="flex items-center gap-[4px] px-[9px] py-[5px] rounded-[7px] bg-white border border-[#ecedf2] text-[11px] font-medium text-[#5a5e72] hover:border-gray-300">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
              Job Title
            </button>
            <button className="px-[4px]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
          </div>
        </div>

        {/* Candidate List */}
        <div className="flex-1 overflow-y-auto">
          {sidebarCandidates.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCandidate(c.id)}
              className={`w-full text-left pl-[16px] pr-[19px] py-[12px] border-b border-[#f0f0f5] hover:bg-purple-50/50 transition-colors ${
                activeCandidate === c.id ? "bg-[#f5f0ff] border-r-[3px] border-r-[#8b5cf6]" : ""
              }`}
            >
              <div className="flex items-start gap-[12px]">
                <div className={`w-[34px] h-[34px] rounded-full ${c.color} flex items-center justify-center text-white text-[13px] font-bold shrink-0`}>
                  {c.initials}
                </div>
                <div className="min-w-0 flex flex-col gap-[4px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[13.5px] font-semibold text-[#1a1a2e] truncate">{c.name}</span>
                    {c.isNew && (
                      <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>
                    )}
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <span className="text-[12.5px] font-medium text-[#6a6e76] truncate">{c.role}</span>
                    <span className="text-[12.5px] text-[#9ca3af] shrink-0">at {c.company}</span>
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" className="shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span className="text-[12.5px] text-[#9ca3af]">{c.location}, Germany</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Main Content - Candidate Detail */}
      <div className="flex-1 overflow-y-auto bg-[#fafafe]">
        {/* Candidate Profile Header */}
        <div className="bg-white border-b border-[#f0f0f5] px-5 pt-5 pb-5 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full ${candidate.color} flex items-center justify-center text-white text-lg font-extrabold`}>
              {candidate.initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold text-[#1a1a2e] tracking-[-0.3px]">{candidate.name}</h2>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                <span className="text-[12.5px] font-semibold text-black">{candidate.role}</span>
                <span className="text-[12.5px] text-[#9ca3af]">at {candidate.company}</span>
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-[12.5px] text-[#9ca3af]">{candidate.location}, Germany</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 bg-[#9333ea] text-white px-3.5 py-[11px] rounded-[9px] text-[13px] font-medium border border-[#9333ea] hover:bg-purple-700 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
              To campaing
            </button>
            <button className="flex items-center gap-1.5 bg-[#faf5ff] text-[#9333ea] px-3.5 py-[11px] rounded-[9px] text-[13px] font-medium border border-[#e9d5ff] hover:bg-purple-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              Comment
            </button>
            <button className="w-[46px] h-[46px] rounded-[9px] border border-[#e4e4e7] bg-[#fafafa] flex items-center justify-center hover:bg-zinc-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="22" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 19c0-2.76 2.24-5 5-5s5 2.24 5 5"/></svg>
            </button>
          </div>
        </div>

        {/* Sections */}
        <div className="p-[20px] flex flex-col gap-[16px]">
          {/* Contacts */}
          <div className="bg-white border-[0.5px] border-[#e5e7eb] rounded-[14px] pt-[18px] pb-[20px] px-[20px]">
            <h3 className="text-[11px] font-semibold text-[#9ca3af] uppercase mb-[14px]">Contacts</h3>
            <div className="flex gap-3">
              <div className="flex-1 bg-[#fafafe] rounded-[10px] px-[14px] pt-[10px] pb-3 flex gap-2.5">
                <svg className="mt-0.5 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0b4c8" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                <div>
                  <p className="text-[10.5px] text-[#b0b4c8]">Email</p>
                  <p className="text-[12.5px] font-medium text-[#1a1a2e]">{detail.email}</p>
                </div>
              </div>
              <div className="flex-1 bg-[#fafafe] rounded-[10px] px-[14px] pt-[10px] pb-3 flex gap-2.5">
                <svg className="mt-0.5 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0b4c8" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0122 16.92z"/></svg>
                <div>
                  <p className="text-[10.5px] text-[#b0b4c8]">Phone</p>
                  <p className="text-[12.5px] font-medium text-[#1a1a2e]">{detail.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border-[0.5px] border-[#e5e7eb] rounded-[14px] pt-[18px] pb-[20px] px-[20px]">
            <h3 className="text-[11px] font-semibold text-[#9ca3af] uppercase mb-[14px]">Skills</h3>
            <div className="flex flex-wrap gap-[8px]">
              {detail.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-[10px] py-[6px] rounded-[7px] text-[12px] font-medium ${
                    detail.matchingSkills.includes(skill)
                      ? "bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]"
                      : "bg-[#f8f7fc] text-[#4b5563] border border-[#e5e7eb]"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white border-[0.5px] border-[#e5e7eb] rounded-[14px] pt-[18px] pb-[20px] px-[20px]">
            <h3 className="text-[11px] font-semibold text-[#9ca3af] uppercase mb-[14px]">Experience</h3>
            <div className="flex flex-col gap-4">
              {detail.experience.map((exp, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-[9px] ${exp.bg} flex items-center justify-center ${exp.text} text-[11px] font-bold shrink-0`}>
                    {exp.letter}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[12.5px]">
                      <span className="font-semibold text-black">{exp.title}</span>
                      <span className="text-[#9ca3af]">at</span>
                      <span className="text-[#7c3aed] font-medium underline cursor-pointer">{exp.company}</span>
                    </div>
                    <p className="text-[11.5px] text-[#9ca3af] mt-1">{exp.period}</p>
                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className={`px-[10px] py-[6px] rounded-[7px] text-[12px] font-medium ${
                            detail.matchingSkills.includes(tag)
                              ? "bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]"
                              : "bg-[#f8f7fc] text-[#4b5563] border border-[#e5e7eb]"
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white border-[0.5px] border-[#e5e7eb] rounded-[14px] pt-[18px] pb-[20px] px-[20px]">
            <h3 className="text-[11px] font-semibold text-[#9ca3af] uppercase mb-[14px]">Education</h3>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-[9px] bg-[#ede9fe] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5"><path d="M22 10l-10-6L2 10l10 6 10-6z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[12.5px]">
                  <span className="font-semibold text-black">{detail.education.degree}</span>
                  <span className="text-[#9ca3af]">at {detail.education.school}</span>
                </div>
                <p className="text-[11.5px] text-[#9ca3af] mt-1">{detail.education.period}</p>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white border-[0.5px] border-[#e5e7eb] rounded-[14px] pt-[18px] pb-[20px] px-[20px]">
          <div className="flex items-center justify-between mb-[14px]">
            <h3 className="text-[11px] font-semibold text-[#9ca3af] uppercase">Comments</h3>
            <span className="text-[12px] font-medium text-[#9ca0b8]">{detail.comments.length} comment{detail.comments.length !== 1 ? "s" : ""}</span>
          </div>

          {/* Comment Input */}
          <div className="flex gap-2.5 mb-[14px]">
            <div className="w-8 h-8 rounded-full bg-[#ecedf2] border border-[#dcdee6] flex items-center justify-center text-[#5a5e72] text-[11px] font-bold shrink-0">
              PK
            </div>
            <div className="flex-1 border border-[#e5e7eb] rounded-[10px] bg-[rgba(249,250,251,0.5)] overflow-hidden">
              <input
                type="text"
                placeholder="Add a comment about this candidate..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full px-[13px] pt-[13px] pb-1 text-[13px] focus:outline-none bg-transparent placeholder:text-[#b8bcd0]"
              />
              <div className="flex items-center justify-between px-[11px] pb-[11px]">
                <div className="flex items-center gap-1.5">
                  <button className="w-[23px] h-[23px] rounded-[7px] flex items-center justify-center hover:bg-gray-100 text-[#b0b4c8]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.49"/></svg>
                  </button>
                  <button className="w-[23px] h-[23px] rounded-[7px] flex items-center justify-center hover:bg-gray-100 text-[#b0b4c8]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  </button>
                  <button className="w-[23px] h-[23px] rounded-[7px] flex items-center justify-center hover:bg-gray-100 text-[#b0b4c8]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
                  </button>
                </div>
                <button className="bg-[#8b5cf6] text-white pl-3 pr-3.5 py-[7px] rounded-[7px] text-[12px] font-semibold hover:bg-purple-700 transition-colors flex items-center gap-[5px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div>
            {detail.comments.map((comment, i) => (
              <div key={i} className={`flex gap-2.5 pt-[14px] ${i > 0 ? "border-t border-[#f0f0f5]" : ""}`}>
                <div className="w-[30px] h-[30px] rounded-full bg-[#ecedf2] border border-[#dcdee6] flex items-center justify-center text-[#5a5e72] text-[10px] font-bold shrink-0">
                  {comment.initials}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[12.5px] font-semibold text-[#1a1a2e]">{comment.name}</span>
                      <span className={`text-[10px] font-semibold px-[7px] py-px rounded-[4px] ${comment.tagColor}`}>
                        {comment.tag}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#c0c4d4]">{comment.time}</span>
                  </div>
                  <p className="text-[12.5px] text-[#4a4e64] leading-[19.375px]">{comment.text}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    {comment.likes !== undefined && (
                      <button className="flex items-center gap-1 text-[11px] font-semibold text-[#8b5cf6] hover:text-purple-700">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/></svg>
                        {comment.likes}
                      </button>
                    )}
                    <button className="flex items-center gap-1 text-[11.5px] font-medium text-[#b0b4c8] hover:text-purple-600">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                      Reply
                    </button>
                  </div>

                  {/* Nested Reply */}
                  {comment.reply && (
                    <div className="flex gap-2.5 mt-3 bg-[#f9fafb] rounded-[10px] px-[14px] pt-3 pb-3">
                      <div className="w-[26px] h-[26px] rounded-full bg-[#ecedf2] border border-[#dcdee6] flex items-center justify-center text-[#5a5e72] text-[9px] font-bold shrink-0">
                        {comment.reply.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[12px] font-semibold text-[#1a1a2e]">{comment.reply.name}</span>
                          <span className="text-[10.5px] text-[#c0c4d4]">{comment.reply.time}</span>
                        </div>
                        <p className="text-[12px] text-[#4a4e64] leading-[18.6px]">{comment.reply.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
