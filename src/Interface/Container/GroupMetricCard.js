import React from 'react';
import MetricCard from '../MetricCard';
const GroupMetricCard = () => {
  return (
    <div class="flex flex-wrap">
      <MetricCard
        name="Total Revenue"
        icon="fa fa-wallet fa-2x fa-fw fa-inverse"
        desIcon="rounded p-3 bg-green-600"
        value="3000 "
        optionColor="text-green-500"
        optionIcon="fas fa-caret-up"
      />
      <MetricCard
        name="TOTAL USERS"
        icon="fas fa-users fa-2x fa-fw fa-inverse"
        desIcon="rounded p-3 bg-orange-600"
        value="249 "
        optionColor="text-orange-500"
        optionIcon="fas fa-exchange-alt"
      />
      <MetricCard
        name="New Users"
        icon="fas fa-user-plus fa-2x fa-fw fa-inverse"
        desIcon="rounded p-3 bg-yellow-600"
        value="249 "
        optionColor="text-yellow-600"
        optionIcon="fas fa-caret-up"
      />
      <MetricCard
        name="Server Uptime"
        icon="fas fa-server fa-2x fa-fw fa-inverse"
        desIcon="rounded p-3 bg-blue-600"
        value="152 days "
        optionColor=""
        optionIcon=""
      />
      <MetricCard
        name="To Do List"
        icon="fas fa-tasks fa-2x fa-fw fa-inverse"
        desIcon="rounded p-3 bg-indigo-600"
        value="7 tasks "
        optionColor=""
        optionIcon=""
      />
      <MetricCard
        name="Issues"
        icon="fas fa-inbox fa-2x fa-fw fa-inverse"
        desIcon="rounded p-3 bg-red-600"
        value="7 tasks "
        optionColor="text-red-500"
        optionIcon="fas fa-caret-up"
      />
    </div>
  );
};

export default GroupMetricCard;
