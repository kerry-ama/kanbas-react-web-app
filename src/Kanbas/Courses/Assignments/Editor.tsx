export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor w-100">
            <form>
                <div className="me-5">
                    <label htmlFor="wd-name" className="col-sm-10 ms-10">
                        <strong>Assignment Name</strong></label>
                    <div className="w-100 mb-3">
                        <input className="form-control"
                            placeholder="alice"
                            id="wd-name" />
                    </div>
                </div>
                <div className="me-5">

                    <textarea className="form-control mb-3 w-100" rows={10} >

                        The assignment is available online.

                        Submit a link to the landing page of your Web application running on Netlify.

                        The landing page should include the following:

                        Your full name and section
                        Links to each of the lab assignments
                        Link to the Kanbas assigment
                        Links to all relevant code repositories

                        The Kanbas application should include a link to navigate back to the landing page.

                    </textarea>
                </div>
                <div>

                    <div className="d-flex justify-content-end me-5">
                        <label htmlFor="wd-points">Points </label>
                        <input id="wd-points" type="number" className="form-control ms-7 mb-3 w-50 ms-1" placeholder="100" />
                    </div>
                </div>
                <div className="d-flex justify-content-end me-5 mb-3">
                    <label htmlFor="wd-group">Assignment Group</label>
                    <select className="form-select w-50 ms-1" name="wd-group" id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </div>

                <div className="d-flex justify-content-end me-5 mb-3">
                    <label htmlFor="wd-display-grade-as">Display Grade as </label>
                    <select className="form-select w-50 ms-1" id="wd-display-grade-as" >
                        <option value="Percentage">Percentage</option>
                    </select>
                </div>
                <div className="d-flex justify-content-end me-5">
                    <label htmlFor="wd-submission-type">Submission Type </label>
                    <div className="card p-3 w-50 ms-1 mb-3">
                        <div className="d-flex justify-content-start mt-1">

                            <select className="form-select w-75 ms-1 mb-3" id="wd-submission-type" >
                                <option value="Online">Online</option>
                            </select><br />

                        </div>
                        <div className="d-flex justify-content-start">
                            <div className="checkbox">
                                <label className="mb-4"><strong>Online Entry Options</strong></label><br />
                                <input className="mb-4" type="checkbox" name="check-entry" id="wd-text-entry" />
                                <label htmlFor="wd-text-entry">Text Entry</label><br />

                                <input className="mb-4" type="checkbox" name="check-entry" id="wd-website-url" />
                                <label htmlFor="wd-website-url">Website URL</label><br />

                                <input className="mb-4" type="checkbox" name="check-entry" id="wd-media-recordings" />
                                <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                                <input className="mb-4" type="checkbox" name="check-entry" id="wd-student-annotation" />
                                <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                                <input className="mb-3" type="checkbox" name="check-entry" id="wd-file-upload" />
                                <label htmlFor="wd-file-upload">File Uploads</label>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end me-5">
                    <label className="me-1" htmlFor="wd-assign">Assign </label>
                    <div className="card p-3 w-50">
                        <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
                        
                        <input id="wd-assign-to" value={"Everyone"} /> {/* selects this field */}
                        <label htmlFor="wd-due-date">Due</label>
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" />

                        <form>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label" htmlFor="wd-available-from"> Available From </label>
                                    <input className="form-control w-50" type="date" id="wd-available-from" value="2024-05-06" />
                                </div>
                                <div className="col">
                                    <label htmlFor="wd-available-until">Until</label>
                                    <input className="form-control w-50" type="date" id="wd-available-until" value="2024-05-20" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </form>
            <hr className="me-5" />
            <div className="float-end me-5">
                <button className="btn btn-secondary me-1" type="button">Cancel </button>
                <button className="btn btn-danger" type="button">Save</button>
            </div>


        </div>
    );
}
