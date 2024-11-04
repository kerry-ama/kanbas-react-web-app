import { Navigate, useParams, useNavigate } from "react-router";
import { Link, Route } from "react-router-dom";
import * as db from "../../Database";
import Courses from "..";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function QuizEditor() {
    const { cid, aid, qid, qeid } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(aid)
    //const quizzes = db.quizzes;
    const courses = db.courses;
    const course = courses.find((course) => course._id === cid);

    const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    const existingQuiz = quizzes?.find((quiz: any) => quiz._id === qid);

    const [title, setTitle] = useState(existingQuiz ? existingQuiz.title : "");
    const [description, setDescription] = useState(existingQuiz ? existingQuiz.description : "");
    const [points, setPoints] = useState(existingQuiz ? existingQuiz.points : 0);
    

    console.log(course)
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role !== 'FACULTY') {
        return <Navigate to={`/Kanbas/Courses/${cid}/Quizzes`}/>
    }
    return (

        <div id="wd-quiz-editor w-100">
            <form>

                {/*{quizzes
                    .filter((assignment: any) => assignment._id === qid)
                    .map((assignment: any) => (*/}
                        <div className="me-5">
                            <div id="wd-css-navigating-with-tabs">
                                <hr />
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}`}>Details</Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link className="nav-link" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/QE101`}>Questions</Link>
                                    </li>

                                </ul>
                            </div>
                            <label htmlFor="wd-quiz-name" className="col-sm-10 ms-10">

                            </label>
                            <div className="w-100 mb-3">
                                <input className="form-control"
                                    value={title}
                                    placeholder={existingQuiz ? existingQuiz.description : "New Quiz Name"}
                                    id="wd-quiz-name" />
                            </div>
                        </div>



                    {/*))}*/}


                <div className="me-5">
                    {/*{quizzes
                        .filter((assignment: any) => assignment._id === qid)
                        .map((assignment: any) => (*/}
                            <textarea className="form-control mb-3 w-100" rows={10} 
                                value={description}
                                placeholder={existingQuiz ? existingQuiz.description : "New Quiz Description"}
                                onChange={(e) => setDescription(e.target.value)}

                            />
                        {/*))}*/}
                </div>
                <div id="quiz-editor-grid">
                    {quizzes
                        .filter((assignment: any) => assignment._id === qid)
                        .map((assignment: any) => (
                            <div>
                                <div className="row justify-content-center">
                                    <div className="col-2 float-end">
                                        <label htmlFor="wd-group">Quiz Type</label>
                                    </div>
                                    <div className="col-5">
                                        <select className="form-select w-50 mb-3" name="wd-group" id="wd-group">
                                            <option defaultValue="Graded Quiz">Graded Quiz</option>
                                            <option value="Practice Quiz">Practice Quiz</option>
                                            <option value="Graded Survey">Graded Survey</option>
                                            <option value="Ungraded Survey">Ungraded Survey</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        ))}
                    <div className="row justify-content-center mb-3">
                        <div className="col-2 float-end">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </div>
                        <div className="col-5">
                        <select className="form-select w-50" name="wd-group" id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option defaultValue="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                        </div>
                    </div>


                    <div className="row justify-content-center">
                    <div className="col-2 float-end">
                            <label htmlFor="wd-group"></label>
                        </div>
                            <div className="col-5 checkbox">
                                <label className="mb-4"><strong>Options</strong></label><br />
                                <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-shuffle-answers" />
                                <label htmlFor="wd-shuffle-answers">Shuffle Answers</label><br />

                                <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-time-limit" />
                                <label htmlFor="wd-time-limit">Time Limit</label><br />
                                
                                <div className="card p-1 mb-4 justify-content-center">
                                    <span>
                                    <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-multiple-attempts" />
                                    <label htmlFor="wd-multiple-attempts">Allow Multiple Attempts</label>
                                    </span>
                                </div>


                            </div>

                        
                    </div>
                    {quizzes
                        .filter((assignment: any) => assignment._id === qid)
                        .map((assignment: any) => (
                            <div className="row justify-content-center ms-5">
                                <div className="col-2">
                                    <label className="me-5" htmlFor="wd-assign">Assign </label>
                                </div>
                                <div className="col-5 card p-3 w-50">
                                    <label htmlFor="wd-assign-to"><strong>Assign to</strong></label><br />

                                    <input id="wd-assign-to" value={"Everyone"} /> {/* selects this field */}
                                    
                                    <label htmlFor="wd-due-date"><strong>Due</strong></label>
                                    <input type="datetime-local"
                                        id="wd-due-date"
                                        value={assignment.due} />

                                    <form>
                                        <div className="row mt-1">
                                            <div className="col-5 mt-1">
                                                <label className="form-label" htmlFor="wd-available-from"> Available From </label>
                                                <input className="form-control w-60" type="datetime-local" id="wd-available-from" value={assignment.availability} />
                                            </div>
                                            <div className="col-5 mt-1">
                                                <label htmlFor="wd-available-until">Until</label>
                                                <input className="form-control w-60 mt-2" type="datetime-local" id="wd-available-until" value={assignment.due} />
                                            </div>
                                        </div>
                                    </form>
                                    <button>+ Add</button>
                                </div>
                            </div>
                        ))}
                </div>
            </form>
            

            <div className="row justify-content-center">
                <div className="col-1">
                    <hr />
                <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-secondary me-1" type="button">Cancel </Link>
                <hr />
                </div>
                <div className="col-1">
                    <hr />
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-danger" type="button">Save</Link>
                    <hr />
                </div>
            </div>

        </div>
    );
}