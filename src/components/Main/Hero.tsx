import Image from 'next/image';
import Link from 'next/link';

import DoctorImage from '@/images/sample/doctors.jpg';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl min-h-screen">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  EKG Pro
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  An innovative web application that allows doctors to easily
                  view multiple electrocardiogram readings side-by-side for
                  efficient analysis and comparison.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/dashboard"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            alt="image"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={DoctorImage}
          />
        </div>
      </div>
    </div>
  );
}
