import { StudioHero } from './components/studio/StudioHero';
import { Collections } from './components/studio/Collections';
import { AboutStudio } from './components/studio/AboutStudio';
import { ContactSection } from './components/studio/ContactSection';
import { StudioFooter } from './components/studio/StudioFooter';

export default function App() {
  return (
    <div className="size-full bg-white">
      <StudioHero />
      <Collections />
      <AboutStudio />
      <ContactSection />
      <StudioFooter />
    </div>
  );
}
