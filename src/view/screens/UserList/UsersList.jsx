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
import { uuid } from "uuidv4";


export const UsersListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const _users = await repo.retrieveUsers();
      if (_users) setUsers(_users);
    };

    getUsers();
  }, []);

  const createUserHandler = async (user) => {
    const _temp = { id: uuid(), ...user };
    const _user = await repo.createUser(_temp);
    setUsers([...users, _user]);
  }

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

      <UserModalWidget createHandler={createUserHandler} />
    </Fragment>
  );
}
