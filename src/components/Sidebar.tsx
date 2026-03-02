"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isCampaigns = pathname.startsWith("/campaigns");
  const isTalentpool = pathname.startsWith("/talentpool");
  const isSettings = pathname.startsWith("/settings");

  return (
    <div className="fixed left-0 top-0 bottom-0 w-20 bg-white border-r border-[#f3f4f6] flex flex-col items-center z-50">
      {/* Logo */}
      <div className="mt-4 mb-8">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M0 14C0 6.26801 6.26801 0 14 0H30C37.732 0 44 6.26801 44 14V30C44 37.732 37.732 44 30 44H14C6.26801 44 0 37.732 0 30V14Z" fill="url(#logo_grad)"/>
          <path d="M20.3901 34.6866C19.6081 36.1575 17.6531 36.1575 16.871 34.6866L8.58569 19.1029C7.80367 17.632 8.7812 15.7935 10.3452 15.7935H26.9159C28.4799 15.7935 29.4575 17.632 28.6755 19.1029L20.3901 34.6866Z" fill="#EBE3F5"/>
          <path d="M26.0458 32.7312C25.1366 34.4229 22.8633 34.4229 21.9539 32.7312L12.3199 14.8066C11.4106 13.1148 12.5473 11 14.3659 11H33.634C35.4525 11 36.5891 13.1148 35.6799 14.8066L26.0458 32.7312Z" fill="white"/>
          <defs>
            <linearGradient id="logo_grad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6"/>
              <stop offset="1" stopColor="#7C3AED"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <Link
          href="/campaigns"
          className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
            isCampaigns ? "bg-[#f3e8ff]" : "hover:bg-gray-100"
          }`}
          title="Campaigns"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3.33336 16.6666H16.6667C17.1087 16.6666 17.5326 16.4911 17.8452 16.1785C18.1577 15.866 18.3333 15.442 18.3333 15V6.66666C18.3333 6.22464 18.1577 5.80071 17.8452 5.48815C17.5326 5.1756 17.1087 5 16.6667 5H10.0584C9.78385 4.99858 9.51394 4.92937 9.27261 4.79854C9.03127 4.66769 8.826 4.47926 8.67502 4.25L7.99169 3.25C7.84071 3.02074 7.63544 2.83231 7.39411 2.70146C7.15279 2.57063 6.88287 2.50142 6.60836 2.5H3.33336C2.89134 2.5 2.46741 2.6756 2.15485 2.98815C1.84229 3.30071 1.66669 3.72464 1.66669 4.16666V15C1.66669 15.9166 2.41669 16.6666 3.33336 16.6666Z" stroke={isCampaigns ? "#9333EA" : "#6b7280"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9.58334" cy="10.4168" r="2.0833" stroke={isCampaigns ? "#9333EA" : "#6b7280"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.0583 11.8916L12.5 13.3333" stroke={isCampaigns ? "#9333EA" : "#6b7280"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <Link
          href="/talentpool"
          className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
            isTalentpool ? "bg-[#f3e8ff]" : "hover:bg-gray-100"
          }`}
          title="Talentpool"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13.3333 17.5V15.8334C13.3333 14.9493 12.9822 14.1014 12.357 13.4763C11.7319 12.8513 10.8841 12.5 10 12.5H5.00002C4.11597 12.5 3.26812 12.8513 2.643 13.4763C2.01789 14.1014 1.66669 14.9493 1.66669 15.8334V17.5" stroke={isTalentpool ? "#9333EA" : "#9CA3AF"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.50002 9.16666C9.34097 9.16666 10.8334 7.67429 10.8334 5.83334C10.8334 3.99239 9.34097 2.5 7.50002 2.5C5.65907 2.5 4.16669 3.99239 4.16669 5.83334C4.16669 7.67429 5.65907 9.16666 7.50002 9.16666Z" stroke={isTalentpool ? "#9333EA" : "#9CA3AF"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 17.5V15.8334C18.3328 15.0948 18.0869 14.3774 17.6344 13.7936C17.1819 13.2099 16.5484 12.793 15.8333 12.6084" stroke={isTalentpool ? "#9333EA" : "#9CA3AF"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 2.6084C14.0503 2.79199 14.6859 3.20899 15.1396 3.79366C15.5935 4.37834 15.8399 5.09742 15.8399 5.83756C15.8399 6.57771 15.5935 7.2968 15.1396 7.88147C14.6859 8.46615 14.0503 8.88315 13.3333 9.06674" stroke={isTalentpool ? "#9333EA" : "#9CA3AF"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <button
          className="w-10 h-10 rounded-[10px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          title="Messages"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 12a9 9 0 01-9 9 8.96 8.96 0 01-4.45-1.18L3 21l1.18-4.55A8.96 8.96 0 013 12a9 9 0 019-9 9 9 0 019 9z" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8.5" cy="12" r="0.75" fill="#6b7280"/><circle cx="12" cy="12" r="0.75" fill="#6b7280"/><circle cx="15.5" cy="12" r="0.75" fill="#6b7280"/>
          </svg>
        </button>
      </nav>

      {/* Settings at bottom */}
      <div className="mt-auto mb-4">
        <Link
          href="/settings"
          className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
            isSettings ? "bg-[#f3e8ff]" : "hover:bg-gray-100"
          }`}
          title="Settings"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="2.5" stroke={isSettings ? "#9333EA" : "#6b7280"} strokeWidth="1.5"/>
            <path d="M16.17 12.5a1.39 1.39 0 00.28 1.53l.05.05a1.68 1.68 0 11-2.38 2.38l-.05-.05a1.39 1.39 0 00-1.53-.28 1.39 1.39 0 00-.84 1.27v.15a1.68 1.68 0 11-3.37 0v-.08a1.39 1.39 0 00-.91-1.27 1.39 1.39 0 00-1.53.28l-.05.05a1.68 1.68 0 11-2.38-2.38l.05-.05a1.39 1.39 0 00.28-1.53 1.39 1.39 0 00-1.27-.84h-.15a1.68 1.68 0 010-3.37h.08a1.39 1.39 0 001.27-.91 1.39 1.39 0 00-.28-1.53l-.05-.05a1.68 1.68 0 112.38-2.38l.05.05a1.39 1.39 0 001.53.28h.07a1.39 1.39 0 00.84-1.27v-.15a1.68 1.68 0 113.37 0v.08a1.39 1.39 0 00.84 1.27 1.39 1.39 0 001.53-.28l.05-.05a1.68 1.68 0 112.38 2.38l-.05.05a1.39 1.39 0 00-.28 1.53v.07a1.39 1.39 0 001.27.84h.15a1.68 1.68 0 010 3.37h-.08a1.39 1.39 0 00-1.27.84z" stroke={isSettings ? "#9333EA" : "#6b7280"} strokeWidth="1.5"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
