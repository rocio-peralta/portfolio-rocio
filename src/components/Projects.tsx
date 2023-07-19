function Projects() {
  return (
    <div className="project-container mx-auto pt-12">
      <div className="project-card relative mb-16 flex flex-row justify-end overflow-hidden rounded-md bg-white shadow-xl">
        <img
          className="project-image absolute -left-14 top-16 w-1/2"
          alt=""
          src="public/image/TODO.png"
        />
        <div
          className="project-background absolute right-[-1px] top-[-1px] h-[110%] w-[83%] bg-cover"
          style={{ backgroundImage: "url('public/image/project-background-white.svg')" }}
        ></div>

        <div className="project-content z-10 w-1/2 p-16">
          <h3 className="title mb-9 mt-0 text-2xl font-medium leading-[38px] text-gray-500">
            TODO
          </h3>
          <p className="project description font-sans text-2xl font-light  text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quas fugit
            soluta autem deserunt doloremque quidem nostrum quisquam vero eum, consequatur
            et in ut. Illum sint at molestiae cumque quaerat!
          </p>
          <div className="SKILLS flex flex-wrap">
            <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
              HTML
            </span>
            <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
              HTML
            </span>
            <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
              HTML
            </span>
            <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
              HTML
            </span>
            <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
              HTML
            </span>
            <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
              HTML
            </span>
          </div>
          <div className="LINKS container flex flex-wrap items-center justify-start">
            <a
              href="http://rocio-todo-full-stack.devacademy.nz/"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:fadedPurple mr-5 mt-5 inline-block rounded-md bg-purple px-4 py-0.5 text-lg font-semibold leading-[40px] text-white shadow-lg hover:bg-fadedBlue hover:shadow-md"
            >
              {' '}
              Live Demo
              <span>
                {' '}
                <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
            <a
              href="http://rocio-todo-full-stack.devacademy.nz/"
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
    </div>
  );
}
export default Projects;
