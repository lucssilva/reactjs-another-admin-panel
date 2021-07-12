import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./controllers/userRedux";
import { IndexPage, LoginPage } from "./view/pages/";

export const App = () => {
  const user = useSelector(selectUser);

  return (
    <Fragment>
      {user ? <IndexPage /> : <LoginPage />}
    </Fragment>
  );
};
