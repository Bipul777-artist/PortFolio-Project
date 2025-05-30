import { useState } from "react";
import { navLinks } from "../constant";

const NavItems = () => {
    return (
    <ul className="nav-ul">   
        {navLinks.map(({id, name, href}) => (
            <li className="nav-li" key={id}>
                <a className="nav_li_a" href={href}>
                    {name}
                </a>
            </li>

        ))}
    </ul>
)
}

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => setIsOpen(!prev))
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 shadow-sm cursor-pointer font-bold text-xl hover:text-white transition-colors">
                        Bipul Jha
                    </a>

                    <button className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu" onClick={toggleMenu}>
                        <img className="text-white w-6 h-6" src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="HamBurger Menu" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default NavBar;