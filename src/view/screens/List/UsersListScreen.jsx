import React, { useState, useEffect } from "react";
import { UsersListWidget } from "../../widgets";
import * as repo from "../../../api/userRepository";

const UsersListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const _users = await repo.retrieveUsers();
      if (_users) setUsers(_users);
    };

    getUsers();
  }, []);

  return <UsersListWidget users={users} />
}

export default UsersListScreen;
