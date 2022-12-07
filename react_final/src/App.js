import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Container from "@mui/material/Container";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Router>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
        </Routes>
      </Router>
    </Container>
  );
}
