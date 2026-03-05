import { Button } from '../common';

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-white to-blue-50 px-6 text-center">
      <h1 className="mb-6 max-w-2xl text-5xl font-extrabold tracking-tight text-gray-900">
        Never Lose Track of an{' '}
        <span className="text-blue-600">Application</span> Again
      </h1>
      <p className="mb-10 max-w-xl text-lg text-gray-500">
        Stop juggling spreadsheets and sticky notes. Track every application,
        interview, and follow-up in one simple dashboard.
      </p>
      <Button label="Get Started Free" linkUrl="/register" />
      <p className="mt-4 text-sm text-gray-400">No credit card required</p>
    </section>
  );
};

export default Hero;
