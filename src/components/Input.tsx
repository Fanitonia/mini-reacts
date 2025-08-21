type InputProps = {
    label: string;
    id: string;
    spanValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, id, spanValue, onChange}: InputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className="input">
                <input type="number" id={id} defaultValue={0} onChange={onChange}/>
                <span className="input-span">{spanValue}</span>
            </div>
            
        </div>
    );
 }