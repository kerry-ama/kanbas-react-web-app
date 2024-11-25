import { useState } from "react";
import TextEditor from "./TextEditor";

export default function MultipleChoiceEditor() {
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState(0);
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([]);
    const [correctChoice, setCorrectChoice] = useState(null);

    return (
        <div id="wd-mc-editor">
            <div id="dropdown-container" className="dropdown-row">
            <div className="dropdown">
                    <select
                        defaultValue={"easy"}
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
               
            </div>
            <div className="dropdown">
                <label>
                    <select
                        defaultValue={"Multiple Choice"}
                    >
                        <option value="mc">Multiple Choice</option>
                        <option value="tf">True/False</option>
                        <option value="blank">Fill in the Blank</option>
                    </select>
                </label>
            </div>
            <div className="end">
          
                <input
                    type="number"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    className="form-control"
                />
                </div>
            </div>
            <hr />
            <h6><strong>Question:</strong></h6>
            <div className="mb-2">
                <input 
                    placeholder="Question Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                />
                </div>

            <TextEditor />

        </div>
    )

}