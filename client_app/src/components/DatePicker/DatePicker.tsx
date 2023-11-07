type DatePickerType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name?: string;
};

export default function DatePicker({onChange, value, name}: DatePickerType) {
  return (
    <>
      <input
        type="date"
        value={value}
        className="hover:bg-gray-200 focus:bg-gray-100 focus:ring-0 shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
        onChange={onChange}
        name={name}
      />
    </>
  );
}
