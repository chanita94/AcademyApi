export default function UserDelete({
    onClose,
    onUserDelete,
}) {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="confirm-container">
                    <header className="headers">
                        <h2>Are you sure you want to delete this account?</h2>
                        <button className="btn close" onClick={onClose}>
                            close
                        </button>
                    </header>
                    <div className="actions">
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit" onClick={onUserDelete}>Delete</button>
                            <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
