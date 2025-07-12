export default function Footer() {
    const COLORS = {
        primary: '#1e3932',
        secondary: '#d4e9e2',
        accent: '#00754a',
        background: '#f3f1e7',
        text: '#000000'
    };
    return (
        <footer className="text-white p-4 text-center mt-10" style={{ backgroundColor: COLORS.primary }}>
            <p>&copy; 2025 Dulce Brasil. Todos los derechos reservados.</p>
        </footer>
    );
}
