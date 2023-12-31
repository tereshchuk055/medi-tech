import PasswordInput from "../PasswordInput/PasswordInput";
import TextInput from "../TextInput/TextInput";
import { FormStepType } from "./RegisterForm";
import ShowErrorMessage from "../ShowErrorMessage/ShowErrorMessage";
import { useState } from 'react';
import Checkbox from "../Checkbox/Checkbox";


export default function CredentialsStep({ register, errors }: FormStepType) {
    const [isDoctor, setIsDoctor] = useState(false);

    const HandleCheckbox  = (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        setIsDoctor(event.target.checked);
    }

    return (<>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">
                Email
            </label>
            <TextInput
                register={register("email")} />
            <ShowErrorMessage error={errors?.email?.message} />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">
                Password
            </label>
            <PasswordInput
                register={register("password")}
            />
            <ShowErrorMessage error={errors?.password?.message} />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">
                Repeat password
            </label>
            <PasswordInput
                register={register("repeatPassword")}
            />
            <ShowErrorMessage error={errors?.repeatPassword?.message} />

            <div className="mb-4">
                <Checkbox name="isDoctor" text="I am a doctor" onChange={HandleCheckbox}/>
            </div>

            {isDoctor && (
                <>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-100">
                            Verification code
                        </label>
                        <TextInput
                            register={register("verificationCode")} />
                        <ShowErrorMessage error={errors?.verificationCode?.message} />
                    </div>
                </>
            )}
        </div>
    </>)
}
