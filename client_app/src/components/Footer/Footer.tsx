import Logo from '../Logo/Logo';

export default function Footer() {
    return (
        <footer className=" text-sky-100 dark:bg-neutral-900 dark:text-gray-300 absolute w-full">
            <div className="container flex items-center justify-center p-2">
                <Logo />
                <a href="#">© Copyright {new Date().getFullYear()} | Privacy notice | Terms of use </a>
            </div>
        </footer>
    );
}
