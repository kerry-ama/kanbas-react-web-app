import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
export default function AssignmentControl() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const navigate = useNavigate();
    const {cid, aid} = useParams();
    const addAssignment = () => {
        
    
      navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
    };

    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            {currentUser.role === "FACULTY" &&
            <button onClick={addAssignment}  id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>}
        {currentUser.role === "FACULTY" &&
        <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end ms-3">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>}
            <form >
                
                    
                    <div className="col-sm-3 d-flex align-items-center float-end mb-5">
                    
                        <input className="form-control " 
                            placeholder="&#128270; Search..."
                            id="username"
                            type="search"
                            
                            >
                            
                            </input>
                            
                            

                    </div>
                    
               

            </form>
            
        </div>

    )
}