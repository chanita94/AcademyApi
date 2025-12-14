
export default function UserListItem({
    user,
    // onUserDetailsClick,
    // onUserDeleteClick,
}) {
    return (
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td className="actions">
                {/* <button className="btn edit-btn" title="Edit">
                    Edit
                </button>
                <button className="btn delete-btn" title="Delete" onClick={() => onUserDeleteClick(user._id)}>
                    Delete
                </button>
                <button className="btn info-btn" title="Info" onClick={() => onUserDetailsClick(user._id)}>
                    Details
                </button> */}
            </td>
        </tr>
    );
}
