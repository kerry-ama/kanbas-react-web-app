import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from "react-router";
import TextEditor from './TextEditor';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
export default function TrueFalseEditor() {
    const {cid} = useParams()
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState(0);
    const [question, setQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(true);
    const navigate = useNavigate();

    const handleSave = () => {
        if (!title || !question || points <= 0) {
          alert("Please fill out all fields and ensure points are greater than 0.");
          return;
        }
    
        const questionData = {
          type: "true_false",
          title,
          points,
          question,
          correctAnswer,
        };
    
        // Save logic here, e.g., sending to API or logging
        console.log("Saved Question Data:", questionData);
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    
       
      };

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
                            defaultValue={"tf"} style={{ height: "30px" }}
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
            <p>Enter your question text, then select if True or False is the correct answer.</p>

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
            <br /><br />
            <div className="form-group">
                <label><strong>Correct Answer:</strong></label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="correct-answer"
                            value="true"
                            checked={correctAnswer === true}
                            onChange={() => setCorrectAnswer(true)}
                        />
                        True
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="correct-answer"
                            value="false"
                            checked={correctAnswer === false}
                            onChange={() => setCorrectAnswer(false)}
                        />
                        False
                    </label>
                </div>
            </div>
            <hr className="me-1" />

            <div className="float-end me-1">

                <button onClick={handleCancel} className="btn btn-secondary me-1">Cancel</button>
                <button onClick={handleSave} className="btn btn-danger">Save</button>

                
            </div>



        </div>
    )
}