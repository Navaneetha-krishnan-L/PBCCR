import { Link, useLocation } from 'react-router-dom'

const NAV = [
  { label: 'HOME', to: '/' },
  { label: 'FACTSHEETS', to: '/factsheets' },
  { label: 'DATA VISUALIZATION', to: '/data-visualization' },
  { label: 'METHODS', to: '/methods' },
  { label: 'INITIATIVES', to: '/initiatives' },
  { label: 'ABOUT', to: '/about' },
  { label: 'HELP', to: '/help' },
]

export default function Navbar({ showLogin = false }) {
  const { pathname } = useLocation()
  return (
    <header className="sticky-top shadow-sm" style={{ zIndex: 1050 }}>
      <div className="d-flex align-items-center justify-content-between px-4 py-2 bg-white border-bottom">
        <img src="https://api.builder.io/api/v1/image/assets/TEMP/2f22bfd862f8da157003dd58da1beb20fc540ff1?width=176" alt="PBCCR Logo" style={{ width: 88, height: 76, objectFit: 'contain' }} />
        <h1 className="fw-bold text-center flex-grow-1 px-3 mb-0" style={{ color: '#8805A4', fontSize: 'clamp(13px,2vw,26px)' }}>
          Tamil Nadu Population-Based Childhood Cancer Registry
        </h1>
        <div className="d-flex align-items-center justify-content-center border rounded p-2 bg-light" style={{ width: 72, height: 72 }}>
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/58c7219a07dc162e8941e0b0e9b459e32cdca955?width=99" alt="Ribbon" style={{ width: 50, height: 50, objectFit: 'contain' }} />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg px-4 py-0" style={{ background: 'linear-gradient(90deg,rgba(255,255,255,0.45) 0%,rgba(190,190,190,0.45) 100%)' }}>
        <button className="navbar-toggler border-0 my-2" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto">
            {NAV.map(({ label, to }) => (
              <li className="nav-item" key={to}>
                <Link to={to} className={'pbr-nav-link nav-link px-3 py-3' + (pathname === to ? ' active' : '')}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-3 py-2">
            <input className="form-control rounded-pill border-0" style={{ width: 200, fontSize: 13, background: '#F1F5F9' }} placeholder="Search resources..." />
            {showLogin ? (
              <Link to="/login" className="btn fw-bold rounded-pill px-4 py-2 text-white text-nowrap" style={{ background: '#9333EA', fontSize: 13 }}>Login / Signup</Link>
            ) : (
              <Link to="/profile">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/5c57c006aaa469f01cd60e61e9843aa87d9cbf22?width=70" alt="Profile" className="rounded-circle" style={{ width: 38, height: 38, objectFit: 'cover', border: '2px solid #8805A4' }} />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
