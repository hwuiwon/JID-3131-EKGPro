'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

import Sidebar from '@/components/Common/Sidebar';
import EKGMovable from '@/components/patient/EKGMovable';
import UploadModal from '@/components/patient/UploadModal';
import { Page } from '@/constants/Navigation';

// TODO: Dynamic load from ../page.tsx ?
type projectType = {
  id: number;
  name: string;
  selected: boolean;
  bgColor: string;
  href: string;
};

const modules = {
  toolbar: [
    [{ list: 'bullet' }, { list: 'ordered' }],
    ['bold', 'italic', 'underline'],
    [{ align: [] }],
    [{ bulletlist: '•' }], // Custom bullet button without auto-indentation
  ],
};

const formats = [
  'list',
  'bullet',
  'ordered',
  'bold',
  'italic',
  'underline',
  'align',
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
  const [projects, setProjects] = useState<projectType[]>([
    {
      id: 1,
      name: '08/01/2023',
      selected: true,
      href: '/_N_E/src/app/images/sample/ekg/fullEKG1.jpeg',
      bgColor: 'bg-pink-600',
    },
    {
      id: 2,
      name: '07/31/2023',
      selected: false,
      href: '/_N_E/src/app/images/sample/ekg/fullEKG2.jpeg',
      bgColor: 'bg-purple-600',
    },
    {
      id: 3,
      name: '07/30/2023',
      selected: false,
      href: '#',
      bgColor: 'bg-yellow-500',
    },
    {
      id: 4,
      name: '07/29/2023',
      selected: false,
      href: '#',
      bgColor: 'bg-green-500',
    },
  ]);
  const [activeEKG, setActiveEKG] = useState<number>(-1);

  // const handleActiveEKG = (id: number) => {
  //   if (id === activeEKG) setActiveEKG(-1);
  //   else setActiveEKG(id);
  // };

  const [notes, setNotes] = useState<string>(''); // State to hold notes

  // const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setNotes(e.target.value);
  // };

  // Map between an EKG and its selected state.
  const [toggleEKGs, setToggleEKGs] = useState<
    { id: number; selected: boolean }[]
  >(projects.map(project => ({ id: project.id, selected: false })));

  const handleToggleEKGs = (id: number) => {
    const newToggleState = projects.map(project => {
      if (project.id === id) {
        // if project is unselected, set it to activeEKG and vice versa
        setActiveEKG(project.selected ? -1 : id);
        return (project = { ...project, selected: !project.selected });
      }
      return project;
    });
    setProjects(newToggleState);
  };

  // const handleColorChange = (id: number) => {
  //   console.log('TODO CHANGE COLOR', id);
  // };

  const handleKeyPress = (event: any) => {
    const allowedKeys = ['ArrowUp', 'ArrowDown'];
    if (activeEKG === -1 || !allowedKeys.includes(event.key)) return;
    // prevents scrolling
    event.preventDefault();
    const activeEKGIndex = projects.findIndex(
      project => project.id === activeEKG
    );
    let newIndex = -1;
    if (event.key === 'ArrowUp') {
      newIndex =
        activeEKGIndex === 0 ? projects.length - 1 : activeEKGIndex - 1;
    } else if (event.key === 'ArrowDown') {
      newIndex =
        activeEKGIndex === projects.length - 1 ? 0 : activeEKGIndex + 1;
    }
    // eslint-disable-next-line security/detect-object-injection
    setActiveEKG(projects[newIndex].id);
  };

  const setAllEKGs = (state: boolean) => {
    const newToggleState = toggleEKGs.map(project => {
      return (project = { id: project.id, selected: state });
    });
    setToggleEKGs(newToggleState);
  };

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
      <UploadModal
        open={openUploadModal}
        setOpen={setOpenUploadModal}
        id={params.patientId}
      />
      <div className="xl:pl-72 p-5">
        <div className="mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8">
          <p>Current Date: {new Date().toLocaleDateString()}</p>
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
          <div className="col-span-1 space-y-3">
            <button
              type="button"
              className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              onClick={() => setAllEKGs(toggleEKGs.some(p => !p.selected))}
            >
              View All Segments
            </button>
            <button
              type="button"
              onClick={() => setOpenUploadModal(true)}
              className="w-full rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover-bg-green-500 focus-visible-outline focus-visible-outline-2 focus-visible-outline-offset-2 focus-visible-outline-green-600"
            >
              Upload EKG
            </button>
            <button
              className="w-full mt-5 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={() => {
                /* TODO: Hit GET API */
              }}
            >
              Download Chosen EKGs{' '}
            </button>
            <div className="w-full mt-5 rounded-md bg-white border border-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-md">
              <h2 className="text-sm font-medium text-gray-600">
                Patient EKGs
              </h2>
              <ul
                className="mt-3 grid grid-cols-1 gap-3"
                role="listbox"
                onKeyDown={e => handleKeyPress(e)}
              >
                {projects.map(project => {
                  console.log('project:', project.selected);
                  // const selected = 'border-r-8 border-blue-400';
                  // const active = 'border-2 border-blue-400';
                  // const default = 'border-2 border-transparent';
                  var selectedStyle = '';
                  if (project.selected) {
                    selectedStyle = 'border-r-8 border-blue-400';
                  } else if (activeEKG === project.id) {
                    selectedStyle = 'border-2 border-blue-400';
                  } else {
                    selectedStyle = 'border-2 border-transparent';
                  }
                  return (
                    <li
                      key={project.name}
                      className={clsx(
                        selectedStyle,
                        'col-span-1 flex rounded-md shadow-sm hover:border-2 hover:border-blue-400'
                      )}
                    >
                      <button
                        className={clsx(
                          project.bgColor,
                          'flex w-12 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                          toggleEKGs
                            .filter(p => p.id === project.id)
                            .some(p => p.selected)
                            ? 'border-y-2 border-l-2 border-green-400'
                            : ''
                        )}
                        onClick={() => handleToggleEKGs(project.id)}
                      />
                      <button
                        className={clsx(
                          'flex flex-1 items-center truncate rounded-r-md bg-white outline-none',
                          // Displays whether EKG is selected.
                          toggleEKGs
                            .filter(p => p.id === project.id)
                            .some(p => p.selected)
                            ? 'border-y-2 border-r-8 border-green-400'
                            : 'border-y border-r border-gray-200'
                        )}
                        onClick={() => handleToggleEKGs(project.id)}
                      >
                        <div className="flex-1 truncate px-4 py-2 text-sm font-medium text-left outline-none">
                          {project.name}
                        </div>
                      </button>
                      {/* <button
                      className={clsx(
                        project.bgColor,
                        'flex w-12 flex-shrink-0 items-center justify-center rounded-r-md text-sm font-medium text-white',
                        project.selected ? 'border-r-8 border-blue-400' : '',
                        noFocusRing
                      )}
                      // onClick={() => handleColorChange(project.id)}
                    /> */}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full mt-5 h-96 rounded-md bg-white border border-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-md">
              <h2 className="text-sm font-medium text-gray-600">Notes</h2>
              <ReactQuill
                value={notes}
                onChange={setNotes}
                modules={modules}
                formats={formats}
                // TODO change this to be better sized
                // style={{ height: '100%' }}
                className="h-64"
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full flex flex-col rounded-md bg-white shadow-md border border-gray-200 h-5/6">
              <div
              // style={{ backgroundImage: `url('/EKG_Background.png')` }}
              // className="w-full flex flex-col rounded-md bg-cover bg-center shadow-md border border-gray-200 h-5/6"
              >
                {/* Will be image wrapper at some point for manipulation */}
                {projects.map(
                  project =>
                    (project.selected || project.id === activeEKG) && (
                      // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
                      <EKGMovable key={project.id} ekg={project} />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
