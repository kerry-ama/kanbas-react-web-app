import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentControl() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
        <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
            <form >
                <div className="form-group row d-flex justify-content-start">
                    
                    <div className="col-sm-3">
                        <input className="form-control " 
                            placeholder="Search..."
                            id="username"
                            />
                            <HiMagnifyingGlass />

                    </div>
                </div>

            </form>
            
        </div>

    )
}