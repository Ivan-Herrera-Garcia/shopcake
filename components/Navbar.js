import Link from "next/link";

export default function Navbar() {
    const COLORS = {
        primary: '#1e3932',
        secondary: '#d4e9e2',
        accent: '#00754a',
        background: '#f3f1e7',
        text: '#000000'
    };
    return (
        <nav className="text-white p-4 flex justify-between" style={{ backgroundColor: COLORS.primary }}>
            <h1 className="text-xl font-bold">Dulce Brasil</h1>
        </nav>
    );
}