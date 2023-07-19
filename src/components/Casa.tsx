function Casa() {
  return (
    <div className="project-card relative mb-16 flex flex-row justify-end overflow-hidden rounded-md bg-white shadow-xl">
      <img
        className="project-image absolute -left-10 top-0 w-4/6"
        alt=""
        src="public/image/casa.png"
      />
      <div
        className="project-background absolute right-[-1px] top-[-1px] h-[110%] w-[83%] bg-cover"
        style={{ backgroundImage: "url('public/image/project-background-white.svg')" }}
      ></div>

      <div className="project-content z-10 w-1/2 p-16">
        <h3 className="title mb-9 mt-0 text-2xl font-medium leading-[38px] text-gray-500">
          CASA
        </h3>
        <p className="project description pb-10 font-sans text-2xl  font-light text-grey">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quas fugit
          soluta autem deserunt doloremque quidem nostrum quisquam vero eum, consequatur
          et in ut. Illum sint at molestiae cumque quaerat!
        </p>
        <div className="SKILLS flex flex-wrap">
          <span className="skill font-camphor font-open-sans font-segoe-ui mb-4 mr-4 rounded-md border-2 border-highlighterGreen p-2 font-sans text-xs text-gray-500">
            FIGMA
          </span>
        </div>
        <div className="LINKS container flex flex-wrap items-center justify-start">
          <a
            href="https://www.figma.com/proto/FVxfox0Mq5DRqM39mP8D4E/Figma-basics?type=design&node-id=30-290&t=i3J55bZ7R4rnhjeM-0&scaling=min-zoom&page-id=0%3A1"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:fadedPurple mr-5 mt-5 inline-block rounded-md bg-purple px-4 py-0.5 text-lg font-semibold leading-[40px] text-white shadow-lg hover:bg-fadedBlue hover:shadow-md"
          >
            {' '}
            Coming soon..
            <span>
              {' '}
              <i className="fas fa-external-link-alt"></i>
            </span>
          </a>
          {/* <a
            href="https://github.com/kahikatea-2023/todo-full-stack/tree/rocio"
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
          </a> */}
        </div>
      </div>
    </div>
  );
}
export default Casa;
