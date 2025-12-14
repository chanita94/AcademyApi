import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:5129';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/api/user`);
                const result = await response.json();
                const userResult = Object.values(result);
                setUsers(userResult);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return (
        <>
            <UserList
                users={users}
            />
        </>
    );
}