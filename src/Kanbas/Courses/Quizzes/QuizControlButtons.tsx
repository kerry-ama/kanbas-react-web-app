import { IoEllipsisVertical } from "react-icons/io5";
import QuizGreenCheckmark from "./QuizGreenCheckmark";
export default function QuizControlButtons() {
  return (
    <div className="float-end">
      <QuizGreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}