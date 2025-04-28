const About = () => {
    const stats = [
      { value: '120', label: 'Completed Projects', symbol: '+' },
      { value: '95', label: 'Client satisfaction', symbol: '%' },
      { value: '10', label: 'Years of experience', symbol: '+' }
    ];
    
    return (
      <section id="about" className="py-16 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About me</h2>
        <p className="text-gray-300 mb-10 max-w-2xl">
          I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-orange-500">
                {stat.value} <span>{stat.symbol}</span>
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
   export default About;