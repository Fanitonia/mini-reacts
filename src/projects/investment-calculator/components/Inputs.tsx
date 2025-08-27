import styles from "./inputs.module.scss"
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
        <section className={styles.inputs}>
            <div>
                <Input label="Starting Amount" id="startingAmount"
                    spanValue="USD"
                    onChange={(e) => handleInputChange("startingAmount", e.target.value )} />
                <Input label="Expected Return" id="expectedReturn"
                    spanValue="%"
                    onChange={(e) => handleInputChange("expectedReturn", e.target.value)} />
            </div>
            <div>
                <Input label="Contribution (yearly)" id="contribution"
                    spanValue="USD"
                    onChange={(e) => handleInputChange("contribution", e.target.value)} />
                <Input label="Duration" id="duration"
                    spanValue="years"
                    onChange={(e) => handleInputChange("duration", e.target.value)} />
            </div>
        </section>
    );
}