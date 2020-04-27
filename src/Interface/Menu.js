import React from 'react';
const Menu = ({name, icon, hover}) => {
  return (
    <li className="mr-6 my-2 md:my-0">
      <a
        href="#"
        className={
          'block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white ' +
          hover
        }>
        <i className={icon + " fa-fw mr-3"}></i>
        <span className="pb-1 md:pb-0 text-sm">{name}</span>
      </a>
    </li>
  );
};

export default Menu;
