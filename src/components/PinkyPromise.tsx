function PinkyPromise() {
  return (
    <div className="project-card relative mb-16 flex flex-row justify-end overflow-hidden rounded-md bg-white shadow-xl">
      <img
        className="project-image absolute -bottom-24 left-0  w-96"
        alt=""
        src="./image/Pinkypromise.png"
      />
      <div
        className="project-background absolute right-[-1px] top-[-1px] h-[110%] w-[83%] bg-cover"
        style={{ backgroundImage: "url('/image/project-background-white.svg')" }}
      ></div>

      <div className="project-content z-10 w-1/2 p-16">
        <h3 className="title mb-9 mt-0 text-2xl font-medium leading-[38px] text-gray-500">
          PINKY PROMISE
        </h3>
        <p className="project description pb-10 font-sans text-2xl  font-light text-grey">
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
            href="https://github.com/kahikatea-2023/pinky-promise"
            rel="noopener noreferrer"
            target="_blank"
            className="project-link hover:fadedPurple mr-5 mt-5 inline-block rounded-md  px-4 py-0.5 text-lg font-semibold leading-[40px] text-purple shadow-md hover:translate-y-[-1px] hover:bg-slate-200 hover:text-white"
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
