import Input from "./Input";
import type { InputValues } from "../types/InputValues";

export default function Inputs({ setInputValues }: { setInputValues: React.Dispatch<React.SetStateAction<InputValues>> }) {

    function handleInputChange(inputId: string, newValue: string) {
        setInputValues((prevValues) => {
            return { 
                ...prevValues, 
                [inputId]: +newValue }
        })
    }

    return (
        <section id="inputs">
            <div>
                <Input label="Initial Investment" id="initialInvestment"
                    onChange={(e) => handleInputChange("initialInvestment", e.target.value )} />
                <Input label="Expected Return" id="expectedReturn"
                    onChange={(e) => handleInputChange("expectedReturn", e.target.value)} />
            </div>
            <div>
                <Input label="Annual Investment" id="annualInvestment"
                    onChange={(e) => handleInputChange("annualInvestment", e.target.value)} />
                <Input label="Duration" id="duration"
                    onChange={(e) => handleInputChange("duration", e.target.value)} />
            </div>
        </section>
    );
}