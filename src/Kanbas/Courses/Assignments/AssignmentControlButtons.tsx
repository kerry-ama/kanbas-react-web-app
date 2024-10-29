import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentGreenCheckmark from "./AssignmentGreenCheckmark";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
export default function AssignmentControlButtons({assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void 
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" &&
        <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />}
      <AssignmentGreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}