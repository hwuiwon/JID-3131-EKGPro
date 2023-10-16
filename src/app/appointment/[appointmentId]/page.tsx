'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Sidebar from '@/components/Common/Sidebar';
import UploadModal from '@/components/patient/UploadModal';
import { Page } from '@/constants/Navigation';


export default function AppointmentInfo({
  params,
}: {
  params: { appointmentId: string };
}) {

  return (
    <React.Fragment>
      <Sidebar selectedPage={Page.APPOINTMENT} />
      <div className="xl:pl-72 p-5">
        <div className="mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8">
          <div className="flex items-center space-x-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Appointment on 11/11/2024
              </h1>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          </div>
        </div>

        <div className="mx-auto mt-8 gap-6 sm:px-6">
          {/* Description list*/}
          <div className="bg-white shadow sm:rounded-lg border border-gray-100">
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">
                    Appointment ID
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {params.appointmentId}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">
                    Appointment Date & Time
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900"> 11/11/2024 08:00AM</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">Patient ID</dt>
                  <dd className="mt-1 text-sm text-gray-900">1984729182</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-600">Patient Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">Leslie Alexander</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 lg:gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-4 min-h-screen">
          <div className="col-span-4">
            <div className="w-full mt-5 rounded-md bg-white border border-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-md h-[420px] flex flex-col">
              <h2 className="text-sm font-medium text-gray-600 pb-4 ">Notes</h2>
              <textarea className="text-sm font-medium rounded-md border border-gray-300 w-full resize-none h-auto flex-grow mb-2"></textarea>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
