import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      {/*<button type="button">Publish All</button>*/}
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
      {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    


      {/*<ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1<ModuleControlButtons /></div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES<LessonControlButtons /></li>
            
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />
              Introduction to the course<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-5 fs-3" />Learn what is Web Development<LessonControlButtons /></li>
            
            <span className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons /></span>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Full Stack Developer - Chapter 2 - Creating User<LessonControlButtons /></li>
            
            <span className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></span>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Introduction to Web Development<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Creating an HTTP server with Node.js<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Creating a React Application<LessonControlButtons /></li>
            

          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

          <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" />Week 2<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Learn how to create user interfaces with HTML<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Deploy the assignment to Netlify<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Introduction to HTML and the DOM<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Formatting Web content with Headings<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Formatting content with Lists and Tables<LessonControlButtons /></li>
            

          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" />Week 3<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Introduction to CSS<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Styling Color and Background<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Styling Dimensions and Positions<LessonControlButtons /></li>
            <span className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons /></span>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Full Stack Developer - Chapter 3 - Styling User Interfaces with Cascading Style Sheets<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Introduction to Cascading Style Sheets<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Styling with Colors<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />Size & Position<LessonControlButtons /></li>
            
          </ul>
        </li>
      </ul>*/}
    </div>
  );
}
