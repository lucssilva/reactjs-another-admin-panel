import React, {
  useState,
  useEffect,
  Fragment
} from "react";
import {
  UsersListWidget,
  UserModalWidget,
} from "../../widgets";
import * as repo from "../../../api/userRepository";


export const UsersListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const _users = await repo.retrieveUsers();
      if (_users) setUsers(_users);
    };

    getUsers();
  }, []);

  const removeUserHandler = async (userId) => {
    const code = await repo.deleteUser(userId);
    const newUsersList = users.filter((user) => {
      return user.id !== userId;
    });
    console.log(code)
    if (code !== 0) setUsers(newUsersList);
    // else alert error toast
  };

  return (
    <Fragment>
      <UsersListWidget users={users} removeHandler={removeUserHandler}/>

      <UserModalWidget />
    </Fragment>
  );
}
