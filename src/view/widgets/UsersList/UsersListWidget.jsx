import React from "react";
import { UserCardComponent } from '../../components';

const UsersListWidget = ({
    users = []
}) => {
    const renderUsersList = users.map((user, index) => {
        return (
            <li className="list-group-item list-group-item-action">
                <UserCardComponent key={index} user={user} />
            </li>
        );
    });

    return (
        <ul className="list-group">
            {renderUsersList}
        </ul>
    );
};

export default UsersListWidget;
