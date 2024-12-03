import { FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { Link, Route } from "react-router-dom";
import TextEditor from "./TextEditor";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function QuizQuestionEditor() {
    const { cid, aid, qid, qeid } = useParams()
    const navigate = useNavigate();
    //const quizzes = db.quizzes;
    const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    const questions = useSelector((state: any) => state.quizzesReducer.questions);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    // State for selected question type
    const [selectedType, setSelectedType] = useState<string | null>(null);

    // Handle adding a new question
    const handleAddQuestion = () => {
        if (!selectedType) return;

        const newQuestion = {
            id: `${Date.now()}`, // Unique ID
            type: selectedType,
            title: "",
            text: "",
            points: 0,
            correctAnswers: selectedType === "true_false" ? "" : [],
            ...(selectedType === "mc" && { options: [] }),
        };

        // Logic for navigation
        if (selectedType === "mc") {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/MCEditor/new`, {
                state: { question: newQuestion },
            });
        } else if (selectedType === "true_false") {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/TFEditor/new`, {
                state: { question: newQuestion },
            });
        } else if (selectedType === "fill_in_the_blank") {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/FillBlankEditor/new`, {
                state: { question: newQuestion },
            });
        }

        // You can replace this with logic to update your `quizzes` state
        console.log("Adding new question:", newQuestion);
        setSelectedType(null); // Reset dropdown
    };


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
            {/* Dropdown and Add Button */}
            <div className="d-flex align-items-center gap-2 mt-3">
                <select
                    className="form-select"
                    value={selectedType || ""}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="" disabled>
                        Select Question Type
                    </option>
                    <option value="mc">Multiple Choice</option>
                    <option value="true_false">True/False</option>
                    <option value="fill_in_the_blank">Fill in the Blank</option>
                </select>
                <button
                    className="btn btn-danger d-flex align-items-center mb-1"
                    onClick={handleAddQuestion}
                    disabled={!selectedType}
                >
                    <FaPlus className="me-2 " />
                    Add Question
                </button>
            </div>
            {/* Display questions */}
            <ul>
                {questions
                    .filter((q: any) => q.quizId === qid) // Show questions for the current quiz
                    .map((q: any) => (
                        <li key={q.id}>{q.type}: {q.title || "Untitled"}</li>
                    ))}
            </ul>



            {quizzes
                .filter((quiz: any) => quiz._id === qeid)
                .map((quiz: any) => (
                    <p>Hi</p>
                ))}
        </div>
    );
}