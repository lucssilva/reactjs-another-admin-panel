import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../controllers/userRedux";


export const HeaderWidget = (
  { title = '' }
) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signout = (e) => {
    console.log(user);
    dispatch(logout());
  };

  return (
    <header className="py-3 mb-5 border-bottom shadow">
      <div className="container-fluid d-grid gap-3 align-items-center"
        style={{ gridTemplateColumns: "1fr 2fr" }}>

        <h5 className="m-3">{title}</h5>
        <div className="flex-shrink-0 dropdown" style={{ justifySelf: "end" }}>

          <div className="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo"
              width="32" height="32" className="rounded-circle" />
          </div>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><button className="dropdown-item">New project...</button></li>
            <li><button className="dropdown-item">Settings</button></li>
            <li><button className="dropdown-item">Profile</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item"
              onClick={(e) => signout(e)}>
              Sign out]
            </button></li>
          </ul>

        </div>

      </div>
    </header>
  );
};
