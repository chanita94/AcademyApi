export default function CourseDetails({
    Course,
    onClose,
}) {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="detail-container">
                    <header className="headers">
                        <h2> Course Details</h2>
                        <button className="btn close" onClick={onClose}>
                            Close
                        </button>
                    </header>

                </div>
            </div>
        </div>
    );
}
