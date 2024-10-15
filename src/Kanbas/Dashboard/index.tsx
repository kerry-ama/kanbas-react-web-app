import { Link } from "react-router-dom";
import * as db from "../Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title text-truncate" title={course.name}>
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden truncate" title={course.description} style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
);}


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



