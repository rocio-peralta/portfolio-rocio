function Hero() {
  return (
    <>
      <div className="">
        <div className="mt-6  flex h-5/6  items-center justify-start md:mt-28">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-purple pr-5 font-mono text-4xl text-purpleTitle  md:text-8xl">
              {'>'} Rocio Peralta
            </h1>
          </div>
        </div>
        <div className="flex-col pb-10 pt-10 font-sans text-lg font-light text-grey md:flex-row  md:pb-24 md:pt-24 md:text-2xl">
          Full-stack Software Developer based in New Zealand.
        </div>
      </div>
    </>
  );
}
export default Hero;
