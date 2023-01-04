import { useNavigate, useParams } from "react-router-dom";
import React from "react";

export const WithRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} navigate={navigate} params={params} />;
  };

  return Wrapper;
};
