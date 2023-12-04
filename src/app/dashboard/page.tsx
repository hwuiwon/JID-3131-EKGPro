'use client';

import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import Sidebar from '@/components/Common/Sidebar';
import { Page } from '@/constants/Navigation';

const stats = [
  {
    id: 1,
    name: 'Total Patients',
    stat: '1,210',
    icon: UsersIcon,
    change: '122',
    changeType: 'increase',
    href: '/patient',
  },
  {
    id: 2,
    name: 'Total EKGs',
    stat: '1,956',
    icon: DocumentTextIcon,
    change: '141',
    changeType: 'increase',
    href: '/patient',
  },
  {
    id: 3,
    name: 'Total Appointments',
    stat: '3,192',
    icon: ChatBubbleLeftRightIcon,
    change: '201',
    changeType: 'increase',
    href: '/appointment',
  },
];

export default function Example() {
  return (
    <React.Fragment>
      <Sidebar selectedPage={Page.DASHBOARD} />
      <div className="xl:pl-72">
        <main>
          <div className="p-5">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">
              Stats (Last 30 days) - Updated
            </h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map(item => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-lg bg-white border border-gray-200- px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                >
                  <dt>
                    <div className="absolute rounded-md bg-blue-500 p-3">
                      <item.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 truncate text-sm font-medium text-gray-600">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p className="text-2xl font-semibold text-gray-900">
                      {item.stat}
                    </p>
                    <p
                      className={clsx(
                        item.changeType === 'increase'
                          ? 'text-green-600'
                          : 'text-red-600',
                        'ml-2 flex items-baseline text-sm font-semibold'
                      )}
                    >
                      {item.changeType === 'increase' ? (
                        <ArrowUpIcon
                          className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowDownIcon
                          className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                          aria-hidden="true"
                        />
                      )}
                      <span className="sr-only">
                        {' '}
                        {item.changeType === 'increase'
                          ? 'Increased'
                          : 'Decreased'}{' '}
                        by{' '}
                      </span>
                      {item.change}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                      <div className="text-sm">
                        <Link
                          href={item.href}
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          View all
                          <span className="sr-only"> {item.name} stats</span>
                        </Link>
                      </div>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
