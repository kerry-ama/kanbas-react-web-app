import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as db from "./Database";
import { useEffect, useState } from "react";
import "./styles.css";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";


export default function Kanbas() {
  //const [courses, setCourses] = useState<any[]>(db.courses);
  const [courses, setCourses] = useState<any[]>([]);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchEnrollments = async () => {
    let enrollments = [];
    try {
      enrollments = await courseClient.findEnrollmentsForUser(currentUser);
    } catch (error) {
      console.error(error);
    }
    setEnrollments(enrollments);
    console.log(enrollments);
  }

  const fetchAllCourses = async () => {
    let allCourses = [];
    try {
      allCourses = await courseClient.fetchAllCourses();
    } catch (error) {
      console.error(error);
    }
    setAllCourses(allCourses);
    console.log(allCourses);


  }

  const fetchCourses = async () => {
    let courses = [];
    try {
      courses = await userClient.findMyCourses();
    } catch (error) {
      console.error(error);
    }
    setCourses(courses);
    console.log(courses);
  };
  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
    fetchEnrollments();
  }, [currentUser]);

 
  

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number", image: "/images/reactjs.jpg",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
    //setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    //<Provider store={store}>
          <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<ProtectedRoute><Dashboard courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
              allCourses={allCourses}
              setAllCourses={setAllCourses}
              enrollments2={enrollments}
              setEnrollments2={setEnrollments}
              
              
              /></ProtectedRoute>} />
            <Route path="/Courses/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>


      </div>
      </Session>
    //</Provider>

  );
}
