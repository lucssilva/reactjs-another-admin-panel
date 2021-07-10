
import React from "react";
import {
  UserIcon,
  TrashIcon,
} from "../../elements";

const UserCardComponent = ({
  user
}) => {
  const _SIZE = "48px";
  const { name, email } = user;

  return (
    <div className="d-flex align-items-center">
      <UserIcon className=""
        style={{ maxWidth: "64px" }} />

      <div className="m-3">
        <div>{name}</div>
        <div>{email}</div>
      </div>

      <TrashIcon className="ms-auto btn btn-outline-danger"
        style={{ width: _SIZE, height: _SIZE }} />
    </div>
  );
};

export default UserCardComponent;
