'use client';

import React from 'react';

import Sidebar from '@/components/Common/Sidebar';
import { Page } from '@/constants/Navigation';

export default function PatientInfo({
  params,
}: {
  params: { patientId: string };
}) {
  console.log(params.patientId);

  return (
    <React.Fragment>
      <Sidebar selectedPage={Page.PATIENT} />
      <div className="xl:pl-72 py-5">hehe</div>
    </React.Fragment>
  );
}
