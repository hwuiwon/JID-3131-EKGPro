'use client';

import React from 'react';

import Sidebar from '@/components/Common/Sidebar';
import { Page } from '@/constants/Navigation';

export default function Analysis() {
  return (
    <React.Fragment>
      <Sidebar selectedPage={Page.APPOINTMENT} />
      <div className="xl:pl-72 py-5"></div>
    </React.Fragment>
  );
}
