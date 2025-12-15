import React from "react";
import CourseListItem from "./course-list-item/CourseListItem";
import { Link } from "react-router-dom";

export default function CourseList({courses}) 
{
    return (
        <div>
            <table className="table table-hover table-striped" >
                <thead className="table-primary ">
                    <tr>
                        <th>
                            Title 
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course =>
                        <CourseListItem
                            key={course.id}
                            course={course}
                        />
                        
                    )}
                </tbody>
            </table >
        </div >
    );
}
