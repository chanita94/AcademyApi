export default function UserListItem({ user, currentUser, onDelete }) {
    // Само администратор може да изтрива, и не може да изтрива други админи
    const canDelete = currentUser?.role === "Admin" && user.role !== "Admin";

    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
                {canDelete && (
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(user.id)}
                    >
                        Delete
                    </button>
                )}
            </td>
        </tr>
    );
}
