import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const baseUrl = "http://localhost:5129";

export default function CourseEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getToken, user } = useAuth();

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    useEffect(() => {
        async function fetchCourse() {
            try {
                const response = await fetch(`${baseUrl}/api/course/${id}`);
                if (!response.ok) {
                    throw new Error("Course not found");
                }

                const result = await response.json();
                setFormData({
                    title: result.title,
                    description: result.description
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCourse();
    }, [id]);

    const changeHandler = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const token = getToken();
        if (!token) {
            alert("You must be logged in");
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/api/course/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Update failed");
            }

            navigate(`/courses/${id}`);
        } catch (err) {
            alert(err.message);
        }
    };

    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }

    if (error) {
        return <div className="alert alert-danger mt-4">{error}</div>;
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="mb-3">Edit Course</h4>

                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                className="form-control"
                                name="title"
                                value={formData.title}
                                onChange={changeHandler}
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
                                required
                            />
                        </div>

                        <div className="d-flex gap-2">
                            <button className="btn btn-primary">
                                Save changes
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate(-1)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}