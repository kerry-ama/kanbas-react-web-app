import { Link, useLocation, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { courses } from "../Database";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { pathname } = useLocation();
 
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
     
      {links.map((link) => (
        <NavLink to={`/Kanbas/Courses/${cid}/${link}`} className={`list-group-item border border-0 mt-1
        ${pathname.includes(link) ? 'active' : 'text-danger'}`}>
          {link}
        </NavLink>
      ))}
      {/*
      <NavLink to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className={({ isActive }) => 
          `list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}>Home</NavLink>
      <NavLink id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>Modules</NavLink>
      <NavLink id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza"
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>Piazza</NavLink>
      <NavLink id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom"
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>Zoom</NavLink>
      <NavLink id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments"
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>Assignments</NavLink>
      <NavLink id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes"
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>Quizzes </NavLink>
      <NavLink id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades"
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>Grades</NavLink>
      <NavLink id="wd-course-people-link" to="/Kanbas/Courses/1234/People"
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>People</NavLink>
      */}    
    </div>
  );
}
