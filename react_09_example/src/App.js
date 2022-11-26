import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import CreateUser from "./pages/CreateUser";
import PageNotFount from "./pages/PageNotFount";

import Container from "@mui/material/Container";

export default function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId" element={<EditUser />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
      </Router>
    </Container>
  );
}
