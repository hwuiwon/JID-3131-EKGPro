'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Sidebar from '@/components/Common/Sidebar';
import UploadModal from '@/components/patient/UploadModal';
import { Page } from '@/constants/Navigation';

const projects = [
  {
    name: '08/01/2023',
    href: '#',
    bgColor: 'bg-pink-600',
  },
  {
    name: '07/31/2023',
    href: '#',
    bgColor: 'bg-purple-600',
  },
  {
    name: '07/30/2023',
    href: '#',
    bgColor: 'bg-yellow-500',
  },
  {
    name: '07/29/2023',
    href: '#',
    bgColor: 'bg-green-500',
  },
];

export default function PatientInfo({
  params,
}: {
  params: { patientId: string };
}) {
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const [dob, setDob] = useState<string>();
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [doctor, setDoctor] = useState<string>('');

  useEffect(() => {
    // fetch information using patient id
    setDob('11/11/1995');
    setAge(25);
    setSex('F');
    setPhone('(555) 555-5555');
    setDoctor('Dr. Jacob Jones');
  }, []);

  return (
    <React.Fragment>
      <Sidebar selectedPage={Page.PATIENT} />
      <UploadModal open={openUploadModal} setOpen={setOpenUploadModal} />
      <div className="xl:pl-72 p-5">
        <div className="mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8">
          <div className="flex items-center space-x-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Leslie Alexander
              </h1>
              <p className="text-sm font-medium text-gray-600">
                Patient since <time dateTime="2020-08-25">August 25, 2020</time>
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Schedule Appointment
            </button>
          </div>
        </div>

        <div className="mx-auto mt-8 gap-6 sm:px-6">
          {/* Description list*/}
          <div className="bg-white shadow sm:rounded-lg border border-gray-100">
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">
                    Patient ID
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {params.patientId}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">
                    Date of Birth
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{dob}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">Age</dt>
                  <dd className="mt-1 text-sm text-gray-900">{age}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">Sex</dt>
                  <dd className="mt-1 text-sm text-gray-900">{sex}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">Phone</dt>
                  <dd className="mt-1 text-sm text-gray-900">{phone}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">Doctor</dt>
                  <dd className="mt-1 text-sm text-gray-900">{doctor}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 lg:gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-4 min-h-screen">
          <div className="col-span-1">
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View All Segments
            </button>
            <button
              type="button"
              onClick={() => setOpenUploadModal(true)}
              className="w-full mt-5 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Upload EKG
            </button>
            <div className="w-full mt-5 rounded-md bg-white border border-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-md">
              <h2 className="text-sm font-medium text-gray-600">
                Patient EKGs
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-3">
                {projects.map(project => (
                  <li
                    key={project.name}
                    className="col-span-1 flex rounded-md shadow-sm"
                  >
                    <button
                      className={clsx(
                        project.bgColor,
                        'flex w-12 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                      )}
                    />
                    <button className="flex flex-1 items-center truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white hover:bg-gray-100">
                      <div className="flex-1 truncate px-4 py-2 text-sm font-medium text-left">
                        {project.name}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full mt-5 rounded-md bg-white border border-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-md h-[420px] flex flex-col">
              <h2 className="text-sm font-medium text-gray-600 pb-4">Notes</h2>
              <textarea className="text-sm font-medium rounded-md border border-gray-300 w-full resize-none h-auto flex-grow mb-2"></textarea>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full rounded-md bg-white shadow-md border border-gray-200 h-5/6"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
