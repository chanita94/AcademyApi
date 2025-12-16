import React from "react";
import UserListItem from "./user-list-item/UserListItem";
import { useAuth } from "../../../contexts/AuthContext";
export default function UserList({
    users,
    onDelete
}) {
    const { user: currentUser } = useAuth();
    return (
        <div>
            <table className="table table-hover table-striped" >
                <thead className="table-primary ">
                    <tr>
                        <th>
                            First name
                        </th>
                        <th>
                            Last name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <UserListItem
                            key={user.id}
                            user={user}
                            currentUser={currentUser}
                            onDelete={onDelete}
                        />
                    )}
                </tbody>
            </table >
        </div >
    );
}
