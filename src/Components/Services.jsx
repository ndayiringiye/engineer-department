const Services = () => {
    const services = [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Website Development'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        title: 'App Development'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
          </svg>
        ),
        title: 'Website Hosting'
      }
    ];
    
    return (
      <section className="py-16 px-8 md:px-16">
        <div className="border-l-2 border-orange-500 space-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start ml-6 relative">
              <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="p-2 bg-gray-800 rounded-lg mr-4">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mt-1">{service.title}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Services