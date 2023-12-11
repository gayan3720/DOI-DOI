import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ setMenuOpen, menuOpen }) => {
  const handleChange = (e) => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <input
        type="checkbox"
        class="openSidebarMenu"
        id="openSidebarMenu"
        onChange={handleChange}
      />
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
    </>
  );
};

export default HamburgerMenu;
