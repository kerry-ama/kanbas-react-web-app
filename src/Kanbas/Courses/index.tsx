import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizQuestionEditor from "./Quizzes/QuizQuestionEditor";
import QuizDetail from "./Quizzes/QuizDetail";
import MultipleChoiceEditor from "./Quizzes/MultipleChoiceEditor";
import TrueFalseEditor from "./Quizzes/TrueFalseEditor";
import FillBlankEditor from "./Quizzes/FillBlankEditor";
import QuizPreview from "./Quizzes/QuizPreview";
export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
                </h2><hr />
            <div className="d-flex">
                <div className="d-none d-md-block">   
                        <CoursesNavigation />
                </div>  
                <div className="flex-fill"> 
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/new" element={<AssignmentEditor />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} /> 
                            <Route path="Quizzes" element={<Quizzes />} />
                            <Route path="Quizzes/new" element={<QuizEditor />} />
                            <Route path="Quizzes/:qid/TFEditor/new" element={<TrueFalseEditor />} />
                            <Route path="Quizzes/:qid/FillBlankEditor/new" element={<FillBlankEditor />} />
                            <Route path="Quizzes/:qid/MCEditor/new" element={<MultipleChoiceEditor />} />
                            <Route path="Quizzes/:qid/TFEditor/:qeid" element={<TrueFalseEditor />} />
                            <Route path="Quizzes/:qid/FillBlankEditor/:qeid" element={<FillBlankEditor />} />
                            <Route path="Quizzes/:qid/MCEditor/:qeid" element={<MultipleChoiceEditor />} />
                            {/*<Route path="Quizzes/new" element={<MultipleChoiceEditor />} />*/}
                            {/*<Route path="Quizzes/new" element={<TrueFalseEditor />}/>*/}
                            {/*<Route path="Quizzes/new" element={<FillBlankEditor />}/>*/}
                            {/*<Route path="Quizzes/new" element={<QuizPreview />}/>*/}
                            <Route path="Quizzes/:qid" element={<QuizDetail />} />
                            <Route path="Quizzes/:qid/:qeid" element={<QuizQuestionEditor />} />
                            <Route path="Quizzes/:qid/MC" element={<MultipleChoiceEditor />}/>
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
            </div></div>             
                    
        </div>
    );
}

