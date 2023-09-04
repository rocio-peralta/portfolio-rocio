function Todo() {
  return (
    <div className="project-card relative mb-16 flex flex-row justify-end overflow-hidden rounded-md bg-white shadow-xl">
      <img
        className="project-image absolute -left-14 top-16 hidden w-1/2 md:block"
        alt=""
        src="./image/TODO.webp"
      />
      <div
        className="project-background absolute right-[-1px] top-[-1px] hidden h-[110%] w-[83%] bg-cover md:block"
        style={{ backgroundImage: "url('./image/project-background-white.svg')" }}
      ></div>

      <div className="project-content z-10  w-screen p-7 md:w-1/2 md:p-16">
        <h3 className="title mb-9 mt-0 text-2xl font-medium leading-[38px] text-gray-500">
          TODO
        </h3>
        <p className="project description pb-10 font-sans text-sm font-light  text-grey md:text-2xl">
          The Todo app is a full-stack project, allowing me to apply everything I had
          learned during the bootcamp. It involved implementing CRUD operations, managing
          state effectively, working with React hooks, and utilizing local storage.
        </p>
        <div className="SKILLS flex flex-wrap">
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            TYPESCRIPT
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            REACT
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            APIS
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            REDUX
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            BULMA
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            SQLITE3
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            EXPRESS
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            VITE
          </span>
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            KNEX
          </span>
        </div>
        <div className="LINKS container flex flex-wrap items-center justify-start">
          {/* <a
            href="http://rocio-todo-full-stack.devacademy.nz/"
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
          </a> */}
          <a
            href="https://github.com/kahikatea-2023/todo-full-stack/tree/rocio"
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
export default Todo;
