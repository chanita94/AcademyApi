import CourseList from "./course-list/CourseList.jsx";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:5129';

export default function CourseSection() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        (async function getCourses() {
            try {
                const response = await fetch(`${baseUrl}/api/course`);
                const result = await response.json();
                const courseResult = Object.values(result);
                setCourses(courseResult);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    return (
        <>
            <CourseList courses={courses} />
            <button className="btn btn-primary">Add new course</button >
        </>
    )

}