function PinkyPromise() {
  return (
    <div className="project-card relative mb-16 flex flex-row justify-end overflow-hidden rounded-md bg-white shadow-xl">
      <img
        className="project-image absolute -bottom-24 left-0 hidden w-96  md:block"
        alt=""
        src="./image/Pinkypromise.webp"
      />
      <div
        className="project-background absolute right-[-1px] top-[-1px] hidden h-[110%] w-[83%] bg-cover md:block"
        style={{ backgroundImage: "url('./image/project-background-white.svg')" }}
      ></div>

      <div className="project-content z-10  w-screen p-7 md:w-1/2 md:p-16">
        <h3 className="title mb-9 mt-0 text-2xl font-medium leading-[38px] text-gray-500">
          PINKY PROMISE
        </h3>
        <p className="project description pb-10 font-sans text-sm  font-light  text-grey md:text-2xl">
          Pinky Promise was my final project at the bootcamp, along with four other
          students. The app enables users to register, add friends, and create promises
          with their friends. The front-end was built using React (styled with Tailwind),
          and the backend utilizes SQLite
        </p>
        <div className="SKILLS flex flex-wrap">
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            TYPESCRIPT
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            REACT
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            TAILWIND CSS
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            SQLITE3
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            KNEX
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            EXPRESS
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            VITE
          </span>
        </div>
        <div className="LINKS container flex flex-wrap items-center justify-start">
          <a
            href="https://pinky-promise.onrender.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:fadedPurple mr-5 mt-5 inline-block rounded-md bg-purple px-4 py-0.5 text-sm font-semibold leading-[40px] text-white shadow-lg hover:bg-fadedBlue hover:shadow-md md:text-lg"
          >
            {' '}
            Live Demo
            <span>
              {' '}
              <i className="fas fa-external-link-alt"></i>
            </span>
          </a>
          <a
            href="https://github.com/kahikatea-2023/pinky-promise"
            rel="noopener noreferrer"
            target="_blank"
            className="project-link hover:fadedPurple mr-5 mt-5 inline-block rounded-md  px-4 py-0.5 text-sm font-semibold leading-[40px] text-purple shadow-md hover:translate-y-[-1px] hover:bg-slate-200 hover:text-white md:text-lg"
          >
            {' '}
            View Source
            <span>
              {' '}
              <i className="fa-brands fa-github"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default PinkyPromise;
