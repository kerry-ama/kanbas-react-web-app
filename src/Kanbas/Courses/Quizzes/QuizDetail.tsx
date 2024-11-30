import { useSelector } from "react-redux";
import * as db from "../../Database";
import { Navigate, useParams } from "react-router";
export default function QuizDetail() {
    const quizzes = db.quizzes;
    const { cid, aid, qid, qeid } = useParams()
    console.log(qid)
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role !== 'FACULTY' && currentUser.role !== "ADMIN") {
        return <Navigate to={`/Kanbas/Courses/${cid}/Quizzes`} />
    }
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
      };
    return (
        <div id="quiz-details">

            <div id="button-container" className="button-container">
                <button className="btn btn-secondary me-1">Preview</button>
                <button className="btn btn-secondary">Edit</button>
            </div>
            <br />
            <hr className="mt-1" />

            {quizzes
                .filter((quiz: any) => quiz._id === qid)
                .map((quiz: any) => (
                    <div className="me-5">
                        <h2>{quiz.title}</h2>


                    </div>

                ))}
            <br />
            {quizzes
                .filter((quiz: any) => quiz._id === qid)
                .map((quiz: any) => (
                    <div className="quiz-details-values mt-3 ms-1">
                        <div className="detail-row">
                            <div className="label">Quiz Type</div>
                            <div>{quiz.quiz_type}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Points</div>
                            <div>{quiz.points}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Assignment Group</div>
                            <div>{quiz.group}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Shuffle Answers</div>
                            <div>{quiz.shuffle_answers}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Time Limit</div>
                            <div>{quiz.time_limit} Minutes</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Multiple Attempts</div>
                            <div>{quiz.multiple_attempts}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Number of Attempts</div>
                            <div>{quiz.num_attempts}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Show Correct Answers</div>
                            <div>{quiz.show_answers}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Access Code</div>
                            <div>{quiz.access_code}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">One Question at a Time</div>
                            <div>{quiz.one_question}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Webcam Required</div>
                            <div>{quiz.webcam}</div>
                        </div>
                        <div className="detail-row">
                            <div className="label">Lock Questions After Answering</div>
                            <div>{quiz.lock_questions}</div>
                        </div>




                    </div>

                ))}
            <hr />
            {quizzes
                .filter((quiz: any) => quiz._id === qid)
                .map((quiz: any) => (
                    
                    <div className="container">
                    {/* Labels Row */}
                    <div className="row justify-content-center">
                        <div className="col-3 text-center">
                            <label><strong>Due</strong></label>
                        </div>
                        <div className="col-3 text-center">
                            <label><strong>For</strong></label>
                        </div>
                        <div className="col-3 text-center">
                            <label><strong>Available From</strong></label>
                        </div>
                        <div className="col-3 text-center">
                            <label><strong>Until</strong></label>
                        </div>
                    </div>
                    <hr />

                    {/* Data Row */}
                    <div className="row justify-content-center mt-3">
                        <div className="col-3 text-center">
                            <p>{formatDate(quiz.due)}</p>
                        </div>
                        <div className="col-3 text-center">
                            <p>Everyone</p>
                        </div>
                        <div className="col-3 text-center">
                            <p>{formatDate(quiz.availability)}</p>
                        </div>
                        <div className="col-3 text-center">
                            <p>{formatDate(quiz.until)}</p>
                        </div>
                    </div>
                </div>
                   
                ))}  
                <br />   
                <hr />


        </div>
    );

}