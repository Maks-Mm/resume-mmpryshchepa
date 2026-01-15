//app/components/SubHomeStyles.tsx

const languages = [
  { name: 'Deutsch', level: 100, flag: '🇩🇪' },
  { name: 'Englisch', level: 100, flag: '🇬🇧' },
];

export default function LanguageList() {
  return (
    <section className="resume-section">
      <h3>Sprachen</h3>

      {languages.map((l) => (
        <div key={l.name} className="language-row">
          <span>{l.flag} {l.name}</span>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${l.level}%` }} />
          </div>
        </div>
      ))}
    </section>
  );
}
