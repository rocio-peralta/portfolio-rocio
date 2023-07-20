function Casa() {
  return (
    <div className="project-card relative mb-16 flex flex-row justify-end overflow-hidden rounded-md bg-white shadow-xl">
      <img
        className="project-image absolute -left-10 top-0 w-4/6"
        alt=""
        src="./image/casa.png"
      />
      <div
        className="project-background absolute right-[-1px] top-[-1px] h-[110%] w-[83%] bg-cover"
        style={{ backgroundImage: "url('./image/project-background-white.svg')" }}
      ></div>

      <div className="project-content z-10 w-1/2 p-16">
        <h3 className="title mb-9 mt-0 text-2xl font-medium leading-[38px] text-gray-500">
          CASA
        </h3>
        <p className="project description pb-10 font-sans text-2xl  font-light text-grey">
          During the bootcamp, I was inspired to collaborate with my partner on a project
          aimed at providing people with quick plans for tiny houses. We envisioned
          creating a browser extension that could potentially benefit many individuals.
          Currently, the project is in its early planning stages. We believe that this
          idea has the potential to contribute towards addressing the housing crisis.
          Please take a moment to have a look at my presentation.
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
        </div>
      </div>
    </div>
  );
}
export default Casa;
