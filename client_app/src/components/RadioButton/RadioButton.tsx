type RadioButtonType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  text: string;
  isChecked?: boolean;
  name?: string;
};

export default function RadioButton({
  onChange,
  text,
  name,
  value,
  isChecked,
}: RadioButtonType) {
  return (
    <label className="text-dark-700 text-sm font-medium  pr-6  ">
      <input
        className="mr-2"
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        checked={isChecked}
      />
      {text}
    </label>
  );
}
