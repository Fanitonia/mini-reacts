import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./homepage/Home";
import Faninvest from "./projects/Faninvest/Faninvest";
import ProjectManagement from "./projects/ProjectManagement/ProjectManagement";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/faninvest" element={<Faninvest/>}></Route>
                <Route path="/project-management" element={<ProjectManagement/>}></Route>
            </Routes>
        </HashRouter>
    ) 
}