import React, { memo } from "react";
import { people } from "../lib/constant";
import { Link } from "react-router-dom";

interface Problem {
  id: number;
  email: string;
  role: string;
  imageUrl: string;
  lastSeen: string;
  lastSeenDateTime: string;
}

interface ProblemItems {
  problem: Problem;
}

// memo will memoize the component which props dosent change, but if the props changs it will not
// memoize the component
const ProblemItem: React.FC<ProblemItems> = memo(({ problem }) => {
  return <>
    <li key={problem.email} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <p className="text-sm leading-6 text-gray-300">1.</p>
        <div className="min-w-0 flex-auto hover:text-blue-400">
          <Link to={`/problems/${problem.id}`}>
            <p className="text-sm leading-6 text-gray-300">{problem.email}</p>
          </Link>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-300">{problem.role}</p>
        {problem.lastSeen ? (
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Last seen <time dateTime={problem.lastSeenDateTime}>{problem.lastSeen}</time>
          </p>
        ) : (
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs leading-5 text-gray-500">Online</p>
          </div>
        )}
      </div>
    </li>
  </>
});

const ProblemPage: React.FC = () => {
  return <>
    <ul role="list" className="divide-y divide-gray-800">
      {people.map((problem: any) => (
        <ProblemItem
          key={problem.email} problem={problem}
        />
      ))}
    </ul>
  </>
}
export default ProblemPage;
