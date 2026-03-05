import { Button } from '../common';

const CallToAction = () => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-blue-50 px-6 py-24 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
        Ready to organize your job search?
      </h2>
      <p className="mx-auto mb-10 max-w-lg text-lg text-gray-500">
        Join JobTracker today and never lose track of an opportunity again.
      </p>
      <Button label="Get Started Free" linkUrl="/register" showArrow />
    </section>
  );
};

export default CallToAction;
