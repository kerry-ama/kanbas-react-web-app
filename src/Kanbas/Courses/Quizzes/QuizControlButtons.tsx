import { IoEllipsisVertical } from "react-icons/io5";
import QuizGreenCheckmark from "./QuizGreenCheckmark";
import { useSelector } from "react-redux";
export default function QuizControlButtons() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
        {currentUser.role === "FACULTY" &&
        <QuizGreenCheckmark />}
        {currentUser.role === "FACULTY" &&
      <IoEllipsisVertical className="fs-4" />}
    </div>
);}