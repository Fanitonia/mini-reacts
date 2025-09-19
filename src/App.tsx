import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/home/Home";
import InvestmentCalculator from "./modules/investment-calculator/InvestmentCalculator";
import ProjectManager from "./modules/project-manager/ProjectManager";
import QuizApp from "./modules/quiz-app/QuizApp";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/investment-calculator" element={<InvestmentCalculator />}></Route>
                <Route path="/project-manager" element={<ProjectManager />}></Route>
                <Route path="/quiz-app" element={<QuizApp />}></Route>
            </Routes>
        </HashRouter>
    )
}