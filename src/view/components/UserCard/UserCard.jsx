
import React from "react";
import {
  // UserIcon,
  TrashIcon,
} from "../../elements";

const UserCardComponent = ({
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
      {/* <UserIcon className=""
        style={{ maxWidth: "64px" }} /> */}

      <div className="m-3">
        <div>{name}</div>
        <div>{email}</div>
      </div>

      <div class="ms-auto btn btn-lg btn-outline-danger"
        onClick={onClickHandler}>
        <TrashIcon />
      </div>
    </div>
  );
};

export default UserCardComponent;
