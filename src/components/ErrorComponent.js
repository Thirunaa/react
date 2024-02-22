import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something went wrong!</h1>
      <h2>{error.error.message}</h2>
      <h2> Status code : {error.status} </h2>
    </div>
  );
};

export default ErrorComponent;
