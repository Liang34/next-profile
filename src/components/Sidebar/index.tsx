import './index.modules.scss'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  // const history = useNavigate();
  // const goToNormalProfile = () => {
    
  //   history('/normal_profile')
  // }
  return (
    <div className="sidebar">
      <div>Welcome</div>
      <NavLink to="/normal_profile" >NormalProfile</NavLink>
      <div>Custom_profile</div>
    </div>
  )
}