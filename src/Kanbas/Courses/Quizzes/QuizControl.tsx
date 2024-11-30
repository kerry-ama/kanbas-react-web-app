import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
export default function QuizControl() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const {cid, qid} = useParams();
    const navigate = useNavigate();
    const addQuiz = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/new`);
    }
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            {currentUser.role === "FACULTY" || currentUser.role === "ADMIN"  &&
            <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <BsThreeDotsVertical className="position-relative" style={{ bottom: "1px" }} />
        </button>}
        {currentUser.role === "FACULTY" || currentUser.role === "ADMIN" &&   
            <button onClick={addQuiz} id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Quiz</button>}
        
            <form >
                
                    
                    <div className="col-sm-3 d-flex align-items-center float-start mb-5">
                    
                        <input className="form-control " 
                            placeholder="&#128270; Search for Quiz"
                            id="username"
                            type="search"
                            
                            >
                            
                            </input>
                            
                            

                    </div>
                    
               

            </form>
            
        </div>

    )
}