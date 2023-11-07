import DatePicker from "@components/DatePicker/DatePicker";
import TextInput from "@components/TextInput/TextInput";
import SexRadioButton from "./SexRadioButton";
import { FormStepType } from "./RegisterForm";

export default function UserDataStep({ formInputs, setFormInputs, handleInputChange }: FormStepType) {
  const handleSexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormInputs({ ...formInputs, ["sex"]: parseInt(value) });
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">First name</label>
        <TextInput
          name="firstName"
          value={formInputs.firstName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">Last name</label>
        <TextInput
          name="lastName"
          value={formInputs.lastName}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">Birth date</label>
        <DatePicker
          name="birthDate"
          value={formInputs.birthDate}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <SexRadioButton onChange={handleSexChange} selected={formInputs.sex} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Phone number
        </label>
        <TextInput
          name="phoneNumber"
          value={formInputs.phoneNumber ?? ""}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
