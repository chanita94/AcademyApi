import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext"; // добавяме контекста

const baseUrl = 'http://localhost:5129';

export default function UserSection() {
    const { getToken } = useAuth(); // взимаме токена
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function getUsers() {
            try {
                const token = getToken();
                if (!token) {
                    setError("You must be logged in to view users.");
                    return;
                };

                const response = await fetch(`${baseUrl}/api/user`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }

                const result = await response.json();
                setUsers(result); // няма нужда от Object.values
            } catch (error) {
                setError(error.message);
            }finally {
                setLoading(false);
            }
        })();
    }, [getToken]);
    if (loading) return <p>Loading...</p>;

    if (error) {
        return (
            <div style={{ padding: 20, textAlign: "center" }}>
                <h2>Access Denied</h2>
                <p>{error}</p>
            </div>
        );
    }
    return (
        <>
            <UserList users={users} />
        </>
    );
}