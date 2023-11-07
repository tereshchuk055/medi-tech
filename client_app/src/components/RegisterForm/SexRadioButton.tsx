import RadioButton from "../RadioButton/RadioButton";
import {UserSex} from "./RegisterForm";

type SexRadioButtonType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected: UserSex;
};

export default function SexRadioButton({onChange, selected}: SexRadioButtonType) {
  return (
    <>
      <label className="block text-gray-700 text-sm font-medium mb-2">Sex</label>
      <RadioButton
        onChange={onChange}
        value={UserSex.Male}
        text={UserSex[0]}
        isChecked={selected == UserSex.Male}
      />
      <RadioButton
        onChange={onChange}
        value={UserSex.Female}
        text={UserSex[1]}
        isChecked={selected == UserSex.Female}
      />
    </>
  );
}
