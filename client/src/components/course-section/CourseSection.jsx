import CourseList from "./course-list/CourseList.jsx";
import CourseAdd from "./course-add/CourseAdd.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext"; // adjust path if needed

const baseUrl = "http://localhost:5129";

export default function CourseSection() {
    const { getToken } = useAuth(); // ⭐ get token from AuthContext
    const [courses, setCourses] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

    // Fetch courses on mount
    useEffect(() => {
        (async function getCourses() {
            try {
                const response = await fetch(`${baseUrl}/api/course`);
                if (!response.ok) throw new Error("Failed to fetch courses");
                const result = await response.json();
                setCourses(Object.values(result));
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    const createCourseHandler = async (courseData) => {
        const token = getToken();
        if (!token) {
            alert("You must be logged in to create a course.");
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/api/course`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(courseData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }

            const createdCourse = await response.json();
            setCourses((state) => [...state, createdCourse]);
            setShowCreate(false);

        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <>
            <CourseList courses={courses} />

            {!showCreate && (
                <button
                    className="btn btn-primary"
                    onClick={() => setShowCreate(true)}
                >
                    Add new course
                </button>
            )}

            {showCreate && (
                <CourseAdd
                    onCreate={createCourseHandler}
                    onCancel={() => setShowCreate(false)}
                />
            )}
        </>
    );
}
