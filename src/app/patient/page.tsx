'use client';

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import Sidebar from '@/components/Common/Sidebar';
import { Page } from '@/constants/Navigation';

const people = [
  {
    name: 'Leslie Alexander',
    id: '1984729182',
    lastVisit: '10/10/2024 08:00AM',
    doctor: 'Dr. Jacob Jones',
    contact: '(229) 699-7346',
  },
  {
    name: 'John Doe',
    id: '1234567890',
    lastVisit: '10/11/2024 10:30AM',
    doctor: 'Dr. Sarah Smith',
    contact: '(555) 123-4567',
  },
  {
    name: 'Anna Smith',
    id: '9876504321',
    lastVisit: '10/12/2024 02:15PM',
    doctor: 'Dr. Michael Johnson',
    contact: '(777) 987-6543',
  },
  {
    name: 'Alice Johnson',
    id: '4567809012',
    lastVisit: '10/13/2024 04:45PM',
    doctor: 'Dr. Emily Davis',
    contact: '(888) 555-7890',
  },
  {
    name: 'Bob Anderson',
    id: '3456789001',
    lastVisit: '10/14/2024 11:00AM',
    doctor: 'Dr. Christopher Miller',
    contact: '(333) 777-2222',
  },
  {
    name: 'Eva Garcia',
    id: '5678090123',
    lastVisit: '10/15/2024 03:30PM',
    doctor: 'Dr. Jessica White',
    contact: '(444) 999-8888',
  },
  {
    name: 'Marcus Turner',
    id: '7890102345',
    lastVisit: '10/16/2024 09:45AM',
    doctor: 'Dr. Samantha Brown',
    contact: '(666) 333-1111',
  },
];

export default function Patient() {
  // Additional features

  // const [openAddApptModal, setOpenAddApptModal] = useState<boolean>(false);
  // const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  // const [filteredAppointments, setFilteredAppointments] = useState(people);
  // const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // const toggleSortOrder = () => {
  //   setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  // };

  // const sortAppointments = (str1: string, str2: string) => {
  //   return sortOrder === 'asc'
  //     ? str1.localeCompare(str2)
  //     : str2.localeCompare(str1);
  // };

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };

  const currentDate = new Date().toLocaleString('en-US', options);

  const inputReference = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        inputReference.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <React.Fragment>
      <Sidebar selectedPage={Page.PATIENT} />
      <div className="xl:pl-72 py-5">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Patients
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all of your patients and their overview. Click the
                patient's name to see detailed information and EKG data.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                Total Patients: {people.length}
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 flex flex-row">
              <div className="relative flex mr-4">
                <input
                  ref={inputReference}
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                    ⌘K
                  </kbd>
                </div>
              </div>
              <button
                type="button"
                className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Add Patient
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <p className="text-gray-500 text-sm mt-2">Current: {currentDate}</p>
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-300">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Patient ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Last Visit
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Doctor
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {people.map(person => (
                        <tr key={person.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            <Link
                              href={`/patient/${person.id}`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              {person.name}
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                            {person.id}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                            {person.lastVisit}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                            {person.doctor}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                            {person.contact}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
