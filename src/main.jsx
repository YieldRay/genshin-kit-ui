import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
// components
import Header from "./components/header";
import Footer from "./components/footer";
import { Grommet, Box } from "grommet";
// pages
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import AllCharacters from "./pages/AllCharacters";
import SpiralAbyss from "./pages/SpiralAbyss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Grommet>
            <HashRouter>
                <Header />
                <Box pad="small">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/UserInfo/:uid" element={<UserInfo />}></Route>
                        <Route path="/AllCharacters/:uid" element={<AllCharacters />}></Route>
                        <Route path="/SpiralAbyss/:uid" element={<SpiralAbyss />}></Route>
                    </Routes>
                </Box>
                <Footer />
            </HashRouter>
        </Grommet>
    </React.StrictMode>
);
