import React from 'react';
import Menu from '../Menu'
const GroupMenu = () => {

  return (
    
    <div
      className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20"
      id="nav-content">
      <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
         <Menu name="Home" icon="fas fa-home" hover="hover:border-orange-600" />
         <Menu name="Task" icon="fas fa-tasks" hover="hover:border-pink-600" />
         <Menu name="Messages" icon="fa fa-envelope" hover="hover:border-purple-600" />
         <Menu name="Analytics" icon="fa fa-envelope" hover="hover:border-green-500" />
         <Menu name="Payments" icon="fa fa-wallet" hover="hover:border-red-500" />
      </ul>
      
    </div>
  );
};

export default GroupMenu;
