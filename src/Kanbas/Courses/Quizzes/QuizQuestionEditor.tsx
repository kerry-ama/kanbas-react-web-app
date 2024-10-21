import { FaPlus } from "react-icons/fa6";
import {useParams } from "react-router";
import * as db from "../../Database";
export default function QuizQuestionEditor() {
    const { qeid } = useParams();
    const assignments = db.assignments;
    
    return (
        
        <div id="wd-quiz-editor">
            <p>Hellow World</p>
            {assignments
                .filter((assignment: any) => assignment._id === qeid)
                .map((assignment: any) => (
            <button>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />New Question
            </button>
            ))}
        </div>
    );
}