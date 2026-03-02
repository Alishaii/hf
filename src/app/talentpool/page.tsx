"use client";

import Link from "next/link";
import { useState } from "react";

const searchResults = [
  {
    id: "1",
    initials: "MK",
    color: "bg-purple-600",
    name: "Markus Kruger",
    linkedin: true,
    location: "Berlin, Germany",
    role: "Senior Battery Engineer",
    company: "BMW Group",
    email: "m.kruger@bmw.de",
    phone: "+49 172 883 4109",
    skills: ["Battery Engineering", "Elektrotechnik", "Li-Ion Cells", "Circuit Design", "Power Electronics"],
    moreSkills: 5,
    current: { letter: "B", color: "bg-blue-600", title: "Senior Battery Engineer", company: "BMW Group", link: true, period: "Mar 2019 – Present (6 years 11 months)" },
    past: { letter: "S", color: "bg-red-600", title: "Electrical Engineer", company: "Siemens AG", link: true, period: "Jun 2015 – Feb 2019 (3 years 8 months)" },
    moreExp: 3,
    education: { title: "M.Sc. Elektrotechnik", school: "TU Berlin", link: true, period: "2011 – 2013" },
  },
  {
    id: "2",
    initials: "SN",
    color: "bg-green-600",
    name: "Sophie Neumann",
    linkedin: true,
    location: "Potsdam, Germany",
    role: "Battery Test Engineer",
    company: "BMW Group",
    email: "m.kruger@bmw.de",
    phone: "+49 172 883 4109",
    skills: ["Battery Engineering", "Li-Ion Cells", "Communication", "Circuit Design", "Power Electronics"],
    moreSkills: 3,
    current: { letter: "C", color: "bg-orange-600", title: "Battery Test Engineer", company: "CATL Europe", link: true, period: "Jun 2021 - Present (4 years 8 months)" },
    past: { letter: "V", color: "bg-purple-700", title: "Junior Engineer, Battery Lab", company: "Volkswagen AG", link: true, period: "Sep 2018 – May 2021 (2 years 8 months)" },
    moreExp: 1,
    education: { title: "B.Sc. Electrical Engineering", school: "Universitat Potsdam", link: true, period: "2015 – 2018" },
  },
  {
    id: "3",
    initials: "FC",
    color: "bg-violet-600",
    name: "Fahmi Chamakh",
    linkedin: true,
    location: "Berlin, Germany",
    role: "Power Systems Engineer",
    company: "BMW Group",
    email: "m.kruger@bmw.de",
    phone: "+49 172 883 4109",
    skills: ["Elektrotechnik", "Li-Ion Cells", "High Voltage Safety", "Circuit Design", "MATLAB/Simulink"],
    moreSkills: 3,
    current: { letter: "C", color: "bg-orange-600", title: "Power Systems Engineer", company: "Siemens Energy", link: true, period: "Jun 2021 - Present (4 years 8 months)" },
    past: { letter: "V", color: "bg-purple-700", title: "Junior Engineer, Battery Lab", company: "Volkswagen AG", link: true, period: "Sep 2018 – May 2021 (2 years 8 months)" },
    moreExp: 1,
    education: { title: "B.Sc. Electrical Engineering", school: "Universitat Potsdam", link: true, period: "2015 – 2018" },
  },
  {
    id: "4",
    initials: "LW",
    color: "bg-teal-600",
    name: "Lena Weber",
    linkedin: true,
    location: "Dresden, Germany",
    role: "E-Mobility Specialist",
    company: "BMW Group",
    email: "m.kruger@bmw.de",
    phone: "+49 172 883 4109",
    skills: ["Battery Engineering", "Elektrotechnik", "Communication", "High Voltage Safety", "Power Electronics"],
    moreSkills: 3,
    current: null,
    past: null,
    moreExp: 0,
    education: null,
  },
];

const filterTags = ["Job Title", "Experience", "Skills", "Company", "Updated"];

const recentSearches = [
  "Cloud Architect, Berlin",
  "Sales Manager DACH",
  "React Developer",
];

