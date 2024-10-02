import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function AccountNavigation() {
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
    </div>
);}
