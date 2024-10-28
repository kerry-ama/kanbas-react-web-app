import { BsGripVertical } from "react-icons/bs";
import QuizControlButtons from "./QuizControlButtons";
import { MdAssignment } from "react-icons/md";
import QuizControl from "./QuizControl";
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import * as db from "../../Database";
import { RxRocket } from "react-icons/rx";
export default function Quizzes() {
    const assignments = db.quizzes;
    const { cid } = useParams();
    return (
        <div id="wd-assignments">
            <div className="row">
                <QuizControl />
            </div>
            <ul className="list-group rounded-0">
                <li className="wd-module list-group-item p-0
                   mb-5 fs-5 border-gray dropdown">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <div className="btn dropdown-toggle"><strong>Assignment Quizzes</strong></div>
                        
                        
                    </div>
                    <ul className="wd-assignments-list list-group rounded-0">
                        {assignments

                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                                    <div>
                                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${assignment._id}`}
                                            className="wd-assignment-link indented-text assignment-link"
                                        >
                                            {assignment.title}
                                        </Link><br /><BsGripVertical className="me-2 fs-3" /><RxRocket className="me-4 fs-3 text-success" />
                                        <Link to={`/Kanbas/Courses/${cid}/Quizzes/${assignment._id}`} className="wd-assignment-link text-danger multiple-modules-link" >
                                            Multiple Modules
                                        </Link>  | <strong>Not available until</strong> {assignment.until} | <QuizControlButtons /><br />
                                        <div className="indented-text"><strong>Due</strong> {assignment.due_assign} | {assignment.points} pts</div>

                                    </div>

                                </li>

                            ))}
                    </ul>
                </li>

            </ul>
        </div>
    );
}