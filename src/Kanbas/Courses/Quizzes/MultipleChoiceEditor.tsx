import { useState } from "react";
import TextEditor from "./TextEditor";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function MultipleChoiceEditor() {
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState(0);
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([{ id: 1, text: "", isCorrect: false }]);
    const [correctChoice, setCorrectChoice] = useState(null);

    const addChoice = () => {
        const newChoice = { id: choices.length + 1, text: "", isCorrect: false };
        setChoices([...choices, newChoice]);
    };

    // Remove a choice
    const removeChoice = (id: any) => {
        setChoices(choices.filter((choice) => choice.id !== id));
    };

    // Update choice text
    const updateChoiceText = (id: any, text: any) => {
        setChoices(
            choices.map((choice) =>
                choice.id === id ? { ...choice, text } : choice
            )
        );
    };

    // Select the correct choice
    const selectCorrectChoice = (id: any) => {
        setChoices(
            choices.map((choice) =>
                choice.id === id ? { ...choice, isCorrect: true } : { ...choice, isCorrect: false }
            )
        );
    };

    // Save or cancel actions
    const handleSave = () => {
        const selectedCorrectChoice = choices.find(choice => choice.isCorrect);
        if (!selectedCorrectChoice) {
            alert("Please select the correct choice.");
            return;
        }
        // Implement save logic (e.g., API call or Redux action)
        console.log({ title, points, question, choices });
    };

    const handleCancel = () => {
        // Reset the form
        setTitle("");
        setPoints(0);
        setQuestion("");
        setChoices([{ id: 1, text: "", isCorrect: false }]);
    };
    return (
        <div id="wd-mc-editor">
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
                            defaultValue={"Multiple Choice"} style={{ height: "30px" }}
                        >
                            <option value="mc">Multiple Choice</option>
                            <option value="tf">True/False</option>
                            <option value="blank">Fill in the Blank</option>
                        </select>
                    </label>
                </div>

                <div className="flex-end-mc">
                    <label style={{ marginRight: "8px" }}>Points:</label>
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
            <h6><strong>Question Title:</strong></h6>
            <div className="mb-2">
                <input
                    placeholder="Question Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="question-text"><strong>Question Text:</strong></label>
                <ReactQuill
                    id="question-text"
                    theme="snow"
                    value={question}
                    onChange={setQuestion}
                    placeholder="Enter the question text here..."
                />
            </div>

          
            <hr />
            <div>
                <h6><strong>Answers:</strong></h6>
            </div>
            <div className="form-group">
                <label>Choices:</label>
                {choices.map((choice) => (
                    <div key={choice.id} className="choice-row">
                        <input
                            type="radio"
                            name="correctChoice"
                            checked={choice.isCorrect}
                            onChange={() => selectCorrectChoice(choice.id)}
                        />
                        <input
                            value={choice.text}
                            onChange={(e) => updateChoiceText(choice.id, e.target.value)}
                            className="form-control"
                            placeholder={`Choice ${choice.id}`}
                        />
                        <button
                            type="button"
                            onClick={() => removeChoice(choice.id)}
                            className="btn btn-danger"
                            disabled={choices.length === 1} // Prevent removing the last choice
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={addChoice}
                className="btn btn-primary"
            >
                Add Choice
            </button>

            <hr className="me-1" />

            <div className="float-end me-1">

                <button onClick={handleCancel} className="btn btn-secondary me-1">Cancel</button>
                <button onClick={handleSave} className="btn btn-danger">Save</button>

                
            </div>
        </div>



    )

}