import { useState } from "react";
import styles from  "./CourseAdd.module.css"

export default function CourseAdd({
    onCreate,
    onCancel
}) {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })
    const changeHandler = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const submitHandler = (e) => {
        e.preventDefault();
        onCreate(formData);

    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalCard}>
                <h5>Create Course</h5>

                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={formData.title}
                            onChange={changeHandler}
                            placeholder="Enter course title"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={changeHandler}
                            placeholder="Enter course description"
                            required
                        />
                    </div>

                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-success">
                            Create
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

