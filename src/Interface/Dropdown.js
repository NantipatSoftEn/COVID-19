import React from 'react';
const Dropdown = (toggle) => {
    console.log(`toggle=`,toggle);
    
  return (
    <div className="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
      <ul className="list-reset">
        <li>
          <a
            href="#"
            className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
            My account
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
            Notifications
          </a>
        </li>
        <li>
          <hr className="border-t mx-2 border-gray-400" />
        </li>
        <li>
          <a
            href="#"
            className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
