type AuthorizationButtonType = {
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    type?: string;
}

export default function AuthorizationButton({ onClick, type }: AuthorizationButtonType) {
    return (
        <input
            type={type ?? "button"}
            className="bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
            name="name"
            onClick={onClick}
            value={"Sign in"} />
    )
}