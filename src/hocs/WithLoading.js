import React from "react";

const WithLoading = (Component) => {
  const WithLoadingComponent = ({ error,isLoaded, ...props }) => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Component {...props} />
      );
    }
  };
  return WithLoadingComponent
};
export default WithLoading;
