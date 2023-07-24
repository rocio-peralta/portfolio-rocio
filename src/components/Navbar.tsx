import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="font-open-sans flex justify-end pt-10 text-center font-sans text-xl font-light text-grey md:mt-10">
        <div className={`p-5 ${isMobileMenuOpen ? '' : 'hidden md:block'}`}>
          <a href="#projects">Projects</a>
        </div>
        <div className={`p-5 ${isMobileMenuOpen ? '' : 'hidden md:block'}`}>
          <a href="#contact">Contact</a>
        </div>
        <div className="p-5 md:hidden">
          <button onClick={handleMobileMenuToggle}>
            <i className=" fa-solid fa-bars text-2xl text-purple"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
