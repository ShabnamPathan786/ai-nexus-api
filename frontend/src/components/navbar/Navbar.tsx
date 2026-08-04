import logo from '../../assets/logo.jpeg';

type NavLink = {
    label: string;
    href: string;
};

const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Documentation", href: "#documentation" },
    { label: "About", href: "#about" }
];


type NavbarProps = {
    onLoginClick: () => void;
    onSignupClick: () => void;
};


const Navbar = ({ onLoginClick, onSignupClick }: NavbarProps) => {

    return (
        <nav className='fixed top-0 bg-background/80 w-full baackdrop-blur-md z-50 '>
            <div className='flex itmes-center justify-between max-w-7xl mx-auto px-6 py-4'>
                <a href="#home" className="flex items-center gap-2">
                    <img src={logo} alt="Rag Agent" className='h-8 w-auto' />
                    <span>Rag-Agent</span>
                </a>
                <ul className='flex justify-between gap-6 items-center'>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="list-none">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <div>

                    <button onClick={onLoginClick}>login</button>
                    <button onClick={onSignupClick}>Get started</button>

                </div>
            </div>
        </nav>
    );
};


export default Navbar;


