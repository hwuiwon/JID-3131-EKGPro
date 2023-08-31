'use client';

import React, { useEffect, useState } from 'react';

import Sidebar from '@/components/Common/Sidebar';
import { Page } from '@/constants/Navigation';

export default function PatientInfo({
  params,
}: {
  params: { patientId: string };
}) {
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
              Schedule Next Appointment
            </button>
          </div>
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 gap-6 sm:px-6 lg:grid-flow-col-dense">
          {/* Description list*/}
          <section aria-labelledby="patient-information-title">
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
                    <dt className="text-sm font-medium text-gray-600">
                      Doctor
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">{doctor}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
