import {
  CallToAction,
  Features,
  Hero,
  HowItWorks,
  ProblemSection,
} from '../components/Landing';

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <Features />
      <HowItWorks />
      <CallToAction />
    </main>
  );
};

export default LandingPage;
