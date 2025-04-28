const MobileNav = () => {
    return (
      <nav className="bg-gray-900 py-4 px-6 flex justify-between items-center">
        <div className="text-lg font-bold">David</div>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    );
  };
export default MobileNav;  