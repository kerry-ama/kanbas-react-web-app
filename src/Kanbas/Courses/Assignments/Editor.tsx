import { Navigate, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import Courses from "..";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, editAssignment,
    updateAssignment, deleteAssignment }
from "./reducer";
import { useState } from "react";


export default function AssignmentEditor() {
    //{ assignmentName, assignmentDescription, setAssignmentName, addAssignment }:

    //{ assignmentName: string; assignmentDescription: string; setAssignmentName: (name: string) => void; addAssignment: () => void; }
    const [assignmentName, setAssignmentName] = useState("");
    const {cid, aid} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const assignments = db.assignments;

    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    //const existingAssignment = useSelector((state: any) =>
      //  state.assignmentsReducer.assignments.find((assignment) => assignment._id === aid)
      //);
    
    const existingAssignment = assignments?.find((assignment: any) => assignment._id === aid);
    

    // Set up state for assignment fields, with defaults if it’s a new assignment
    const [title, setTitle] = useState(existingAssignment ? existingAssignment.title : "");
    const [description, setDescription] = useState(existingAssignment ? existingAssignment.description : "");
    const [points, setPoints] = useState(existingAssignment ? existingAssignment.points : 0);
    const [due, setDue] = useState(existingAssignment ? existingAssignment.due : "");
    const [availableFrom, setAvailableFrom] = useState(existingAssignment ? existingAssignment.availability : "");
    const [until, setUntil] = useState(existingAssignment ? existingAssignment.until_editor : "");


   

    const handleSave = () => {
        const assignmentData = {
            _id: aid === "new" || !aid ? new Date().getTime().toString() : aid,
            title,
            description,
            points,
            course: cid,  // Assign to the current course
            availability: availableFrom,
            due,
            until,
        };
        console.log(assignmentData._id)

        // Dispatch the action based on whether it's a new assignment or an update
        if (existingAssignment) {
            dispatch(updateAssignment(assignmentData));

            
          } else {
            dispatch(addAssignment(assignmentData));
            console.log(dispatch(addAssignment(assignmentData)))
          }

        // Navigate back to the Assignments screen
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleCancel = () => {
        // Redirect back to Assignments without saving
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };


    //console.log(aid)
    //const assignments = db.assignments;
    const courses = db.courses;
    const course = courses.find((course) => course._id === cid);
    const users = db.users;
    
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role !== 'FACULTY') {
        return <Navigate to={`/Kanbas/Courses/${cid}/Assignments`}/>
    }
    //console.log(course)
    //const { assignments } = useSelector((state: any) => state.assignmentsReducer);
      //const dispatch = useDispatch();
   //write logic such that its new...state variables that 
   //const assignment = assignments.find((assignment) => assignment._id === aid);
   
   
    
  
    //save dispatch to the reducer
    //fields editing useState
    return (
     
        <div id="wd-assignments-editor w-100">
            <form>
            {/*{assignment && 
                //.filter((assignment: any) => assignment._id === aid)
                //.map((assignment: any) => (*/}
                <div className="me-5">
                    <label htmlFor="wd-name" className="col-sm-10 ms-10">
                        
                        <strong>Assignment Name</strong></label>
                    <div className="w-100 mb-3">
                        <input className="form-control"
                            //placeholder={`${assignment.title}`}
                            value={title}
                            placeholder={existingAssignment ? existingAssignment.description : "New Assignment Name"}
                            id="wd-name"

                           onChange={(e) => setTitle(e.target.value)}
                            //onChange={(e) => 
                              //  dispatch(
                                //updateAssignment({ ...assignment, name: setTitle(e.target.value) }))}
                            />
                            
                    </div>
                </div>
                
                
            
                {/*))}*/}
             
                 
                <div className="me-5">
                {/*{assignment && 
                //.filter((assignment: any) => assignment._id === aid)
                //.map((assignment: any) => (*/}
                    <textarea className="form-control mb-3 w-100" rows={10} 
                        value={description}
                        placeholder={existingAssignment ? existingAssignment.title : "New Assignment Description"}
                        onChange={(e) => setDescription(e.target.value)}
                        

                    />
                    {/*))}*/}
                </div>

                {/*{assignment && 
                //.filter((assignment: any) => assignment._id === aid)
                //.map((assignment: any) => (*/}
                <div>
                    <div className="d-flex justify-content-end me-5">
                        <label htmlFor="wd-points">Points </label>
                        <input id="wd-points" type="number" 
                        className="form-control ms-7 mb-3 w-50 ms-1" 
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))} 
                         />
                        
                    </div>
                </div>
                {/*))}*/}
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
                                <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-text-entry" />
                                <label htmlFor="wd-text-entry">Text Entry</label><br />

                                <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-website-url" />
                                <label htmlFor="wd-website-url">Website URL</label><br />

                                <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-media-recordings" />
                                <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                                <input className="mb-4 me-1" type="checkbox" name="check-entry" id="wd-student-annotation" />
                                <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                                <input className="mb-3 me-1" type="checkbox" name="check-entry" id="wd-file-upload" />
                                <label htmlFor="wd-file-upload">File Uploads</label>


                            </div>
                        </div>
                    </div>
                </div>
                {/*{assignment && 
                //.filter((assignment: any) => assignment._id === aid)
                //.map((assignment: any) => (*/}
                <div className="d-flex justify-content-end me-5">
                    <label className="me-1" htmlFor="wd-assign">Assign </label>
                    <div className="card p-3 w-50">
                        <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
                        
                        <input id="wd-assign-to" value={"Everyone"} /> {/* selects this field */}
                        
                        <label htmlFor="wd-due-date">Due</label>
                        <input type="datetime-local"
                            id="wd-due-date"
                            value={due} 
                            onChange={(e) => setDue(e.target.value)}  />

                        <form>
                            <div className="row mt-1">
                                <div className="col mt-1">
                                    <label className="form-label" htmlFor="wd-available-from"> Available From </label>
                                    <input className="form-control w-60" type="datetime-local" id="wd-available-from" 
                                    value={availableFrom} 
                                    onChange={(e) => setAvailableFrom(e.target.value)}  />
                                </div>
                                <div className="col mt-1">
                                    <label htmlFor="wd-available-until">Until</label>
                                    <input className="form-control w-60 mt-2" type="datetime-local" id="wd-available-until" 
                                    value={until} 
                                    
                                    onChange={(e) => setUntil(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*))}*/}
            </form>
            <hr className="me-5" />
           
            <div className="float-end me-5">
            
            <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>
            <button onClick={handleSave} className="btn btn-danger">Save</button>
               
                {/*<Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-1" type="button">Cancel </Link>
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger" type="button">Save</Link>*/}
            </div>
          

            {/*<form>
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
                        
                        <input id="wd-assign-to" value={"Everyone"} /> /* selects this field */}
                        
                        {/*<label htmlFor="wd-due-date">Due</label>
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" />

                        <form>
                            <div className="row mt-1">
                                <div className="col mt-1">
                                    <label className="form-label" htmlFor="wd-available-from"> Available From </label>
                                    <input className="form-control w-50" type="date" id="wd-available-from" value="2024-05-06" />
                                </div>
                                <div className="col mt-1">
                                    <label htmlFor="wd-available-until">Until</label>
                                    <input className="form-control w-50 mt-2" type="date" id="wd-available-until" value="2024-05-20" />
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
            </div>*/}


        </div> 
    );
}
