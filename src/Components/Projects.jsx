const Projects = () => {
    return (
      <section id="projects" className="py-16 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img src="/api/placeholder/400/250" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-300 text-sm">Project description goes here. This is a brief overview of what the project is about.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Projects