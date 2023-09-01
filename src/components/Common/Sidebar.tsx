import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useMemo, useState } from 'react';
import React from 'react';

import { Page, getNavigationItems } from '@/constants/Navigation';
import EKGProWhiteLogo from '@/images/logo/logo_white.svg';
import SomeGuy from '@/images/sample/people/guy.jpeg';

interface SidebarProperties {
  selectedPage: Page;
}

export default function Sidebar({ selectedPage }: SidebarProperties) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navItems = useMemo(() => {
    return getNavigationItems(selectedPage);
  }, [selectedPage]);

  return (
    <React.Fragment>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 xl:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <Link href="/">
                      <Image
                        className="h-8 w-auto"
                        src={EKGProWhiteLogo}
                        alt=""
                      />
                    </Link>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul className="-mx-2 space-y-1">
                          {navItems.map(item => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={clsx(
                                  item.current
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="-mx-6 mt-auto">
                        <Link
                          href="/account"
                          className={clsx(
                            'flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white',
                            selectedPage === Page.ACCOUNT
                              ? 'bg-gray-800'
                              : 'hover:bg-gray-800'
                          )}
                        >
                          <Image
                            className="h-8 w-8 rounded-full bg-white"
                            src={SomeGuy}
                            alt=""
                          />
                          <span className="sr-only">Your profile</span>
                          <span aria-hidden="true">Tom Cruise</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 xl:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 xl:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {/* Static sidebar for desktop */}
      <div className="hidden xl:fixed xl:z-50 xl:flex xl:w-72 xl:flex-col xl:min-h-screen">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="bg-gray-900 border-white flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/">
              <Image className="h-8 w-auto" src={EKGProWhiteLogo} alt="" />
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navItems.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={clsx(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="-mx-6 mt-auto">
                <Link
                  href="/account"
                  className={clsx(
                    'flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white',
                    selectedPage === Page.ACCOUNT
                      ? 'bg-gray-800'
                      : 'hover:bg-gray-800'
                  )}
                >
                  <Image
                    className="h-8 w-8 rounded-full bg-white"
                    src={SomeGuy}
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cruise</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}
