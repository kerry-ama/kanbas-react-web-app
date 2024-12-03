import { Navigate, useParams, useNavigate } from "react-router";
import { Link, Route } from "react-router-dom";
import * as db from "../../Database";
import Courses from "..";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as quizzesClient from "./client";
import { updateQuiz2, addQuiz } from "./reducer";
import * as coursesClient from "../client";

export default function QuizEditor() {
    const { cid, qid, qeid } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
 



    const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
    const existingQuiz = quizzes?.find((quiz: any) => quiz._id === qid);

    const [title, setTitle] = useState(existingQuiz ? existingQuiz.title : "");
    const [description, setDescription] = useState(existingQuiz ? existingQuiz.description : "");
    const [due, setDue] = useState(existingQuiz ? existingQuiz.due : "");
    const [availableFrom, setAvailableFrom] = useState(existingQuiz ? existingQuiz.availability : "");
    const [until, setUntil] = useState(existingQuiz ? existingQuiz.until : "");


    const [type, setType] = useState(existingQuiz ? existingQuiz.quiz_type : "");
    const [points, setPoints] = useState(existingQuiz ? existingQuiz.points : "");
    const [group, setGroup] = useState(existingQuiz ? existingQuiz.group : 0);
    const [shuffle, setShuffle] = useState(existingQuiz ? existingQuiz.shuffle_answers : "");
    const [time_limit, setTimeLimit] = useState(existingQuiz ? existingQuiz.time_limit : "");
    const [time_limit_text, setTimeLimitText] = useState(existingQuiz ? existingQuiz.time_limit_text : "")
    const [multiple_attempts, setMultipleAttempts] = useState(existingQuiz ? existingQuiz.multiple_attempts : "");
    const [num_attempts, setNumAttempts] = useState(existingQuiz ? existingQuiz.num_attempts : "");
    const [show_answers, setShowAnswers] = useState(existingQuiz ? existingQuiz.show_answers : "");
    const [show_answers_text, setShowAnswersText] = useState(existingQuiz ? existingQuiz.show_answers_text : "");
    const [access_code, setAccessCode] = useState(existingQuiz ? existingQuiz.access_code : "");
    const [one_question, setOneQuestion] = useState(existingQuiz ? existingQuiz.one_question : true);
    const [webcam, setWebcam] = useState(existingQuiz ? existingQuiz.webcam : "");
    const [lock_questions, setLockQuestions] = useState(existingQuiz ? existingQuiz.lock_questions : "");

    const saveQuiz = async (quiz: any) => {
        await quizzesClient.updateQuiz(quiz);
        dispatch(updateQuiz2(quiz));
    };

    const handleSave2 = async () => {
        if (!cid) return;
        const newQuiz = { course: cid, title, description, type,
            points, group, shuffle, time_limit, time_limit_text, multiple_attempts,
            num_attempts, show_answers, show_answers_text, access_code, availability: availableFrom,
            due, webcam, one_question, lock_questions,
            until_editor: until, };
        
        

        const quizData = {
            _id: qid === "new" || !qid ? new Date().getTime().toString() : qid,
            title,
            description,
            type,
            points, group, shuffle, time_limit, time_limit_text, multiple_attempts, num_attempts,
            course: cid,  // Assign to the current course
            availability: availableFrom, show_answers, show_answers_text, access_code,
            due,webcam, one_question, lock_questions,
            until_editor: until,
        };
        

        // Dispatch the action based on whether it's a new assignment or an update
        
        if (existingQuiz) {
            
            saveQuiz(quizData);
      
           

            
          } else {
            const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
            dispatch(addQuiz(quiz));
            
          }

        // Navigate back to the Assignments screen
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };
    const handleCancel = () => {
        // Redirect back to Assignments without saving
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role !== 'FACULTY' && currentUser.role !== 'ADMIN') {
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
                            placeholder={existingQuiz ? existingQuiz.title : "New Quiz Name"}
                            id="wd-quiz-name"
                            onChange={(e) => setTitle(e.target.value)} />
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
                    {/*{quizzes
                        .filter((assignment: any) => assignment._id === qid)
                        .map((assignment: any) => (*/}
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
                    {/*))}*/}
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

                    <div className="row justify-content-center mb-3">
                        <div className="col-2 float-end">
                            <label htmlFor="wd-points">Access Code </label>
                        </div>
                        <div className="col-5">
                            <input id="wd-access_code"
                                className="form-control ms-7 mb-3 w-50 ms-1"
                                value={access_code}
                                onChange={(e) => setAccessCode((e.target.value))}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-2 float-end">
                                <label htmlFor="wd-points">Points </label>
                            </div>
                            <div className="col-5">
                                <input id="wd-points" type="number"
                                    className="form-control ms-7 mb-3 w-50 ms-1"
                                    value={points}
                                    onChange={(e) => setPoints(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="col-2 float-end">
                            <label htmlFor="wd-group"></label>
                        </div>
                        <div className="col-5 checkbox">
                            <label className="mb-4"><strong>Options</strong></label><br />
                            <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-shuffle-answers"
                                value={shuffle} onChange={(e) => setShuffle(e.target.value)} />
                            <label htmlFor="wd-shuffle-answers">Shuffle Answers</label><br />

                            <div>
                                <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-time-limit"
                                    value={time_limit} onChange={(e) => setTimeLimit(e.target.checked ? "25" : "")}  />
                                <label htmlFor="wd-time-limit">Time Limit</label><br />
                                {time_limit && (
                                    <input
                                        id="wd-time-limit-text"
                                        type="text"
                                        className="form-control w-25 d-inline ms-2"
                                        placeholder="Enter time in minutes"
                                        value={time_limit_text}
                                        onChange={(e) => setTimeLimitText(e.target.value)}
                                    />
                                     
                                   
                                ) } {time_limit && (<label htmlFor="wd-time-limit-text">Minutes</label>)}

                            </div>
                            <div>
                            <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-show-answers"
                                checked={show_answers} onChange={(e) => setShowAnswers(e.target.checked ? "1" : "")} />
                            <label htmlFor="wd-show-answers">Show Correct Answers</label><br />
                            {show_answers && (
                                    <input
                                        id="wd-show-answers-text"
                                        type="text"
                                        className="form-control w-25 d-inline ms-2"
                                        placeholder="Enter time in minutes"
                                        value={show_answers}
                                        onChange={(e) => setShowAnswers(e.target.value)}
                                    />
                                     
                                   
                                ) } {show_answers && (<label htmlFor="wd-show-answers-text">Days</label>)}
                            </div>
                            <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-one"
                                defaultChecked={one_question} value={one_question} onChange={(e) => setOneQuestion(e.target.value)} />
                            <label htmlFor="wd-one">One Question at a Time</label><br />

                            <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-webcam"
                                value={webcam} onChange={(e) => setWebcam(e.target.value)} />
                            <label htmlFor="wd-webcam">Webcam Required</label><br />

                            <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-lock"
                                value={lock_questions} onChange={(e) => setLockQuestions(e.target.value)} />
                            <label htmlFor="wd-lock">Lock Questions After Answering</label><br />

                            <div className="card p-1 mb-4 justify-content-center">
                                <span>
                                    <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-multiple-attempts"
                                        value={multiple_attempts} onChange={(e) => setMultipleAttempts(e.target.value)} />
                                    <label htmlFor="wd-multiple-attempts">Allow Multiple Attempts</label>
                                </span>
                            </div>


                        </div>


                    </div>
                    {/*{quizzes
                        .filter((assignment: any) => assignment._id === qid)
                        .map((assignment: any) => (*/}
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
                                value={due}
                                onChange={(e) => setDue(e.target.value)} />

                            <form>
                                <div className="row mt-1">
                                    <div className="col-5 mt-1">
                                        <label className="form-label" htmlFor="wd-available-from"> Available From </label>
                                        <input className="form-control w-60" type="datetime-local" id="wd-available-from"
                                            value={availableFrom}
                                            onChange={(e) => setAvailableFrom(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-5 mt-1 mb-2">
                                        <label htmlFor="wd-available-until">Until</label>
                                        <input className="form-control w-60 mt-2" type="datetime-local" id="wd-available-until"
                                            value={until}
                                            onChange={(e) => setUntil(e.target.value)} />
                                    </div>
                                </div>
                            </form>
                            <span className="justify-content-center">
                                <button style={{ width: '550px' }}>+ Add</button>
                            </span>
                        </div>
                    </div>
                    {/*))}*/}
                </div>
            </form>


            <div className="row justify-content-center">
                <div className="col-1">
                    <hr />
                    <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                    {/*<Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-secondary me-1" type="button">Cancel </Link>*/}
                    <hr />
                </div>
                <div className="col-1">
                    <hr />
                    <button onClick={handleSave2} className="btn btn-danger">Save</button>
                    {/*<Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn btn-danger" type="button">Save</Link>*/}
                    <hr />
                </div>
            </div>

        </div>
    );
}