
const Navbar = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 p-8 z-50 text-2xl font-text shadow-lg flex justify-between" style={{background:"#EBEBF4"}}>
      <a className=" ml-20 pr-2 relative group inline-block font-text text-customPurple font-bold text-3xl transform transition-all duration-300 hover:scale-105" 
         href="#about"
         onClick={(e) => handleNavClick(e, 'about')}>
        KM.
        <div className="absolute w-full h-0.5 bg-customPurple scale-x-0 group-hover:scale-x-100 transition-transform"/>
      </a>
      <nav>
        <ul className="flex  pr-20">
          <li>
            <a
              className="px-3 mx-1 py-3 my-2 rounded-lg font-bold hover:bg-customPurple hover:text-white transition duration-300"
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="px-3 mx-1 py-3 my-2 rounded-lg font-bold hover:bg-customPurple hover:text-white transition duration-300"
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="px-3 mx-1 py-3 my-2 rounded-lg font-bold hover:bg-customPurple hover:text-white transition duration-300"
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="px-3 mx-1 py-3 my-2 rounded-lg font-bold hover:bg-customPurple hover:text-white transition duration-300"
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar


