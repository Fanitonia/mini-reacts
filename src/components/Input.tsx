
type InputProps = {
    label: string;
    id: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, id, onChange}: InputProps) {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} onChange={onChange} />
        </div>
        
    );
 }