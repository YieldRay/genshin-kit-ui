import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import AllCharacters from "./pages/AllCharacters";
import SpiralAbyss from "./pages/SpiralAbyss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/UserInfo/:uid" element={<UserInfo />}></Route>
                <Route path="/AllCharacters/:uid" element={<AllCharacters />}></Route>
                <Route path="/SpiralAbyss/:uid" element={<SpiralAbyss />}></Route>
            </Routes>
            <Footer></Footer>
        </HashRouter>
    </React.StrictMode>
);
