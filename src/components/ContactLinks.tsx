import React from 'react';

function ContactLinks() {
  return (
    <>
      <div className=" mt-10 flex flex-wrap justify-center pb-10 text-center text-xl md:mt-24 md:pb-32 md:text-2xl">
        <span className="mr-5 md:mr-10">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:1rocioperalta@gmail.com"
            className="relative text-grey hover:text-blue-500"
          >
            Gmail
          </a>
        </span>
        <span className="mr-5 md:mr-10">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rocio-peralta-4396333a/"
            className="relative text-grey hover:text-blue-500"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rocio-peralta"
            className="relative text-grey hover:text-blue-500"
          >
            Github
          </a>
        </span>
      </div>
    </>
  );
}

export default ContactLinks;
