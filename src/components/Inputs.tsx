import Input from "./Input";
import type { InputValues } from "../types/InputValues";

export default function Inputs({setInputValues}:{setInputValues: React.Dispatch<React.SetStateAction<InputValues>>}) {

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValues((prevValues) => {
            const updatedValues = { ...prevValues };

            switch (event.target.id) {
                case "initialInvestment":
                    updatedValues.initialInvestment = parseFloat(event.target.value) || 0;
                    break;
                case "annualInvestment":
                    updatedValues.annualInvestment = parseFloat(event.target.value) || 0;
                    break;
                case "expectedReturn":
                    updatedValues.expectedReturn = parseFloat(event.target.value) || 0;
                    break;
                case "duration":
                    updatedValues.duration = parseFloat(event.target.value) || 0;
                    break;
                default:
                    break;
            }

            return updatedValues;
        })
    }

    return (
        <section id="inputs">
            <div>
                <Input label="Initial Investment" id="initialInvestment" onChange={handleInputChange} />
                <Input label="Expected Return" id="expectedReturn" onChange={handleInputChange} />
            </div>
            <div>
                <Input label="Annual Investment" id="annualInvestment" onChange={handleInputChange} />
                <Input label="Duration" id="duration" onChange={handleInputChange} />
            </div>
            
            
        </section>
    );
}