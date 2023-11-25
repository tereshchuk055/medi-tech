import RadioButton from "../RadioButton/RadioButton";
import { UserSex } from "./RegisterForm";

type SexRadioButtonType = {
  register: any;
};

export default function SexRadioButton({ register }: SexRadioButtonType) {
  return (
    <>
      <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">Sex</label>
      <RadioButton
        register={register}
        text={UserSex[0]}
        value={UserSex.Male}
      />
      <RadioButton
        register={register}
        text={UserSex[1]}
        value={UserSex.Female}
      />
    </>
  );
}
