import { ReactNode } from "react";

function About() {
  return (
    <div className="about-container mx-auto">
      <div className="terminal shadow-2xl shadow-zinc-400">
        <div className="flex h-7 items-center justify-start rounded-t-lg bg-gray-300">
          <div className="header-button red ml-2 h-4 w-4 rounded-full border-2 border-redborder bg-red" />
          <div className="header-button yellow ml-2 h-4 w-4 rounded-full border-2 border-yellowborder bg-yellow" />
          <div className="header-button green ml-2 h-4 w-4 rounded-full border-2 border-greenborder bg-green" />
        </div>
        <div className="terminal-window rounded-b-lg bg-fadedPurple p-9 shadow-lg">
          <TerminalLine text="Current.location" value="Auckland, NZ" />
          <TerminalLine text="Visa.status" value="NZ Permanent Resident" />
          <TerminalLine
            text="Contact.me"
            value={
              <>
                {['1rocioperalta@gmail.com', 'LinkedIn', 'github'].map((link, index) => (
                  <>
                    {index > 0 && ', '}
                    <a
                      className="hover:text-cyan-400"
                      href={
                        index === 0
                          ? 'mailto:1rocioperalta@gmail.com'
                          : link === 'LinkedIn'
                          ? 'https://www.linkedin.com/in/rocio-peralta-4396333a/'
                          : 'https://github.com/rocio-peralta'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &quot;{link}&quot;
                    </a>
                  </>
                ))}
              </>
            }
          />
          <TerminalLine
            text="Rocio.resume"
            value={
              <a
                href="https://drive.google.com/file/d/1dQc9jNIg-iBrnv1vMkeaGMIpDPzahdGW/view?usp=drive_link"
                className="hover:text-cyan-400"
              >
                &quot;rocioperalta.pdf&quot;
              </a>
            }
          />
          <TerminalLine
            text="Rocio.education"
            value='"New Zealand Certificate in Applied Software Development, Dev Academy"'
          />
          <TerminalLine
            text="Rocio.interests"
            value='"hiking", "yoga", "animals", "watercolours"'
          />

          <div className="w-max pb-10">
            <h1 className="font-mon animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-slate-50 pr-5 text-slate-50">
              {'>'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalLine({ text, value }: { text: string; value: ReactNode }) {
  return (
    <>
      <div className="font-mono text-lg text-slate-50">
        {'>'} {text}
      </div>
      <p className="pb-6 pl-5 font-mono text-lg font-thin text-amber-200">{value}</p>
    </>
  );
}

export default About;
