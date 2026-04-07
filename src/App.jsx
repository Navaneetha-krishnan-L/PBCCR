import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MethodsPage from './pages/MethodsPage'
import InitiativesPage from './pages/InitiativesPage'
import HelpPage from './pages/HelpPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DataVisualizationPage from './pages/DataVisualizationPage'
import FactsheetsPage from './pages/FactsheetsPage'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/methods' element={<MethodsPage />} />
        <Route path='/initiatives' element={<InitiativesPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/data-visualization' element={<DataVisualizationPage />} />
        <Route path='/factsheets' element={<FactsheetsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}