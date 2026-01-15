//app/compponents/ProfileSidebar.tsx

import PersonDate from './PersonDate';
import SkillList from './SkillList';
import LanguageList from './LanguageList';
import CompetenceList from './CompetenceList';

export default function ProfileSidebar() {
  return (
    <aside className="resume-sidebar" data-aos="fade-up">
      <PersonDate />
      <SkillList />
      <LanguageList />
      <CompetenceList />
    </aside>
  );
}
