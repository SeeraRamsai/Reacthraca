q
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgrammesPage from './pages/ProgrammesPage'
import DonatePage from './pages/DonatePage'
import FinancialsPage from './pages/FinancialsPage'
import VolunteerPage from './pages/VolunteerPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import RefundPage from './pages/RefundPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programmes" element={<ProgrammesPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/financials" element={<FinancialsPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
      </Routes>
    </Layout>
  )
}
