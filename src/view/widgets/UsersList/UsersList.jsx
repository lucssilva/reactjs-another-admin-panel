import React from "react";
import { UserCardComponent } from '../../components';

export const UsersListWidget = ({
    users = [],
    removeHandler = (userId) => { },
}) => {
    const renderUsersList = users.map((user, index) => {
        return (
            <li className="list-group-item list-group-item-action">
                <UserCardComponent key={index}
                    user={user} removeHandler={removeHandler} />
            </li>
        );
    });

    return (
        <ul className="list-group">
            {renderUsersList}
        </ul>
    );
};
