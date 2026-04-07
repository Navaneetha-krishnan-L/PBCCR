import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MethodsPage from './pages/MethodsPage'
import InitiativesPage from './pages/InitiativesPage'
import HelpPage from './pages/HelpPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/methods' element={<MethodsPage />} />
        <Route path='/initiatives' element={<InitiativesPage />} />
        <Route path='/help' element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  )
}