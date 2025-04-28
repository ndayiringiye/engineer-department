const Navbar = () => {
    return (
      <nav className="bg-gray-900 py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold">david ndayiringiye</div>
        <ul className="flex space-x-8">
          <li><a href="#" className="hover:text-orange-500">Home</a></li>
          <li><a href="#about" className="hover:text-orange-500">About</a></li>
          <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contacts</a></li>
        </ul>
      </nav>
    );
  };
  export default Navbar;