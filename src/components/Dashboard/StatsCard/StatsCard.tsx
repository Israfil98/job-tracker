import type { ReactNode } from 'react';

interface IStatsCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  bgColor: string;
  textColor: string;
}

const StatsCard = ({
  title,
  value,
  icon,
  bgColor,
  textColor,
}: IStatsCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`rounded-xl ${bgColor} p-3`}>
          <div className={textColor}>{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
