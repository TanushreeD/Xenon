import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from './components/UseContext';
import { useState } from "react";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  return (
    <div className="grey-card-container">
      <div>
        <UserProvider user={currentUser}>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route element={<Home></Home>} path="/"/>
              <Route element={<SignUp></SignUp> }path="signup"/>

              <Route element={<Login></Login>} path="login" />
              <Route element={<ContactUs></ContactUs>} path="contact" />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
