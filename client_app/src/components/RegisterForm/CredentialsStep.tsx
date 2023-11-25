import PasswordInput from "../PasswordInput/PasswordInput";
import TextInput from "../TextInput/TextInput";
import { FormStepType } from "./RegisterForm";
import ShowErrorMessage from "../ShowErrorMessage/ShowErrorMessage";


export default function CredentialsStep({ register, errors }: FormStepType) {
    return (<>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
            </label>
            <TextInput
                register={register("email")} />
            <ShowErrorMessage error={errors?.email?.message} />
        </div>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
            </label>
            <PasswordInput
                register={register("password")}
            />
            <ShowErrorMessage error={errors?.password?.message} />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
                Repeat password
            </label>
            <PasswordInput
                register={register("repeatPassword")}
            />
            <ShowErrorMessage error={errors?.repeatPassword?.message} />
        </div>
    </>)
}
