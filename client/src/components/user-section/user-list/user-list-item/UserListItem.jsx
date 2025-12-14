
export default function UserListItem({
    user
}) {
    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td className="actions">
            </td>
        </tr>
    );
}
