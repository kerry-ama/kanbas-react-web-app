import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { CiBullhorn } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  console.log(currentUser.role)
    return (
      <div className="ms-5" id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        {currentUser.role === "FACULTY"  &&
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>}
        {currentUser.role === "FACULTY" &&
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>}
      </div><br />
      {currentUser.role === "FACULTY" &&
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>}
      {currentUser.role === "FACULTY" &&
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>}
      {/* Complete the rest of the buttons */}
      {currentUser.role === "FACULTY" &&
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <IoMdHome className="me-2 fs-5"/>Choose Home Page</button>}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <RiBarChart2Fill className="me-2 fs-5"/>View Course Screen</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <CiBullhorn className="me-2 fs-5"/>New Announcement</button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <RiBarChart2Fill className="me-2 fs-5"/>New Analytics
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FaBell className="me-2 fs-5"/>View Course Notifications</button>
    </div>
  );}
  