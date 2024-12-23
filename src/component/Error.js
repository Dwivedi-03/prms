import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    document.title = `PayCentral | 404`;
  });

  return (
    <>
      <div className="h-screen bg-bgColor-100">
        <main className="grid min-h-full place-items-center bg-bgColor-100 px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-primary-100">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-200 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-primary-300">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back login
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Error;
