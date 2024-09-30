export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <form >
                <label htmlFor="wd-name" className="col-sm-10 ms-1">
                    <strong>Assignment Name</strong></label>
                <div className="col-sm-10 ms-7">
                    <input className="form-control"
                        placeholder="alice"
                        id="username"/>
                </div>
                <div>
                    <p className="form-control col-sm-10 me-10" >
                        The assignment is available online.<br /><br />

                        Submit a link to the landing page of your Web application running on Netlify.<br />

                        The landing page should include the following:<br />
                        <ul>
                            <li>Your full name and section</li>
                            <li>Links to each of the lab assignments</li>
                            <li>Link to the Kanbas assigment</li>
                            <li>Links to all relevant code repositories</li>
                        </ul><br />
                        The Kanbas application should include a link to navigate back to the landing page.
                    </p>
                </div>

            </form>
            <label htmlFor="wd-name"><strong>Assigment Name</strong></label><br /><br /> {/* clicking this label */}
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /> {/* selects this field */}
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br /><br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label> {/* clicking this label */}
                    </td>
                    <td>
                        <input id="wd-points" value={100} /> {/* selects this field */}
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label> {/* clicking this label */}
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as </label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" >
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type </label>
                    </td>
                    <td>
                        <select id="wd-submission-type" >
                            <option value="Online">Online</option>
                        </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="left" valign="top">
                        <label>Online Entry Options</label><br />
                        <input type="checkbox" name="check-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to </label><br />
                    </td><br />
                </tr>
                <tr>
                    <td>
                        <input id="wd-assign-to" value={"Everyone"} /> {/* selects this field */}
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="wd-available-from"> Available From </label><br />
                        <input type="date" id="wd-available-from" value="2024-05-06" /><br />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br />
                        <input type="date" id="wd-available-until" value="2024-05-20" />
                    </td>
                </tr><br />
                <td align="right">
                    <button type="button">Cancel </button>
                    <button type="button">Save</button>
                </td>

                {/* Complete on your own */}
            </table>
        </div>
    );
}
