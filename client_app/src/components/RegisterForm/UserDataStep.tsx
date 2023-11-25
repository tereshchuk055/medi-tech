import DatePicker from "../DatePicker/DatePicker";
import TextInput from "../TextInput/TextInput";
import SexRadioButton from "./SexRadioButton";
import { FormStepType } from "./RegisterForm";
import ShowErrorMessage from "../ShowErrorMessage/ShowErrorMessage";


export default function UserDataStep({ register, errors }: FormStepType) {

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">First name</label>
        <TextInput
          register={register("firstName")} />
        <ShowErrorMessage error={errors?.firstName?.message} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">Last name</label>
        <TextInput
          register={register("lastName")} />
        <ShowErrorMessage error={errors?.lastName?.message} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">Birth date</label>
        <DatePicker
          register={register("birthDate")}  />
        <ShowErrorMessage error={errors?.birthDate?.message} />
      </div>

      <div className="mb-4">
        <SexRadioButton register={register("gender")} />
        <ShowErrorMessage error={errors?.gender?.message} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">
          Phone number
        </label>
        <TextInput
          register={register("phoneNumber")}
        />
        <ShowErrorMessage error={errors?.phoneNumber?.message} />
      </div>
    </>
  );
}
