'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Sidebar from '@/components/Common/Sidebar';
import AddAppointmentModal from '@/components/appointment/AddAppointmentModal';
import { Page } from '@/constants/Navigation';

const appointmentDummy = [
  {
    patient_name: 'Leslie Alexander',
    date_time: '11/11/2024 08:00AM',
    id: '432',
    patient_id: '1984729182',
    status: 'confirmed', // Add the "status" property
  },
  // Add more appointment objects with the "status" property...
];
// ... (Previous code remains unchanged)

// Add status icons and sorting feature

export default function Appointment() {
  const [openAddApptModal, setOpenAddApptModal] = useState<boolean>(false);
  const [patient, setPatient] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  // Additional features
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointmentDummy);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortAppointments = (a, b) => {
    if (sortOrder === 'asc') {
      return a.date_time.localeCompare(b.date_time);
    } else {
      return b.date_time.localeCompare(a.date_time);
    }
  };

  useEffect(() => {
    // fetch information using patient id
    setPatient('Leslie Alexander');
    setDate('11/11/2024');
    setTime('08:00AM');
  }, []);

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
      <Sidebar selectedPage={Page.APPOINTMENT} />
      <AddAppointmentModal
        open={openAddApptModal}
        setOpen={setOpenAddApptModal}
      />
      <div className="xl:pl-72 py-5">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Appointments
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all your upcoming appointments.
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
                onClick={() => setOpenAddApptModal(true)}
                className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Add Appointment
              </button>
              <div className="ml-4">
                <button
                  onClick={toggleSortOrder}
                  className="block rounded-md px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
                </button>
              </div>
              <div className="ml-4">
                <select
                  onChange={e => setStatusFilter(e.target.value)}
                  className="block rounded-md px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <option value="">All Status</option>
                  <option value="confirmed">Confirmed</option>

                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-8 flow-root">
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
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                          onClick={toggleSortOrder}
                        >
                          Date & Time
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
                          Patient Name
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
                      {filteredAppointments
                        .sort(sortAppointments)
                        .filter(appointment =>
                          statusFilter
                            ? appointment.status === statusFilter
                            : true
                        )
                        .map(appointment => (
                          <tr key={appointment.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {appointment.id}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                              {appointment.date_time}
                              {appointment.status === 'confirmed' && (
                                <span className="ml-2 text-green-500">
                                  Confirmed
                                </span>
                              )}
                              {appointment.status === 'pending' && (
                                <span className="ml-2 text-orange-500">
                                  Pending
                                </span>
                              )}
                              {appointment.status === 'canceled' && (
                                <span className="ml-2 text-red-500">
                                  Canceled
                                </span>
                              )}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                              {appointment.patient_id}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                              {appointment.patient_name}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <Link
                                href={`/appointment/${appointment.id}`}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                View
                                <span className="sr-only">
                                  , {appointment.date_time}
                                </span>
                              </Link>
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