export default function TalentpoolPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [viewMode, setViewMode] = useState<"expanded" | "compact">("expanded");
  const [activeChips, setActiveChips] = useState<{ job: boolean; location: boolean }>({ job: true, location: true });
  const [selectedCountry, setSelectedCountry] = useState("Germany");
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const countryCities: Record<string, string[]> = {
    Germany: ["Berlin", "Munich", "Hamburg", "Stuttgart", "Frankfurt", "Cologne", "Dusseldorf", "Bonn", "Hannover", "Dresden"],
    Austria: ["Vienna", "Graz", "Salzburg", "Linz", "Innsbruck"],
    Switzerland: ["Zurich", "Geneva", "Basel", "Bern", "Lausanne"],
    Netherlands: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
    France: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
  };
  const countries = Object.keys(countryCities);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
      setActiveChips({ job: true, location: true });
    }
  };

  const handleRecentSearch = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
    setActiveChips({ job: true, location: true });
  };

  return (
    <div className="min-h-screen" onClick={() => { setShowCountryDropdown(false); setShowCityDropdown(false); }} style={{ background: "linear-gradient(148deg, #f8fafc 0%, #faf5ff 100%)" }}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-8 h-[76px]">
          <h1 className="text-lg font-semibold text-gray-900">Talentpool</h1>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
            </button>
            <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Purple Banner */}
      <div className="mx-0 bg-gradient-to-r from-violet-500 to-purple-700 px-16 pt-10 pb-20">
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-6">
            <div>
              <p className="text-purple-100 text-[11px] font-semibold uppercase tracking-[1.2px] mb-1.5">Talentpool</p>
              <p className="text-white text-2xl font-extrabold leading-tight tracking-tight">
                Find your next<br />great hire
              </p>
            </div>
            <p className="text-sm pb-0.5 max-w-[300px]">
              <span className="text-white font-semibold">AI-powered search</span>
              <span className="text-purple-200"> across your entire candidate database. Faster, smarter, more accurate.</span>
            </p>
          </div>
          <button className="flex items-center gap-2 bg-purple-50 text-purple-600 font-semibold text-sm px-4 py-3 rounded-[10px] shadow-sm hover:bg-purple-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8zM20 8v6M23 11h-6"/></svg>
            Add candidate
          </button>
        </div>
      </div>

      {/* Search Card */}
      <div className="mx-10 -mt-12 bg-white rounded-2xl border border-gray-200 shadow-[0_1px_15px_rgba(35,17,41,0.05)] p-6">
        <p className="text-xl font-semibold text-zinc-900 tracking-tight mb-3 px-2.5">
          Hello, who are you looking for?
        </p>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name, skills, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full pl-14 pr-10 py-4 rounded-[14px] border border-gray-200 shadow-[0_1px_15px_rgba(35,17,41,0.03)] text-[15px] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); setHasSearched(false); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
              </button>
            )}
          </div>
          {!hasSearched && (
            <>
              {/* Country dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCityDropdown(false); }}
                  className="flex items-center justify-between gap-2 px-[18px] py-4 rounded-[14px] border-[0.5px] border-[#e5e7eb] shadow-[0_1px_15px_rgba(35,17,41,0.03)] bg-white min-w-[150px]"
                >
                  <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                    <span className="text-sm font-semibold text-[#52525b]">{selectedCountry}</span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {showCountryDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-xl border border-gray-200 shadow-lg z-50 py-1 max-h-[240px] overflow-y-auto">
                    {countries.map((country) => (
                      <button
                        key={country}
                        onClick={() => { setSelectedCountry(country); setSelectedCity(countryCities[country][0]); setShowCountryDropdown(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${selectedCountry === country ? "text-purple-600 font-semibold bg-purple-50/50" : "text-gray-700"}`}
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* City dropdown */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => { setShowCityDropdown(!showCityDropdown); setShowCountryDropdown(false); }}
                  className="flex items-center justify-between gap-2 px-[18px] py-4 rounded-[14px] border-[0.5px] border-[#e5e7eb] shadow-[0_1px_15px_rgba(35,17,41,0.03)] bg-white min-w-[150px]"
                >
                  <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span className="text-sm font-semibold text-[#52525b]">{selectedCity}</span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                {showCityDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-xl border border-gray-200 shadow-lg z-50 py-1 max-h-[240px] overflow-y-auto">
                    {countryCities[selectedCountry].map((city) => (
                      <button
                        key={city}
                        onClick={() => { setSelectedCity(city); setShowCityDropdown(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors ${selectedCity === city ? "text-purple-600 font-semibold bg-purple-50/50" : "text-gray-700"}`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Radius dropdown */}
              <div className="relative">
                <select className="appearance-none pl-5 pr-10 py-4 rounded-[14px] border-[0.5px] border-[#e5e7eb] shadow-[0_1px_15px_rgba(35,17,41,0.03)] text-sm font-semibold text-[#52525b] focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white">
                  <option>+ 50 km</option>
                  <option>+ 25 km</option>
                  <option>+ 100 km</option>
                  <option>+ 200 km</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </>
          )}
          <button
            onClick={handleSearch}
            className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-[0_4px_14px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)] transition-shadow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
        </div>

        {/* Filter tags */}
        <div className="flex items-center gap-2 mt-3.5">
          <span className="text-[12px] font-medium text-[#9ca3af]">Filter by</span>
          <div className="flex items-center gap-2">
            {hasSearched && activeChips.job && (
              <span className="flex items-center gap-1 px-[13px] py-[8.5px] rounded-[10px] bg-[#ecfdf5] border border-[#16a34a] text-[12.5px] text-[#16a34a]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                Battery Engineer
                <button onClick={(e) => { e.stopPropagation(); setActiveChips((prev) => ({ ...prev, job: false })); }} className="ml-0.5 hover:text-green-800">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </span>
            )}
            {hasSearched && activeChips.location && (
              <span className="flex items-center gap-1 px-[13px] py-[8.5px] rounded-[10px] bg-[#faf5ff] border border-[#9333ea] text-[12.5px] text-[#9333ea]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Berlin, 50 km
                <button onClick={(e) => { e.stopPropagation(); setActiveChips((prev) => ({ ...prev, location: false })); }} className="ml-0.5 hover:text-purple-800">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </span>
            )}
            {filterTags.map((tag) => (
              <button
                key={tag}
                className="flex items-center gap-1.5 px-[13px] py-[8.5px] rounded-[9px] bg-white border border-[#ecedf2] text-[12.5px] font-medium text-[#5a5e72] hover:border-gray-300 transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {tag === "Job Title" && <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></>}
                  {tag === "Experience" && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                  {tag === "Skills" && <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></>}
                  {tag === "Company" && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></>}
                  {tag === "Updated" && <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>}
                </svg>
                {tag}
              </button>
            ))}
          </div>
          {hasSearched && (activeChips.job || activeChips.location) && (
            <button
              onClick={() => setActiveChips({ job: false, location: false })}
              className="text-[12px] text-[#9ca0b0] hover:text-gray-600"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {!hasSearched ? (
        /* Empty State */
        <div className="flex flex-col items-center pt-12 pb-16">
          <div className="relative w-[180px] h-[140px] mb-4">
            <div className="absolute left-[30px] top-[10px] w-[120px] h-[120px] rounded-[60px] bg-gradient-to-br from-purple-50 to-purple-100" />
            <div className="absolute left-0 top-[60px] w-[60px] h-[60px] rounded-[30px] bg-gradient-to-br from-yellow-50 to-yellow-200 opacity-50" />
            <div className="absolute right-[4px] top-[20px] w-[40px] h-[40px] rounded-[20px] bg-gradient-to-br from-blue-50 to-blue-200 opacity-50" />
            <div className="absolute left-1/2 top-[44px] -translate-x-1/2 w-[52px] h-[52px] rounded-full bg-white shadow-[0_8px_24px_rgba(139,92,246,0.12)] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M8.5 11a4 4 0 100-8 4 4 0 000 8z"/>
                <path d="M20 8v6M23 11h-6"/>
              </svg>
            </div>
          </div>
          <p className="text-lg font-bold text-zinc-900 tracking-tight mb-2.5">
            Ready to find your Perfect match?
          </p>
          <p className="text-sm text-gray-400 text-center max-w-[428px] leading-relaxed">
            Enter a keyword above to discover candidates. Our AI will match the best profiles from{" "}
            <span className="font-semibold text-gray-500">100K+ candidates</span> in the Talentpool
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">
              Recent searches
            </p>
            <div className="flex gap-2.5">
              {recentSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleRecentSearch(search)}
                  className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-purple-50/70 text-purple-500 text-sm hover:bg-purple-100 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Search Results */
        <div className="px-10 py-6">
          <div className="flex flex-col gap-[4px] pt-[4px] mb-6">
            <div className="flex items-center justify-center gap-4">
              <p className="text-[13px] text-[#6b7080]">Were these results helpful?</p>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 w-[100px] justify-center bg-white border-[0.5px] border-[#e5e7eb] rounded-[8px] px-[15px] py-[8px] text-[13px] text-[#6b7280] hover:bg-gray-50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
                  Yes
                </button>
                <button className="flex items-center gap-1 w-[100px] justify-center bg-white border-[0.5px] border-[#e5e7eb] rounded-[8px] px-[15px] py-[8px] text-[13px] text-[#6b7280] hover:bg-gray-50 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 15V19a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10zM17 2h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"/></svg>
                  No
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <span className="text-[14px] text-[#6b7080]">Results</span>
                <span className="bg-[#f3efff] text-[#8b5cf6] text-[12px] font-semibold px-[8px] py-[2px] rounded-full">9</span>
              </div>
              <div className="flex border-[0.5px] border-[#e6e1f4] rounded-[8px] overflow-hidden">
                <button
                  onClick={() => setViewMode("expanded")}
                  className={`w-[34px] h-[30px] flex items-center justify-center ${viewMode === "expanded" ? "bg-[#f3efff]" : "bg-white"}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={viewMode === "expanded" ? "#7c3aed" : "#9ca3af"} strokeWidth="2" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3.5" cy="6" r="0.5" fill={viewMode === "expanded" ? "#7c3aed" : "#9ca3af"} stroke="none"/><circle cx="3.5" cy="12" r="0.5" fill={viewMode === "expanded" ? "#7c3aed" : "#9ca3af"} stroke="none"/><circle cx="3.5" cy="18" r="0.5" fill={viewMode === "expanded" ? "#7c3aed" : "#9ca3af"} stroke="none"/></svg>
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`w-[34px] h-[30px] flex items-center justify-center ${viewMode === "compact" ? "bg-[#f3efff]" : "bg-white"}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={viewMode === "compact" ? "#7c3aed" : "#9ca3af"} strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><line x1="14" y1="4" x2="21" y2="4"/><line x1="14" y1="9" x2="21" y2="9"/><line x1="14" y1="15" x2="21" y2="15"/><line x1="14" y1="20" x2="21" y2="20"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {searchResults.map((candidate) => (
              <Link
                key={candidate.id}
                href={`/talentpool/${candidate.id}`}
                className="block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-purple-100 transition-all"
              >
                {/* Candidate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full ${candidate.color} flex items-center justify-center text-white text-sm font-semibold shrink-0`}>
                      {candidate.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">{candidate.name}</span>
                        {candidate.linkedin && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mt-0.5">
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          {candidate.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                          <span className="font-medium text-gray-700">{candidate.role}</span> at {candidate.company}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
                    <button className="flex items-center gap-1.5 bg-purple-600 text-white px-3 py-2.5 rounded-[9px] text-[13px] font-medium border border-purple-600 hover:bg-purple-700 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                      To campaing
                    </button>
                    <button className="flex items-center gap-1.5 bg-purple-50 text-purple-600 px-3 py-2.5 rounded-[9px] text-[13px] font-medium border border-purple-200 hover:bg-purple-100 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                      Comment
                    </button>
                    <button className="flex items-center gap-1.5 bg-zinc-50 text-gray-500 px-3 py-2.5 rounded-[9px] text-[13px] font-medium border border-zinc-200 hover:bg-zinc-100 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="12" y1="11" x2="16" y2="11"/><line x1="12" y1="16" x2="16" y2="16"/><circle cx="9" cy="11" r="0.5" fill="currentColor"/><circle cx="9" cy="16" r="0.5" fill="currentColor"/></svg>
                      CV
                    </button>
                    <button className="w-[46px] h-[46px] rounded-[9px] border border-zinc-200 bg-zinc-50 flex items-center justify-center hover:bg-zinc-100 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="22" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 19c0-2.76 2.24-5 5-5s5 2.24 5 5"/></svg>
                    </button>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-[6px] mb-4">
                  {candidate.skills.map((skill, j) => (
                    <span
                      key={j}
                      className={`px-[9px] py-[5px] rounded-[6px] text-[10.5px] font-medium border ${
                        j < 3 && activeChips.job
                          ? "bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0]"
                          : "bg-[#f8f7fc] text-[#6b7280] border-[#e5e7eb]"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {candidate.moreSkills > 0 && (
                    <span className="text-[10.5px] font-medium text-[#6b7280]">+{candidate.moreSkills}</span>
                  )}
                </div>

                {/* Contact info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                    {candidate.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0122 16.92z"/></svg>
                    {candidate.phone}
                  </span>
                </div>

                {/* Experience */}
                {viewMode === "expanded" && candidate.current && (
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-gray-400 w-14 pt-0.5">Current</span>
                      <div className={`w-5 h-5 rounded ${candidate.current.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                        {candidate.current.letter}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{candidate.current.title}</span>
                        <span className="text-gray-400"> at </span>
                        <span className="text-purple-600 font-medium">{candidate.current.company}</span>
                        <span className="text-gray-400 ml-2">{candidate.current.period}</span>
                      </div>
                    </div>
                    {candidate.past && (
                      <div className="flex items-start gap-3">
                        <span className="text-xs text-gray-400 w-14 pt-0.5">Past</span>
                        <div className={`w-5 h-5 rounded ${candidate.past.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                          {candidate.past.letter}
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">{candidate.past.title}</span>
                          <span className="text-gray-400"> at </span>
                          <span className="text-purple-600 font-medium">{candidate.past.company}</span>
                          <span className="text-gray-400 ml-2">{candidate.past.period}</span>
                        </div>
                      </div>
                    )}
                    {candidate.moreExp > 0 && (
                      <button className="ml-[68px] text-purple-600 text-xs font-medium flex items-center gap-1">
                        {candidate.moreExp} More <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                      </button>
                    )}
                    {candidate.education && (
                      <div className="flex items-start gap-3">
                        <span className="text-xs text-gray-400 w-14 pt-0.5">Education</span>
                        <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-white text-[10px] shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z"/></svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">{candidate.education.title}</span>
                          <span className="text-gray-400"> at </span>
                          <span className="text-purple-600 font-medium">{candidate.education.school}</span>
                          <span className="text-gray-400 ml-2">{candidate.education.period}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
