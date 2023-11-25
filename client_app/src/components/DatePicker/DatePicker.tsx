type DatePickerType = {
  register: any;
  value?: string;
};

export default function DatePicker({ register, value }: DatePickerType) {
  return (
    <>
      <input
        type="date"
        className="hover:bg-gray-200 mb-[-5px] focus:bg-gray-100 focus:ring-0 shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300"
        {...register}
        value={value}
      />
    </>
  );
}