import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link, Route } from "react-router-dom";
import TextEditor from "./TextEditor";
export default function QuizQuestionEditor() {
    const { cid, aid, qid, qeid } = useParams()
    const assignments = db.assignments;


    return (

        <div id="wd-quiz-question-editor">
            <div id="wd-css-navigating-with-tabs">
                <hr />
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/Kanbas/Courses/${cid}/Quizzes/new`}>Details</Link>
                    </li>
                    <li className="nav-item">

                        <Link className="nav-link active" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/QE101`}>Questions</Link>
                    </li>

                </ul>
            </div>
          
            <button className="justify-content-center" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />New Question
                    
            </button>
          
            <TextEditor />
            {assignments
                .filter((assignment: any) => assignment._id === qeid)
                .map((assignment: any) => (
                <p>Hi</p>
                ))}
        </div>
    );
}