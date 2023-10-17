'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import EKGProLogo from '@/images/logo/logo_black.svg';

export default function Register() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const onSubmit = () => {
    console.log('Submitting: ' + email + ' ' + pass);
    fetch('http://127.0.0.1:8000/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'string',
        email: email,
        password: pass,
        first_name: 'string',
        last_name: 'string',
        org_id: 'Piedmont',
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
      });
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <Image
              className="mx-auto h-10 w-auto"
              src={EKGProLogo}
              alt="Logo"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={error => setEmail(error.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  onChange={error => setPass(error.target.value)}
                  value={pass}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={onSubmit}
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account?{' '}
            <Link
              href="/login"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
