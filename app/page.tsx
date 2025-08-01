// app/page.tsx
import HeaderNav from './components/HeaderNav';
import SubHome from './components/SubHome';
import { ThemeProvider } from './components/ThemeContext';

export default function HomePage() {
  return (
    <ThemeProvider>
      <>
        <HeaderNav />
        <SubHome />
      </>
    </ThemeProvider>
  );
}