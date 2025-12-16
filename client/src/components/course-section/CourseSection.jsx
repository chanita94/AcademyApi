import CourseList from "./course-list/CourseList.jsx";
import CourseAdd from "./course-add/CourseAdd.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const baseUrl = "http://localhost:5129";

export default function CourseSection() {
    const { getToken, isAuthenticated } = useAuth();
    const [courses, setCourses] = useState([]);
    const [showCreate, setShowCreate] = useState(false);

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
                throw new Error("Create failed");
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
            {isAuthenticated && !showCreate && (
                <div className=" d-flex justify-content-center align-items-center">
                    <button
                        className="btn btn-outline-primary mt-3 "
                        onClick={() => setShowCreate(true)}
                    >
                        Add new course
                    </button>
                </div>

            )}

            {isAuthenticated && showCreate && (
                <CourseAdd
                    onCreate={createCourseHandler}
                    onCancel={() => setShowCreate(false)}
                />
            )}
        </>
    );
}
