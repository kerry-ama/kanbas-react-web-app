import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-col1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
          </div>
        
        <div className="wd-dashboard-course"> 
          <img src="/images/nodejs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" 
              to="/Kanbas/Courses/2232/Home">
              CS2232 Node JS
            </Link>
            <p className="wd-dashboard-course-title">
                Server Side Programming
            </p>
            <Link to="Kanbas/Courses/2232/Home"> Go </Link>
          </div>
        </div>  
        <div className="wd-dashboard-course"> 
          <img src="/images/cybersecurity.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" 
              to="/Kanbas/Courses/5500/Home">
              CS5500 Cybersecurity
            </Link>
            <p className="wd-dashboard-course-title">
                Foundations of Cybersecurity
            </p>
            <Link to="Kanbas/Courses/5500/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
          <img src="/images/computervision.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" 
              to="/Kanbas/Courses/2020/Home">
              CS2020 Computer Vision
            </Link>
            <p className="wd-dashboard-course-title">
                Introduction to Computer Vision
            </p>
            <Link to="Kanbas/Courses/2020/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
          <img src="/images/hci.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" 
              to="/Kanbas/Courses/6000/Home">
              CS6000 HCI
            </Link>
            <p className="wd-dashboard-course-title">
                Human Computer Interaction
            </p>
            <Link to="Kanbas/Courses/6000/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
          <img src="/images/ml.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" 
              to="/Kanbas/Courses/6500/Home">
              CS6500 Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
                Machine Learning
            </p>
            <Link to="Kanbas/Courses/6500/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
          <img src="/images/dbms.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" 
              to="/Kanbas/Courses/5001/Home">
              CS5001 DBMS
            </Link>
            <p className="wd-dashboard-course-title">
                Database Management Systems
            </p>
            <Link to="Kanbas/Courses/5001/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course"> 
          <img src="/images/mobiledev.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link" 
              to="/Kanbas/Courses/4000/Home">
              CS4000 Mobile Development
            </Link>
            <p className="wd-dashboard-course-title">
                Mobile Development
            </p>
            <Link to="Kanbas/Courses/4000/Home"> Go </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
