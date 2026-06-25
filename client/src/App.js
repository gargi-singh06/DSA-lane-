import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import IntermediateDashboard from "./pages/IntermediateDashboard";
import AdvancedDashboard from "./pages/advanceDashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/intermediate" element={<IntermediateDashboard />} />
        <Route path="/advanced" element={<AdvancedDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
