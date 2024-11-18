import { Link } from "react-router-dom";
import * as db from "../Database";
import React, { useState, useEffect } from "react";
import { unenrollCourse, enrollCourse }
  from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnrollments } from "./client";
import { fetchAllCourses } from "../Courses/client";
import * as coursesClient from "../Courses/client";
import * as dashboardClient from "./client";
export default function Dashboard({
  courses, course, setCourse, addNewCourse,
   deleteCourse, updateCourse, allCourses, setAllCourses, enrollments2, setEnrollments }: {
   courses: any[]; course: any; setCourse: (course: any) => void;
   addNewCourse: () => void; deleteCourse: (course: any) => void;
   updateCourse: () => void; allCourses: any[]; setAllCourses: (allCourses: any) => void;
    enrollments2: any[]; setEnrollments: (enrollments: any) => void;})  {
  
   const { currentUser } = useSelector((state: any) => state.accountReducer);
   console.log("current user")
   console.log(currentUser)


   //const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
  //const { enrollments } = db;
  //const [enrollments, setEnrollments] = useState(db.enrollments);
  //const [enrollments, setEnrollments] = useState<{ user: string; course: string }[]>([]);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
  const dispatch = useDispatch();
  const [displayedCourses, setDisplayedCourses] = useState(courses);
  const [showAllCourses, setShowAllCourses] = useState(true);


  
  const [showAll, setAll] = useState(allCourses);

  console.log(showAllCourses);

  useEffect(() => {
    const initializeEnrollments = async () => {
      try {
        const enrollments = await fetchEnrollments(currentUser._id);
        dispatch({ type: "SET_ENROLLMENTS", payload: enrollments });
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    };
  
    initializeEnrollments();
  }, [currentUser._id, dispatch]);
  

  const isStudent = currentUser.role === "STUDENT";

  // Toggle showing all courses vs only enrolled courses for students
  //db call fetch courses then set
  //const toggleEnrollmentView = () => setShowAllCourses(!showAllCourses);
  console.log(showAllCourses);
  /*
  const toggleEnrollmentView = async () => {
    if (showAllCourses) {
      dispatch(allCourses)
    } else {
    setShowAllCourses(!showAllCourses);
    }
  }; 
  */
  const fetchAllCourses = async () => {
    try {
      const courses = await coursesClient.fetchAllCourses();
      setAllCourses(courses);
      setDisplayedCourses(courses); // Initialize displayed courses with all courses
    } catch (error) {
      console.error(error);
    }
  };

  const toggleEnrollmentView = async () => {
    if (showAllCourses) {
      try {
        // Fetch enrollments for the current user
        const enrollments = await fetchEnrollments(currentUser._id);
        const enrolledCourseIds = enrollments.map((enrollment: any) => enrollment.course);
  
        // Display only enrolled courses
        setDisplayedCourses(courses.filter((course: any) =>
          enrolledCourseIds.includes(course._id)
        ));
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    } else {
      // Display all courses
      //const all = await fetchAllCourses();
      //setDisplayedCourses(all);
      console.log("else ")
      setAllCourses(allCourses);
      console.log(allCourses)
      
    }
    setShowAllCourses(!showAllCourses); // Toggle the view state
  };
  
  

  // Check if the student is enrolled in a course
 

  const isEnrolled = (courseId: string) =>
    enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId);
  console.log("ENROLLMENTS", enrollments);
  console.log(currentUser);
 




  const handleEnrollmentToggle = async (courseId: string) => {
    const payload = { userId: currentUser._id, courseId };
    console.log(payload)
    if (isEnrolled(courseId)) {
      //dispatch(unenrollCourse(payload));
      await dashboardClient.unenrollUserFromCourse(currentUser._id, courseId);
      dispatch(unenrollCourse(payload));
      setDisplayedCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );
     
    } else {
     //dispatch(enrollCourse(payload));

     await dashboardClient.enrollUserInCourse(currentUser._id, courseId);
      dispatch(enrollCourse(payload));
      const courseToEnroll = courses.find((course) => course._id === courseId);
      if (courseToEnroll) {
        setDisplayedCourses((prevCourses) => [...prevCourses, courseToEnroll]);
      }
      //const courseToEnroll = courses.find((course) => course._id === courseId);
      //dispatch(enrollCourse(courseToEnroll));
      //console.log(dispatch(enrollCourse(courseToEnroll)))
      //console.log(courseToEnroll)
      
      //if (courseToEnroll) {
        //setDisplayedCourses((prevCourses) => [...prevCourses, courseToEnroll]);
        //console.log(setDisplayedCourses((prevCourses) => [...prevCourses, courseToEnroll]))

      //}
    }
   
  };
 
 


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isStudent && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={toggleEnrollmentView}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}
      <div>
      <h5>New Course
      {currentUser.role === "FACULTY" &&
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>}
          {currentUser.role === "FACULTY" &&
                  <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
          </button>}
          {currentUser.role === "FACULTY" &&
      <hr />}<br /> 
      </h5>
      </div>
      {currentUser.role === "FACULTY" &&
      <input defaultValue={course.name} value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />}
      {currentUser.role === "FACULTY" &&
      <textarea defaultValue={course.description} value={course.description} className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {allCourses
            .filter((course) => 
              showAllCourses || isEnrolled(course._id) || currentUser.role === "FACULTY"
            )
          
             /*} .filter((course) =>
                enrollments.some(
                  (enrollment) => 
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                   )) */
                    
                    
          .map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.image} width="100%" height={160} />
                  <div className="card-body" style={{height: '220px'}}>
                    <h5 className="wd-dashboard-course-title card-title text-truncate" title={course.name}>
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden truncate" title={course.description} style={{ maxHeight: 100 }}>
                      {course.description} </p>

                    <div style={{position: 'absolute', bottom: '10px',}}>

                    {isStudent ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleEnrollmentToggle(course._id);
                            }}
                            className={`btn ${isEnrolled(course._id) ? 'btn-danger' : 'btn-success'}`}
                          >
                            {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                          </button>
                        ) : (
                          <>


                    <button className="btn btn-primary me-5"> Go </button>
                    <div className="float-end">
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                    </div>
                    </>
                        )}
                    </div>
                    

                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


{/*export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
      
          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CS1234 Web Development</strong>
                  </h5>
                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 1 Fall 2023 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2232/Home">
                <img src="/images/nodejs.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CS2232 Software Engineering</strong>
                  </h5>
                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 1 Fall 2023 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5500/Home">
                <img src="/images/cybersecurity.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CY5500 Fourndation of Cybersecurity</strong>
                  </h5>
                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 1 Spring 2024 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>


          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2020/Home">
                <img src="/images/computervision.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CS2020 Computer Vision</strong>
                  </h5>
                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 3 Spring 2024 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6000/Home">
                <img src="/images/hci.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CS6000 Human Computer Interaction</strong>
                  </h5>
                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 1 Summer 2024 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>


          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/6500/Home">
                <img src="/images/ml.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CS6500 Machine Learning</strong>
                  </h5>
                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 2 Summer 2024 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home">
                <img src="/images/dbms.jpg" width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CS5001 Database Management Systems</strong>
                  </h5>
                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 1 Fall 2024 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col custom-course-margin" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4000/Home">
                <img src="/images/mobiledev.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title text-truncate">
                    <strong>CS4000 Mobile App Development</strong>
                  </h5>

                  <p className="wd-dashboard-course-title card-text text-truncate">
                    Sec. 1 Fall 2024 Semester Full Term 
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div >
      </div>

      );
}
*/}



