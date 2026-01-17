// app/components/SubHomeStyles.tsx

import { GiForklift } from 'react-icons/gi';
import { FaBoxOpen, FaClipboardCheck } from 'react-icons/fa6';
import { MdInventory, MdComputer } from 'react-icons/md';

const skills = [
  { name: 'Lagerorganisation', value: 95, icon: <FaBoxOpen /> },
  { name: 'Qualitätssicherung', value: 90, icon: <FaClipboardCheck /> },
  { name: 'Staplerfahrer', value: 85, icon: <GiForklift /> },
  { name: 'Kommissionierung', value: 90, icon: <MdInventory /> },
  { name: 'Webentwicklung', value: 75, icon: <MdComputer /> },
];

export default function SkillList() {
  return (
    <section className="resume-section">
      <h3>Fähigkeiten</h3>

      {skills.map((s) => (
        <div key={s.name} className="skill-row">
          <div className="skill-label">
            {s.icon}
            <span>{s.name}</span>
          </div>

          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${s.value}%` }}>
              {s.value}%
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}