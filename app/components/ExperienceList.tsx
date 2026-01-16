// app/components/ExperienceList.tsx
import React from 'react';

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

const ExperienceList: React.FC = () => {
  return (
    <section className="glass-card experience-section">
      <div className="card-header">
        <div className="icon-wrapper">
          <i className="fas fa-briefcase text-xl"></i>
        </div>
        <h2>Berufserfahrung</h2>
      </div>

      {jobs.map((job) => (
        <div key={job.company} className="glass-inner-card job-block">
          <div className="job-header">
            <h4>{job.company}</h4>
            <span className="date-badge">{job.date}</span>
          </div>
          <ul className="job-responsibilities">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          padding: 30px;
          margin-bottom: 30px;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .glass-inner-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          margin-top: 20px;
          transition: all 0.3s ease;
        }
        
        .glass-inner-card:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .icon-wrapper {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .card-header h2 {
          font-size: 24px;
          font-weight: 600;
          color: white;
          margin: 0;
        }
        
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .job-header h4 {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin: 0;
        }
        
        .date-badge {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .job-responsibilities {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        
        .job-responsibilities li {
          padding: 10px 0;
          padding-left: 24px;
          position: relative;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          font-size: 15px;
        }
        
        .job-responsibilities li::before {
          content: '▸';
          color: #9ca3af;
          position: absolute;
          left: 0;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};

export default ExperienceList;