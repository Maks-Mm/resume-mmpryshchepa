//app/components/SubHomeStyles.tsx

import Carousel from './Carousel';
import ExperienceList from './ExperienceList';
import Footer from './Footer';

export default function ExperiencePanel() {
  return (
    <main className="resume-content" data-aos="fade-left">
      <Carousel />
      <ExperienceList />
      <Footer />
    </main>
  );
}
