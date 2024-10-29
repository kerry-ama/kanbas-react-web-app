import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function AssignmentListControlButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      
      {currentUser.role === "FACULTY" &&
        <BsPlus className="fs-4"/>}
      <IoEllipsisVertical className="fs-4" />
    </div>
    
   
);}