import TextEditor from "./TextEditor";

export default function MultipleChoiceEditor() {
    
    return (
        <div id="wd-mc-editor">
            <div className="dropdown">
          <label>
            <select
              defaultValue={"easy"}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>
        <hr />
            <h6><strong>Question:</strong></h6>
        <TextEditor />

        </div>
    )
   
}