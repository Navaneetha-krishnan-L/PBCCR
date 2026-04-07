import { Link, useLocation } from 'react-router-dom'
const NAV=[{label:'HOME',path:'/'},{label:'FACTSHEETS',path:'/factsheets'},{label:'DATA VISUALIZATION',path:'/data-visualization'},{label:'METHODS',path:'/methods'},{label:'INITIATIVES',path:'/initiatives'},{label:'ABOUT',path:'/about'},{label:'HELP',path:'/help'}]
export default function Navbar({showLogin=false}){
  const location=useLocation()
  return(
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo"><img src="https://api.builder.io/api/v1/image/assets/TEMP/2f22bfd862f8da157003dd58da1beb20fc540ff1?width=176" alt="PBCCR Logo" /></div>
        <div className="navbar-title">Tamil Nadu Population-Based Childhood Cancer Registry</div>
        <div className="navbar-ribbon"><img src="https://api.builder.io/api/v1/image/assets/TEMP/58c7219a07dc162e8941e0b0e9b459e32cdca955?width=99" alt="Cancer Ribbon" /></div>
      </div>
      <div className="navbar-bottom">
        <nav className="nav-links">
          {NAV.map(item=>(
            <Link key={item.path} to={item.path} className={"nav-link"+(location.pathname===item.path?" active":"")}>{item.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="search-bar"><input placeholder="Search resources..." /><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.45 13.5L7.725 8.775a4.875 4.875 0 1 1 .725-.725L13.5 12.45 12.45 13.5ZM4.875 8.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z" fill="#94A3B8"/></svg></div>
          {showLogin?(<button className="btn-login">Login/Signup</button>):(<div className="nav-profile"><img src="https://api.builder.io/api/v1/image/assets/TEMP/5c57c006aaa469f01cd60e61e9843aa87d9cbf22?width=70" alt="Profile" /></div>)}
        </div>
      </div>
    </header>
  )
}