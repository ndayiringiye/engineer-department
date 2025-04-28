const Hero = () => {
    return (
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
        <div className="md:w-1/2 z-10 pt-20 md:pt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hello<span className="text-orange-500">.</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">I'm David</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-10">Software Developer</h3>
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded">
              Got a project?
            </button>
            <button className="border border-gray-600 hover:border-orange-500 hover:text-orange-500 px-6 py-3 rounded">
              My resume
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-orange-600 bg-opacity-70 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
            <img 
              src="public/images/MYXJ_20240728111650480_save.jpg" 
              alt="Jensen Omega" 
              className="z-10 relative h-auto max-w-full"
            />
            <div className="absolute -right-12 top-1/4 text-orange-500 opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="absolute -left-12 bottom-1/4 text-orange-500 opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;