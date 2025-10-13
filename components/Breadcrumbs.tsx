import React from 'react';

export interface BreadcrumbItem {
  label: string;
  onClick: () => void;
}

interface BreadcrumbsProps {
  trail: BreadcrumbItem[];
  currentPageLabel: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ trail, currentPageLabel }) => {
  return (
    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex items-center space-x-2">
        {trail.map((crumb) => (
          <li key={crumb.label} className="flex items-center">
            <button onClick={crumb.onClick} className="hover:underline hover:text-blue-600">
              {crumb.label}
            </button>
            <span className="mx-2" aria-hidden="true">/</span>
          </li>
        ))}
        <li className="font-semibold text-gray-700" aria-current="page">
          {currentPageLabel}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
