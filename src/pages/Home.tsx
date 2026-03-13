import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Products from '../components/Products';
import TargetAudience from '../components/TargetAudience';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Products />
      <TargetAudience />
      <Benefits />
      <Contact />
    </main>
  );
}
