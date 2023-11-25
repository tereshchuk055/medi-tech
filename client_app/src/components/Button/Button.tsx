type ButtonType = {
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  text: string;
  type?:string;
};

export default function Button({onClick, text, type}: ButtonType) {
  return (
    <input
      type={type ?? "button"}
      className="bg-sky-500 hover:bg-sky-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all"
      onClick={onClick}
      value={text}
    />
  );
}