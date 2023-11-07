type TextInputType = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({name, value, onChange}: TextInputType) {
  return (
    <input
      type="text"
      className="hover:bg-gray-200 focus:bg-gray-100 focus:ring-0 shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
