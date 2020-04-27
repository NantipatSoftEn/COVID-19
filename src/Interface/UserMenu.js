import React from 'react';
const UserMenu = (name) => {
  return (
    <li>
      <a
        href="#"
        className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
        {name}
      </a>
    </li>
  );
};
export default UserMenu;
