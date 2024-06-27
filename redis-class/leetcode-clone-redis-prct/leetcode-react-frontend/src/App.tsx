import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page";
import ProblemsPage from "./components/problem-page";
import ProblemDetails from "./components/problem-details";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/problems/:problemId" element={<ProblemDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
