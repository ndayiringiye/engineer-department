const Skills = () => {
    const skills = ['HTML5', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'];
    
    return (
      <section className="py-10 flex justify-center space-x-4 md:space-x-8 px-4 overflow-x-auto">
        {skills.map((skill, index) => (
          <span key={index} className="text-gray-400 whitespace-nowrap">{skill}</span>
        ))}
      </section>
    );
  };
  export default Skills;