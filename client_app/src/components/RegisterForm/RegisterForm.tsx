import { useState, Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import UserDataStep from "./UserDataStep";
import CredentialsStep from "./CredentialsStep";


export type FormStepType = {
  formInputs: FormInputs;
  setFormInputs: Dispatch<SetStateAction<FormInputs>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface FormInputs {
  firstName: string;
  lastName: string;
  birthDate: string;
  sex: UserSex;
  phoneNumber: string | null;
  email: string;
  password: string;
  passwordRepeat: string;
}

export enum UserSex {
  Male,
  Female,
}

const defaultValues: FormInputs = {
  firstName: "",
  lastName: "",
  birthDate: new Date().toISOString().split("T")[0],
  sex: UserSex.Male,
  phoneNumber: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

export default function RegisterForm() {
  const [formInputs, setFormInputs] = useState<FormInputs>(defaultValues);
  const [formStep, setFormStep] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleButtonClick = () => {
    formStep ?
      console.log(formInputs) :
      setFormStep(true);


  };

  return (
    <form className="relative font-medium md:h-screen flex items-center content-center ">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 ">
          <h1 className="text-gray-800 block text-3xl font-extrabold font-title  text-center ">
            Sign up
          </h1>
          <div className="w-full max-w-md mr-auto ml-auto mt-4">
            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">

              {
                formStep
                  ? (
                    <>
                      <CredentialsStep
                        formInputs={formInputs}
                        setFormInputs={setFormInputs}
                        handleInputChange={handleInputChange} />
                      <Button onClick={handleButtonClick} text="Register" />
                    </>)
                  : (<>
                    <UserDataStep
                      formInputs={formInputs}
                      setFormInputs={setFormInputs}
                      handleInputChange={handleInputChange} />
                    <Button onClick={handleButtonClick} text={`Next ${String.fromCharCode(8594)}`} />
                  </>)
              }
              {formStep ? <div onClick={() => { setFormStep(false) }} className=" mt-3"> &#8592; Back</div  > : null}
            </div>
          </div>
        </div>
      </div>
    </form >
  );
}
