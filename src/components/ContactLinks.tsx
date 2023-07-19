import React from 'react';

function ContactLinks() {
  return (
    <>
      <div className=" mt-24 flex flex-wrap justify-center pb-32 text-center text-2xl">
        <span className="mr-10">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:1rocioperalta@gmail.com"
            className="relative text-grey hover:text-blue-500"
          >
            1rocioperalta@gmail.com
            {'   ||'}
          </a>
        </span>
        <span className="mr-10">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rocio-peralta-4396333a/"
            className="relative text-indigo-600 hover:text-blue-500"
          >
            LinkedIn {'||'}
          </a>
        </span>
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rocio-peralta"
            className="relative text-indigo-600 hover:text-blue-500"
          >
            Github
          </a>
        </span>
      </div>
    </>
  );
}

export default ContactLinks;
