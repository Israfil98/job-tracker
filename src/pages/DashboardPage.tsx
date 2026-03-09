import { Briefcase, CalendarCheck, Trophy, XCircle } from 'lucide-react';
import { RecentApplications, StatsCard } from '../components/Dashboard';

const MOCK_APPLICATIONS = [
  {
    id: '1',
    company: 'Google',
    position: 'Frontend Developer',
    status: 'Interview',
    appliedDate: 'Mar 1, 2026',
  },
  {
    id: '2',
    company: 'Meta',
    position: 'React Engineer',
    status: 'Applied',
    appliedDate: 'Feb 28, 2026',
  },
  {
    id: '3',
    company: 'Apple',
    position: 'UI Developer',
    status: 'Rejected',
    appliedDate: 'Feb 25, 2026',
  },
  {
    id: '4',
    company: 'Netflix',
    position: 'Senior Frontend Engineer',
    status: 'Offer',
    appliedDate: 'Feb 20, 2026',
  },
  {
    id: '5',
    company: 'Stripe',
    position: 'Full Stack Developer',
    status: 'Applied',
    appliedDate: 'Feb 18, 2026',
  },
];

const STATS = [
  {
    title: 'Total Applications',
    value: 24,
    icon: <Briefcase className="h-5 w-5" />,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    title: 'Interviews',
    value: 5,
    icon: <CalendarCheck className="h-5 w-5" />,
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-600',
  },
  {
    title: 'Offers',
    value: 2,
    icon: <Trophy className="h-5 w-5" />,
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
  },
  {
    title: 'Rejections',
    value: 8,
    icon: <XCircle className="h-5 w-5" />,
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
  },
];

const DashboardPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            bgColor={stat.bgColor}
            textColor={stat.textColor}
          />
        ))}
      </div>

      {/* Recent Applications */}
      <div className="mt-8">
        <RecentApplications applications={MOCK_APPLICATIONS} />
      </div>
    </div>
  );
};

export default DashboardPage;
