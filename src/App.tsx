import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoungePage from "./pages/LoungePage";
import CalendarPage from "./pages/CalendarPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lounge" element={<LoungePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
