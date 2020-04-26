import React from 'react';
import UserMenu from '../UserMenu';
const GroupMenu = () => {
  return (
    <div
      id="userMenu"
      class="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
      <ul class="list-reset">
        <UserMenu name="My account" />
        <UserMenu name="Notifications" />
        <UserMenu name="Logout" />
      </ul>
    </div>
  );
};

export default GroupMenu;
