import React from 'react';
import GroupMetricCard from '../Interface/Container/GroupMetricCard';
const Container = () => {
  return (
    <div className="container w-full mx-auto pt-20">
      <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        <GroupMetricCard />
      </div>
    </div>
  );
};

export default Container;
