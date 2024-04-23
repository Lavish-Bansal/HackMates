import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Home from "./pages/home/Home";
// import forgetPassword from './pages/forgetPassword';
import Dashboard from "./pages/dashboard/Dashboard";
import RegistrationForm from "./components/useProfile/RegistrationForm";
// import Hackathon from './components/hackathon/Hackathon';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="forgetpassword" element={<forgetPassword />} />
          <Route path="dashboard" element={<Dashboard />}>
            {/* <Route path='dashboard/hackathon' element={<Hackathon />} /> */}
            <Route
              path="dashboard/userprofile"
              element={<RegistrationForm />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
