import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import HomePage from "./page-components/HomePage";
import Ricerca from "./page-components/Ricerca";
import Papers from "./page-components/Papers";
import Navbar from "./page-components/NavBar";
import NewsTeamPage from "./page-components/TeamWithNews/NewsTeampage";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Content */}
      <Box as="main">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home */}
          <Route path="/research" element={<Ricerca />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/team" element={<NewsTeamPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
