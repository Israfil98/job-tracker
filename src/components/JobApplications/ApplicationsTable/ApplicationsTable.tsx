import { Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import type { IJobApplication, TApplicationStatus } from '../../../types';

interface IApplicationsTableProps {
  applications: IJobApplication[];
  onDelete: (id: string) => void;
}

const statusStyles: Record<TApplicationStatus, string> = {
  Applied: 'bg-blue-100 text-blue-700',
  Interview: 'bg-amber-100 text-amber-700',
  Offer: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-700',
};

const ApplicationsTable = ({
  applications,
  onDelete,
}: IApplicationsTableProps) => {
  if (applications.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="text-gray-500">
          No applications found. Try a different filter or add a new one!
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Mobile cards — visible below sm (640px) */}
      <div className="flex flex-col gap-3 sm:hidden">
        {applications.map((app) => (
          <div key={app.id} className="rounded-xl bg-white p-4 shadow-sm">
            {/* Top row: company + status */}
            <div className="flex items-start justify-between">
              <Link
                to={`/applications/${app.id}`}
                className="text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                {app.company}
              </Link>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[app.status]}`}
              >
                {app.status}
              </span>
            </div>

            {/* Position */}
            <p className="mt-1 text-sm text-gray-600">{app.position}</p>

            {/* Bottom row: location, date, delete */}
            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
              <div className="flex flex-col gap-0.5">
                <p className="text-xs text-gray-500">
                  {app.location ?? 'No location'}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(app.applied_date + 'T00:00:00').toLocaleDateString(
                    'en-US',
                    {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    },
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onDelete(app.id)}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table — visible at sm (640px) and above */}
      <div className="hidden overflow-hidden rounded-2xl bg-white shadow-sm sm:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Position</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Applied</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-gray-50 transition-colors last:border-0 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <Link
                      to={`/applications/${app.id}`}
                      className="text-sm font-medium text-gray-900 hover:text-blue-600"
                    >
                      {app.company}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {app.position}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[app.status]}`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {app.location ?? '—'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(
                      app.applied_date + 'T00:00:00',
                    ).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => onDelete(app.id)}
                      className="text-gray-400 transition-colors hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ApplicationsTable;
