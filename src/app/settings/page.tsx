"use client";

import { useState } from "react";

const settingsNav = [
  {
    label: "Profile",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#6b7080"} strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    label: "Notifications",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#6b7080"} strokeWidth="1.5">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Security",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#6b7080"} strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
  {
    label: "Team",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#6b7080"} strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Billing",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#6b7080"} strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    label: "Privacy",
    icon: (active: boolean) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#6b7080"} strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const notifications = [
  { label: "Always inform about new comments and replies", icons: 2 },
  { label: "Always inform about new reactions", icons: 1 },
  { label: "Always inform about mentioning me", icons: 1 },
  { label: "Always inform about new files", icons: 1 },
  { label: "Always inform about new meeting notes", icons: 1 },
  { label: "Always inform when new applicant is added to campaign", icons: 1 },
  { label: "Always inform when new candidate is added to campaign", icons: 1 },
  { label: "Always inform about proposal activity (published, accepted, rejected)", icons: 1 },
];

const notificationIcons = [
  // comments
  <svg key="comments" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  // reply
  <svg key="reply" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v4m-4 4l-4 4m0 0l-4-4m4 4V9"/></svg>,
  // reactions
  <svg key="reactions" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>,
  // mention
  <svg key="mention" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"/></svg>,
  // files
  <svg key="files" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
  // meeting
  <svg key="meeting" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  // applicant
  <svg key="applicant" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  // candidate
  <svg key="candidate" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  // proposal
  <svg key="proposal" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notifStates, setNotifStates] = useState<boolean[]>(notifications.map(() => true));
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [zenZone, setZenZone] = useState(false);
  const [dailyDigest, setDailyDigest] = useState(true);
  const [appearance, setAppearance] = useState<"light" | "dark">("light");

  const toggleNotif = (i: number) => {
    setNotifStates((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb]">
      {/* Header */}
      <div className="bg-[rgba(255,255,255,0.8)] backdrop-blur-sm border-b border-[#f3f4f6] sticky top-0 z-40">
        <div className="flex items-center justify-between px-8 h-[76px]">
          <h1 className="text-[18px] font-semibold text-[#1b1b1b]">Settings</h1>
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

      <div className="flex h-[calc(100vh-76px)]">
        {/* Settings Left Nav */}
        <div className="w-[230px] bg-white border-r border-[#eeeff2] shrink-0 py-[28px] px-[14px]">
          <div className="flex flex-col gap-1">
            {settingsNav.map((item) => {
              const isActive = item.label === activeTab;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={`flex items-center gap-3 h-10 px-[14px] rounded-[10px] text-[13.5px] transition-colors w-full text-left ${
                    isActive
                      ? "bg-[#f5f3ff] font-semibold text-[#7c3aed]"
                      : "font-medium text-[#5a5f72] hover:bg-gray-50"
                  }`}
                >
                  {item.icon(isActive)}
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-12 py-9">
          <h1 className="text-[22px] font-bold text-[#1a1a2e] mb-1">Profile page</h1>
          <p className="text-[13.5px] text-[#9ca0b0] leading-[20px] max-w-[711px] mb-10">
            This is your personal control center. Update your info, tweak your preferences, and make sure everything works just the way you like it.
          </p>

          {/* Profile Information */}
          <div className="mb-10">
            <h2 className="text-[15px] font-bold text-[#1a1a2e] mb-1.5">Your profile information</h2>
            <div className="flex gap-9 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-[#f0ecff] border-2 border-[#c4b5fd] flex items-center justify-center">
                  <span className="text-[24px] font-bold text-[#7c3aed]">PK</span>
                </div>
                <button className="text-[12px] font-medium text-[#7c3aed]">Change photo</button>
              </div>

              {/* Fields */}
              <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-4">
                <div>
                  <label className="text-[12px] font-medium text-[#6b7080] block mb-1.5">First name</label>
                  <input
                    type="text"
                    defaultValue="Polly"
                    className="w-full h-[39px] px-[14px] rounded-[10px] border border-[#e5e7eb] bg-white text-[14px] text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#6b7080] block mb-1.5">Last name</label>
                  <input
                    type="text"
                    defaultValue="Korsun"
                    className="w-full h-[39px] px-[14px] rounded-[10px] border border-[#e5e7eb] bg-white text-[14px] text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#6b7080] block mb-1.5">E-mail address</label>
                  <input
                    type="email"
                    defaultValue="polly.korsun@headfound.com"
                    readOnly
                    className="w-full h-[39px] px-[14px] rounded-[10px] border border-[#e5e7eb] bg-[#f8f8fb] text-[14px] text-[#9ca0b0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-[#6b7080] block mb-1.5">Phone number</label>
                  <input
                    type="tel"
                    defaultValue="+49 176 8294 1053"
                    className="w-full h-[39px] px-[14px] rounded-[10px] border border-[#e5e7eb] bg-white text-[14px] text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Password Settings */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
              <h2 className="text-[15px] font-bold text-[#1a1a2e]">Password settings</h2>
              <span className="inline-flex items-center gap-1 bg-[#dcfce7] rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-[#15803d]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Password enabled
              </span>
            </div>
            <p className="text-[13px] text-[#9ca0b0] leading-[20px] mb-4">
              Update your password. Your existing password will be replaced.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-[724px] mb-4">
              <div>
                <label className="text-[12px] font-medium text-[#6b7080] block mb-1.5">New password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-[39px] px-[14px] pr-[40px] rounded-[10px] border border-[#e5e7eb] bg-white text-[14px] text-[#1a1a2e] placeholder-[#757575] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca0b0] hover:text-[#6b7080]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {showPassword ? (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </>
                      ) : (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label className="text-[12px] font-medium text-[#6b7080] block mb-1.5">Confirm password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full h-[39px] px-[14px] pr-[40px] rounded-[10px] border border-[#e5e7eb] bg-white text-[14px] text-[#1a1a2e] placeholder-[#757575] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400"
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca0b0] hover:text-[#6b7080]"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {showConfirmPassword ? (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </>
                      ) : (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button className="bg-[#7c3aed] text-white text-[13px] font-semibold px-5 py-2.5 rounded-[10px] hover:bg-[#6d28d9] transition-colors">
              Update password
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#eeeff2] max-w-[724px] mb-8" />

          {/* Notifications */}
          <div className="mb-10 max-w-[724px]">
            <h2 className="text-[15px] font-bold text-[#1a1a2e] mb-1">Notifications</h2>
            <p className="text-[13px] text-[#9ca0b0] leading-[20px] mb-5">
              Choose which notifications appear in the app. These also build your{" "}
              <span className="font-bold">Daily Digest</span> email. If you turn off all notifications,{" "}
              <span className="font-bold">Zen Zone</span> mode activates automatically.
            </p>

            <div className="flex flex-col gap-0.5">
              {notifications.map((notif, i) => (
                <div
                  key={i}
                  className={`flex items-center h-[54px] px-4 rounded-[12px] ${
                    i % 2 === 0 ? "bg-[#faf9fd]" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mr-2.5">
                    {i === 0 ? (
                      <>
                        <div className="w-[26px] h-[26px] rounded-[7px] bg-[#f0ecff] flex items-center justify-center">
                          {notificationIcons[0]}
                        </div>
                        <div className="w-[26px] h-[26px] rounded-[7px] bg-[#f0ecff] flex items-center justify-center">
                          {notificationIcons[1]}
                        </div>
                      </>
                    ) : (
                      <div className="w-[26px] h-[26px] rounded-[7px] bg-[#f0ecff] flex items-center justify-center">
                        {notificationIcons[i + 1]}
                      </div>
                    )}
                  </div>
                  <span className="text-[13.5px] text-[#1a1a2e] flex-1">{notif.label}</span>
                  <button
                    onClick={() => toggleNotif(i)}
                    className={`w-[22px] h-[22px] rounded-[6px] flex items-center justify-center transition-colors ${
                      notifStates[i] ? "bg-[#7c3aed]" : "bg-[#d1d5db]"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Toggle sections */}
          <div className="max-w-[724px] mb-10">
            {/* Email alerts */}
            <div className="flex items-center gap-4 py-5">
              <button
                onClick={() => setEmailAlerts(!emailAlerts)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  emailAlerts ? "bg-[#7c3aed]" : "bg-[#d1d5db]"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    emailAlerts ? "left-[22px]" : "left-[2px]"
                  }`}
                />
              </button>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#1a1a2e]">Email alerts</p>
                <p className="text-[13px] text-[#9ca0b0] leading-[19.5px] max-w-[500px] mt-0.5">
                  New proposals or updates to existing ones will automatically land in your inbox. Stay up to date even when you&apos;re not on the platform.
                </p>
              </div>
            </div>

            {/* Zen Zone */}
            <div className="flex items-center gap-4 py-5 border-t border-[#f3f4f6]">
              <button
                onClick={() => setZenZone(!zenZone)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  zenZone ? "bg-[#7c3aed]" : "bg-[#d1d5db]"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    zenZone ? "left-[22px]" : "left-[2px]"
                  }`}
                />
              </button>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#1a1a2e]">Zen Zone</p>
                <p className="text-[13px] text-[#9ca0b0] leading-[19.5px] max-w-[500px] mt-0.5">
                  Total peace. No notifications, no emails, no Daily digests. Your settings will be saved and restored if you switch back.
                </p>
                <p className="text-[12px] text-[#d97706] leading-[16.8px] mt-1.5">
                  Remember: missed notifications won&apos;t be stored, so they&apos;re gone for good.
                </p>
              </div>
            </div>

            {/* Daily digest */}
            <div className="flex items-center gap-4 py-5 border-t border-[#f3f4f6]">
              <button
                onClick={() => setDailyDigest(!dailyDigest)}
                className={`w-[44px] h-[24px] rounded-full relative transition-colors ${
                  dailyDigest ? "bg-[#7c3aed]" : "bg-[#d1d5db]"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    dailyDigest ? "left-[22px]" : "left-[2px]"
                  }`}
                />
              </button>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#1a1a2e]">Daily digest</p>
                <p className="text-[13px] text-[#9ca0b0] leading-[19.5px] max-w-[500px] mt-0.5">
                  Get a single email every morning with a summary of all your unread notifications and messages, built based on your selected preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Interface language & Appearance */}
          <div className="max-w-[724px] mb-16">
            <div className="flex items-center gap-4 py-5">
              <span className="text-[14px] font-semibold text-[#1a1a2e] w-[140px] shrink-0">Interface language</span>
              <select className="h-[33.5px] px-3 rounded-[8px] border border-[#e5e7eb] bg-white text-[13px] text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-purple-200">
                <option>EN</option>
                <option>DE</option>
                <option>FR</option>
                <option>NL</option>
              </select>
            </div>

            <div className="flex items-center gap-4 py-5 border-t border-[#f3f4f6]">
              <span className="text-[14px] font-semibold text-[#1a1a2e] w-[140px] shrink-0">Appearance</span>
              <div className="bg-[#f0f0f5] rounded-[10px] p-[3px] flex">
                <button
                  onClick={() => setAppearance("dark")}
                  className={`flex items-center gap-1.5 px-4 h-[29px] rounded-[8px] text-[12.5px] transition-all ${
                    appearance === "dark"
                      ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-semibold text-[#1a1a2e]"
                      : "font-medium text-[#9ca0b0]"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                  </svg>
                  Dark
                </button>
                <button
                  onClick={() => setAppearance("light")}
                  className={`flex items-center gap-1.5 px-4 h-[29px] rounded-[8px] text-[12.5px] transition-all ${
                    appearance === "light"
                      ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-semibold text-[#1a1a2e]"
                      : "font-medium text-[#9ca0b0]"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                  Light
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
