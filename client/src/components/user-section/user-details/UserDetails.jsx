export default function UserDetails({
    user,
    onClose,
}) {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="detail-container">
                    <header className="headers">
                        <h2>User Detail</h2>
                        <button className="btn close" onClick={onClose}>
                            close
                        </button>
                    </header>
                    <div className="content">
                        <div className="user-details">
                            <p>
                                Full Name:
                                <strong>{user.firstName} {user.lastName}</strong>
                            </p>
                            <p>Email: <strong>{user.email}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
