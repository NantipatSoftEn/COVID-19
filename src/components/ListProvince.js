import React from "react";
const ListProvince = (props) => {
  const { items } = props;
  if (!items) return null;
  if (!items.length && !Object.keys(items).length)
    return <p>No items, sorry</p>;
  return (
    <ul>
      {Object.keys(items.Province).map((key, index) => {
        return <li key={index}>{key}:{items.Province[key]}</li>;
      })}
    </ul>
  );
};
export default ListProvince;
