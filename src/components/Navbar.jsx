import { Link, useLocation } from 'react-router-dom'
const NAV=[{l:'HOME',p:'/'},{l:'FACTSHEETS',p:'/factsheets'},{l:'DATA VISUALIZATION',p:'/data-visualization'},{l:'METHODS',p:'/methods'},{l:'INITIATIVES',p:'/initiatives'},{l:'ABOUT',p:'/about'},{l:'HELP',p:'/help'}]
export default function Navbar({showLogin=false}){
  const loc=useLocation()
  return(
    <header className="sticky-top" style={{zIndex:1000}}>
      <div className="pbr-navbar-top d-flex align-items-center justify-content-between px-4 py-2">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/2f22bfd862f8da157003dd58da1beb20fc540ff1?width=176" alt="Logo" className="rounded" style={{width:88,height:76,objectFit:'contain',border:'1px solid #F1F5F9'}} />
        <h1 className="pbr-navbar-title text-center flex-grow-1 px-3 mb-0">Tamil Nadu Population-Based Childhood Cancer Registry</h1>
        <div className="border rounded p-2 bg-light d-flex align-items-center justify-content-center" style={{minWidth:64,minHeight:64,overflow:'hidden'}}>
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/58c7219a07dc162e8941e0b0e9b459e32cdca955?width=99" alt="Ribbon" style={{width:50,height:50,objectFit:'contain'}} />
        </div>
      </div>
      <nav className="pbr-navbar-bottom navbar navbar-expand-lg px-4">
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto gap-2">
            {NAV.map(i=>(
              <li className="nav-item" key={i.p}>
                <Link to={i.p} className={'pbr-nav-link nav-link'+(loc.pathname===i.p?' active':'')}>{i.l}</Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-3">
            <input className="pbr-search" placeholder="Search resources..." style={{width:180}} />
            {showLogin?(
              <Link to="/login" className="btn-pbr btn">Login/Signup</Link>
            ):(
              <Link to="/profile">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/5c57c006aaa469f01cd60e61e9843aa87d9cbf22?width=70" alt="Profile" className="rounded-circle" style={{width:35,height:35,objectFit:'cover'}} />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}