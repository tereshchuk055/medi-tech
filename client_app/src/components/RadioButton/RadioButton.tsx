type RadioButtonType = {
  register: any;
  text: string;
  value: any;
};

export default function RadioButton({
  register, text, value
}: RadioButtonType) {
  return (
    <label className="text-dark-700 text-sm font-medium  pr-6  ">
      <input
        className="mr-2"
        type="radio"
        value={value}
        {...register}
      />
      {text}
    </label>
  );
}
