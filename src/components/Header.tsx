import dollar_icon from "../assets/dollar_icon.png";

export default function Header() {
    return (
        <header>
            <img src={dollar_icon} alt="Dollar Icon" />
            <h1>Investment Calculator</h1>
        </header>
    );
}