import Link from "next/link";

export default function Navbar() {
    const COLORS = {
        primary: '#1e3932',
        secondary: '#d4e9e2',
        accent: '#00754a',
        background: '#f3f1e7',
        text: '#000000'
    };

    const navItems = [
        { label: "Inicio", href: "#inicio" },
        { label: "Productos", href: "#productos" },
        { label: "Galería", href: "#galeria" },
        { label: "Contacto", href: "#contacto" },
    ];

    return (
        <nav
            className="text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50"
            style={{ backgroundColor: COLORS.primary }}
        >
            {/* Mascota + Nombre */}
            <div className="flex items-center gap-3">
                <Link href="#inicio">
                    <img
                        src="/mascota.png"
                        alt="Mascota"
                        className="w-12 h-12 cursor-pointer"
                    />
                </Link>
                <h1 className="text-xl font-bold">Brasilius</h1>
            </div>

            {/* Navegación */}
            <div className="flex gap-6">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="hover:underline hover:text-green-200 transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
