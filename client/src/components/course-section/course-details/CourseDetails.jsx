import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const baseUrl = "http://localhost:5129";

export default function CourseDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, getToken } = useAuth();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchCourse() {
            try {
                const response = await fetch(`${baseUrl}/api/course/${id}`);

                if (!response.ok) {
                    throw new Error("Course not found");
                }

                const result = await response.json();
                setCourse(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCourse();
    }, [id]);
    const deleteHandler = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this course?"
        );

        if (!confirmDelete) return;

        const token = getToken();
        if (!token) {
            alert("You must be logged in");
            return;
        }

        try {
            const response = await fetch(
                `${baseUrl}/api/course/${course.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Delete failed");
            }

            navigate("/courses");
        } catch (err) {
            alert(err.message);
        }
    };


    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    if (error) {
        return (
            <div className="alert alert-danger mt-4 text-center">
                {error}
            </div>
        );
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "700px" }}>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-3">{course.title}</h3>

                    <p className="card-text text-muted">
                        {course.description}
                    </p>

                    <div className="d-flex gap-2 mt-4">
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/courses")}
                        >
                            Back
                        </button>

                        {user && (
                            <>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => navigate(`/courses/${course.id}/edit`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={deleteHandler}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
