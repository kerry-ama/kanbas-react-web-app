import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Navigate, useNavigate, useParams } from "react-router";

export default function FillBlankEditor() {
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState(0);
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([""]);

    const { cid } = useParams();
    const navigate = useNavigate();

    // Add a new blank answer field
    const addAnswer = () => setAnswers([...answers, ""]);

    // Remove an answer field
    const removeAnswer = (index: any) =>
        setAnswers(answers.filter((_, i) => i !== index));

    const updateAnswer = (index: any, value: any) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    // Handle Save Logic
    const handleSave = () => {
        if (!title || !question || points <= 0 || answers.some((a) => !a)) {
            alert("Please fill out all fields and ensure points and answers are valid.");
            return;
        }

        const questionData = {
            type: "fill_in_the_blank",
            title,
            points,
            question,
            answers,
        };
        console.log("Saved Question Data:", questionData);

        // Optionally reset the form
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };

    // Handle Cancel Logic
    const handleCancel = () => {
        const confirmCancel = window.confirm(
            "Are you sure you want to discard your changes?"
        );
        if (confirmCancel) {
            navigate(`/Kanbas/Courses/${cid}/Quizzes`);
        }
    };
    return (
        <div id="wd-tf-editor">
            <div id="dropdown-container" className="dropdown-row">
                <div className="dropdown">
                    <select
                        defaultValue={"easy"} style={{ height: "30px" }}
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                </div>
                <div className="dropdown">
                    <label>
                        <select
                            defaultValue={"blank"} style={{ height: "30px" }}
                        >
                            <option value="mc">Multiple Choice</option>
                            <option value="tf">True/False</option>
                            <option value="blank">Fill in the Blank</option>
                        </select>
                    </label>
                </div>
                <label style={{ marginLeft: "810px" }}>Points:</label>
                <div className="flex-end-mc">

                    <input
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                        className="form-control"
                        style={{ width: "100px" }}
                    />

                </div>
            </div>
            <hr />
            <p>Enter your question text, then define all possible correct answers for the blank.</p>
            <p>Students will see the question followed by a small text box to type their answer.</p>

            <div className="form-group">
                <label htmlFor="question-title"><strong>Question Title:</strong></label>
                <input
                    type="text"
                    id="question-title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div><br />
            <div className="form-group">
                <label htmlFor="question-text"><strong>Question:</strong></label>
                <ReactQuill

                    id="question-text"
                    theme="snow"
                    value={question}
                    onChange={setQuestion}
                    placeholder="Enter the question text here..."
                />
            </div>
            <br />
            <label>
                <strong>Answers:</strong>
                {answers.map((answer, index) => (
                    <div key={index} className="answer-item">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => updateAnswer(index, e.target.value)}
                        />
                        <button className="btn btn-danger ms-1 mb-2" type="button" onClick={() => removeAnswer(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button className="btn btn-secondary mt-1" type="button" onClick={addAnswer}>
                    Add Answer
                </button>
            </label><br /><br />
            <hr className="me-1" />

            <div className="float-end me-1">

                <button onClick={handleCancel} className="btn btn-secondary me-1">Cancel</button>
                <button onClick={handleSave} className="btn btn-danger">Save</button>

                
            </div>
        </div>
    )

}