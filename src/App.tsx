import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import InvestmentCalculator from "./pages/investment-calculator/InvestmentCalculator";
import ProjectManagement from "./pages/project-management/ProjectManagement";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/investment-calculator" element={<InvestmentCalculator/>}></Route>
                <Route path="/project-management" element={<ProjectManagement/>}></Route>
            </Routes>
        </HashRouter>
    ) 
}