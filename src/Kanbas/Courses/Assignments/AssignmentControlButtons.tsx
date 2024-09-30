import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentGreenCheckmark from "./AssignmentGreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <AssignmentGreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}