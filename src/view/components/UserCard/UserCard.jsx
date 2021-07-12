import React from "react";
import { TrashIcon } from "../../elements";

export const UserCardComponent = ({
  user = { name: '', email: '' },
  removeHandler = (id) => { }
}) => {
  const { name, email } = user;

  const onClickHandler = (e) => {
    e.preventDefault();
    removeHandler(user.id)
  }

  return (
    <div className="d-flex align-items-center">

      <div className="m-3">
        <div>{name}</div>
        <div>{email}</div>
      </div>

      <div className="ms-auto btn btn-lg btn-outline-danger"
        onClick={onClickHandler}>
        <TrashIcon style={{ pointerEvents: "none" }} />
      </div>

    </div>
  );
};
