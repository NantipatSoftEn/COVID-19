import React from 'react';
const MetricCard = ({name, icon, value, optionColor,optionIcon}) => {
  return (
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
      <div class="bg-white border rounded shadow p-2">
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded p-3 bg-green-600">
              <i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-500">{name}</h5>
            <h3 class={icon}>
              {value}
              <span class="text-green-500">
                <i class="fas fa-caret-up"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
