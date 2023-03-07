import React from "react";
import { WithRouter } from "../utils/Navigation";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary">
      <h1 className="display-1 fw-bold text-white">404</h1>
    </div>
  );
};

export default WithRouter(NotFound);
