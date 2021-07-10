import React from "react";
import { UsersListWidget } from "../../widgets";

const UsersListScreen = () => {
  const users = [{
    "name": "Lucas Silva",
    "email": "lucssbarrosdasilva@gmail.com"
  }];

  return <UsersListWidget users={users} />
}

export default UsersListScreen;
