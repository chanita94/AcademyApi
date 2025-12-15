import { Link } from 'react-router-dom';
export default function CourseListItem({
    course
}) {
    return (
        <tr>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td className="actions">
                <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-outline-primary btn-sm"
                >
                    Details
                </Link>
            </td>

        </tr>
    );
}
