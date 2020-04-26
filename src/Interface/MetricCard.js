import React from 'react';
const MetricCard = ({
  name,
  icon,
  desIcon,
  value,
  optionColor,
  optionIcon,
}) => {
  return (
    <div class="w-full md:w-1/2 xl:w-1/3 p-3">
      <div class="bg-white border rounded shadow p-2">
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class={desIcon}>
              <i class={icon}></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h5 class="font-bold uppercase text-gray-500">{name}</h5>
            <h3 class="font-bold text-3xl">
              {value}
              <span class={optionColor}>
                <i class={optionIcon}></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
