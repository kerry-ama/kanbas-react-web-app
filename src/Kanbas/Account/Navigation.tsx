import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-4">
      <NavLink to={`/Kanbas/Account/Signin`}
        className={({ isActive }) => 
          `list-group-item border border-0 mt-1 ${isActive ? 'active' : 'text-danger'}`}>
        
          Signin  </NavLink> 
      <NavLink to={`/Kanbas/Account/Signup`} className={({ isActive }) => 
          `list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}>Signup  </NavLink> 
      <NavLink to={`/Kanbas/Account/Profile`} className={({ isActive }) => 
          `list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}> Profile </NavLink> 
      {currentUser && currentUser.role === "ADMIN" && (
       <NavLink to={`/Kanbas/Account/Users`} className={({ isActive }) => 
       `list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}> Users </NavLink> )}
    </div>
);}
