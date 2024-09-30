import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdAssignment } from "react-icons/md";
import AssignmentListControlButtons from "./AssignmentListControlButtons";
import AssignmentControl from "./AssignmentControl";
import { Link } from 'react-router-dom';
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControl />
      
      <ul className="list-group rounded-0">
        <li className="wd-module list-group-item p-0
                   mb-5 fs-5 border-gray dropdown">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <div className="btn dropdown-toggle"><strong>ASSIGNMENTS</strong></div>
          <AssignmentListControlButtons /> 
          <div className="ellipse float-end">40% of Total </div>
          </div>
          <ul className="wd-assignments-list list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div>
                <Link to="/Kanbas/Courses/1234/Assignments/123" 
                  className="wd-assignment-link indented-text assignment-link"
                   >
                  A1 - ENV + HTML
                </Link><br /><BsGripVertical className="me-2 fs-3" /><MdAssignment className="me-4 fs-3 text-success"/>
                <Link to="/Kanbas/Courses/1234/Assignments/123" className="wd-assignment-link text-danger multiple-modules-link" >
                Multiple Modules
                </Link>  | <strong>Not available until</strong> May 6 at 12:00am | <AssignmentControlButtons /><br />
                <div className="indented-text"><strong>Due</strong> May 13 at 11:59pm | 100 pts</div>
                
              </div>
              
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            
            <Link to="/Kanbas/Courses/1234/Assignments/223" className="wd-assignment-link indented-text assignment-link" >
                A2 - CSS + BOOTSTRAP
            </Link><br />
              <BsGripVertical className="me-2 fs-3" /><MdAssignment className="me-4 fs-3 text-success"/>
              <Link to="/Kanbas/Courses/1234/Assignments/223" className="wd-assignment-link text-danger multiple-modules-link" >
                Multiple Modules
            </Link> | <strong>Not available until</strong> May 13 at 12:00am |<AssignmentControlButtons /><br />
              <div className="indented-text"><strong>Due</strong> May 20 at 11:59pm | 100 pts</div>
              
            </li>
            <li className="wd-assignment-list-item p-3 ps-1">
              <Link to="/Kanbas/Courses/1234/Assignments/333" className="indented-text assignment-link" >
                A3 - JAVASCRIPT + REACT
              </Link><br />
              <BsGripVertical className="me-2 fs-3" /><MdAssignment className="me-4 fs-3 text-success"/>
              <Link to="/Kanbas/Courses/1234/Assignments/333" className="wd-assignment-link text-danger multiple-modules-link" >
                Multiple Modules
            </Link> | <strong>Not available until</strong> May 20 at 12:00am |<AssignmentControlButtons /><br />
              <div className="indented-text"><strong>Due</strong> May 27 at 11:59pm | 100 pts</div>
            </li>
            
          </ul>
          </li>
          
      </ul>


      
    </div>
  );
}
