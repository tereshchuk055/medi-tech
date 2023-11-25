import React from 'react';
import Logo from '../Logo/Logo';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 p-4 text-sky-100 absolute w-full ">
                <div className="container flex items-center justify-center p-2">
                    <Logo />
                    <a href="#">© Copyright {new Date().getFullYear()} | Privacy notice | Terms of use </a>
                </div>
        </footer>
    );
}
