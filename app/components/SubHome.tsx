//app/components/SubHome.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  "./resume.css"

import ProfileSidebar from './ProfileSidebar';
import ExperiencePanel from './ExperiencePanel';

export default function SubHome() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="resume-root">
      <div className="resume-layout">
        <ProfileSidebar />
        <ExperiencePanel />
      </div>
    </div>
  );
}
