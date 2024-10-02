import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      {/*<button type="button">Publish All</button>*/}
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1<ModuleControlButtons /></div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES<LessonControlButtons /></li>
            {/*<span className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</span>*/}
            {/*<ul className="wd-content list-group-item p-3 ps-1">*/}
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" />
              Introduction to the course<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-5 fs-3" />Learn what is Web Development<LessonControlButtons /></li>
            {/*<li className="wd-content-item">Learn what is Web Development</li>*/}
            {/*</ul>*/}
            <span className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons /></span>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Full Stack Developer - Chapter 2 - Creating User<LessonControlButtons /></li>
            {/*<ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>*/}
            <span className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></span>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Introduction to Web Development<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Creating an HTTP server with Node.js<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-5 fs-3" /> Creating a React Application<LessonControlButtons /></li>
            {/*<ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>*/}

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
            {/*<span className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
                <span className="wd-lesson list-group-item p-3 ps-1">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and </li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>*/}

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
            {/*<li className="wd-lesson">
                <span className="wd-lesson list-group-item p-3 ps-1">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
                <span className="wd-lesson list-group-item p-3 ps-1">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and </li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>*/}
          </ul>
        </li>
      </ul>
    </div>
  );
}
