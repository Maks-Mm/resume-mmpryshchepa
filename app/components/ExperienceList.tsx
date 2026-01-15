// app/components/ExperienceList.tsx

const jobs = [
  {
    company: 'Siemens Energy – Falkensee',
    date: '2021 – 2025',
    points: [
      'Einlagerung und Auslagerung von Industriewaren in verschiedenen Lagerbereichen',
      'Wareneingangskontrolle inkl. Prüfung von Lieferscheinen und Frachtpapieren',
      'Be- und Entladung von LKW mit Flurförderfahrzeugen (Stapler, Hubwagen)',
      'Kommissionierung von Aufträgen für Produktion und Versand',
      'Buchung von Warenbewegungen über Datenterminals und Computersysteme',
      'Qualitätskontrolle und Dokumentation im Wareneingang und Warenausgang',
      'Unterstützung bei der Optimierung von Lagerprozessen und Materialfluss',
    ],
  },
];

export default function ExperienceList() {
  return (
    <section className="resume-section">
      <h2>Berufserfahrung</h2>

      {jobs.map((job) => (
        <div key={job.company} className="job-block">
          <h4>{job.company}</h4>
          <span>{job.date}</span>
          <ul>
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
