type InputProps = {
    label: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, id, onChange}: InputProps) {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input type="number" id={id} defaultValue={0} onChange={onChange} />
        </div>
    );
 }