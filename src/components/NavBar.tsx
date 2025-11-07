import React from 'react';
import Image from "next/image";
import {navLinks} from "@/constants";

const NavBar = () => {

    return (
        <header>
            <nav>
                <Image src="/logo.svg" width={24} height={24} alt="Apple logo" />
                <ul>
                    {navLinks.map(({label}) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <Image src="/search.svg" alt={`Search`} />
                    </button>
                    <button>
                        <Image alt="Cart" src="/cart.svg"/>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;