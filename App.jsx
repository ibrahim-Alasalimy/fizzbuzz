import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import Policies from "./pages/Policies.jsx";
import PolicyEdit from "./pages/PolicyEdit.jsx";
import PolicyCreate from "./pages/PolicyCreate.jsx";
import PolicyView from "./pages/PolicyView.jsx";
import Tests from "./pages/Tests.jsx";
import TestCreate from "./pages/TestCreate.jsx";
import TestEdit from "./pages/TestEdit.jsx";
import TestView from "./pages/TestView.jsx";
import ClassroomCreate from "./pages/ClassroomCreate.jsx";
import ClassroomView from "./pages/ClassroomView.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ClassroomTest from "./pages/ClassroomTest/index.jsx";
import StudentMonitoring from "./pages/ClassroomTest/StudentMonitoring/index.jsx";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/classrooms/create"
            element={
              <ProtectedRoute>
                <ClassroomCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/classrooms/:id"
            element={
              <ProtectedRoute>
                <ClassroomView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/classrooms/:id/tests/:testId"
            element={
              <ProtectedRoute>
                <ClassroomTest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/classrooms/:id/tests/:testId/student/:studentId"
            element={
              <ProtectedRoute>
                <StudentMonitoring />
              </ProtectedRoute>
            }
          />
          <Route
            path="/policies"
            element={
              <ProtectedRoute>
                <Policies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/policies/edit/:id"
            element={
              <ProtectedRoute>
                <PolicyEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/policies/create"
            element={
              <ProtectedRoute>
                <PolicyCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/policies/view/:id"
            element={
              <ProtectedRoute>
                <PolicyView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tests"
            element={
              <ProtectedRoute>
                <Tests />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tests/create"
            element={
              <ProtectedRoute>
                <TestCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tests/edit/:id"
            element={
              <ProtectedRoute>
                <TestEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tests/view/:id"
            element={
              <ProtectedRoute>
                <TestView />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
