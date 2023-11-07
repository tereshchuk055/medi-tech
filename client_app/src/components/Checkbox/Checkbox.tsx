type CheckboxType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  name?: string;
};

export default function Checkbox({onChange, text, name}: CheckboxType) {
  return (
    <label>
      <input type="checkbox" onChange={onChange} name={name} className="mr-2" />
      {text}
    </label>
  );
}
