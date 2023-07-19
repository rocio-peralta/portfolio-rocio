function About() {
  return (
    <>
      <div className="about-container mx-auto">
        <div className="terminal shadow-2xl shadow-zinc-400">
          <div className="flex h-7 items-center justify-start rounded-t-lg bg-gray-300">
            <div className="header-button red flex-item ml-2 h-4 w-4 rounded-full border-2 border-redborder bg-red" />
            <div className="header-button yellowflex-item ml-2 h-4 w-4 rounded-full border-2 border-yellowborder bg-yellow" />
            <div className="header-button green flex-item ml-2 h-4 w-4 rounded-full border-2 border-greenborder bg-green" />
          </div>
          <div className="terminal-window rounded-b-lg bg-fadedPurple p-9 shadow-lg">
            <div className="pt-6 font-mono text-lg text-slate-50">
              {'>'} Current.location{' '}
            </div>
            <p className="pb-6 pl-5 font-mono text-lg font-thin text-amber-200">
              &quot;Auckland, NZ&quot;
            </p>
            <div className="font-mono text-lg text-slate-50">{'>'} Visa.status </div>
            <p className="pb-6 pl-5 font-mono text-lg font-thin text-amber-200">
              &quot;NZ Permanent Resident&quot;
            </p>
            <div className="font-mono text-lg text-slate-50">{'>'} Contact.me</div>
            <p className="pb-6 pl-5 font-mono text-lg font-thin text-amber-200">
              {'['}
              <a
                className="hover:text-cyan-400"
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:1rocioperalta@gmail.com"
              >
                &quot;1rocioperalta@gmail.com&quot;,{' '}
              </a>
              <a
                className="hover:text-cyan-400"
                href="https://www.linkedin.com/in/rocio-peralta-4396333a/"
              >
                &quot;LinkedIn&quot;,{' '}
              </a>
              <a className="hover:text-cyan-400" href="https://github.com/rocio-peralta">
                &quot;github&quot;
              </a>
              {']'}
            </p>
            <div className="font-mono text-lg text-slate-50">{'>'} Rocio.resume</div>
            <p className="pb-6 pl-5 font-mono text-lg font-thin text-amber-200">
              <a
                href="https://drive.google.com/file/d/1b67VUIOowfd6ekdEAhE97RAd3Z5bd_zY/view?usp=drive_link"
                className="hover:text-cyan-400"
              >
                &quot;rocioperalta.pdf&quot;
              </a>
            </p>
            <div className="font-mono text-lg text-slate-50">{'>'} Rocio.education</div>
            <p className="pb-6 pl-5 font-mono text-lg font-thin text-amber-200">
              &quot;New Zealand Certificate in Applied Software Development, Dev
              Academy&quot;
            </p>
            <div className="font-mono text-lg text-slate-50">{'>'} Rocio.interests</div>
            <p className="pb-6 pl-5 font-mono text-lg font-thin text-amber-200">
              {'['} &quot;hikking&quot;,&quot;yoga&quot;, &quot;animals&quot;,
              &quot;watercolours&quot;{']'}
            </p>

            <div className="w-max pb-10">
              <h1 className="font-mon animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-slate-50 pr-5  text-slate-50">
                {'>'}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
