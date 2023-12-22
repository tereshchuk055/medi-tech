import Logo from '../Logo/Logo';

export default function Footer() {
    return (
        <footer className="border-t text-gray-900  dark:bg-neutral-900 dark:text-sky-100 pr-5 absolute w-full">
            <div className="container flex items-center justify-center p-2">
                <Logo />
                <a href="#">© Copyright {new Date().getFullYear()} | Privacy notice | Terms of use </a>
            </div>
        </footer>
    );
}
