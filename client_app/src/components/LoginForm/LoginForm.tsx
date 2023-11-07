import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import AuthorizationButton from "./AuthorizationButton";
import Checkbox from "../Checkbox/Checkbox";

interface FormInputs {
    login: string,
    password: string
}

const defaultValues: FormInputs = {
    login: "",
    password: ""
}

export default function LoginForm() {
    const [formInputs, setFormInputs] = useState<FormInputs>(defaultValues);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setFormInputs({ ...formInputs, [name]: value });
    }
    const handleButtonClick = () => {
        console.log(formInputs);
        console.log("___")
        console.log({ ...formInputs, ["login"]: "bob" });
    }

    return (
        <form action="">
            <div className="relative font-medium md:h-screen flex items-center content-center">
                <div className="mr-auto ml-auto w-full">
                    <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
                        <h1 className="text-gray-800 block text-3xl font-extrabold font-title">Sign in</h1>
                    </div>
                    <div className="w-full max-w-md mr-auto ml-auto mt-4">
                        <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Login </label>
                                <TextInput name="login" value={formInputs.login} onChange={handleInputChange} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-medium mb-2"> Password </label>
                                <PasswordInput name="password" value={formInputs.password} onChange={handleInputChange} />
                            </div>
                            <div className="mb-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="text-center sm:text-left">
                                        <label>
                                            <Checkbox name="remembering" onChange={handleInputChange} text="" />
                                            <span className="text-sm font-medium text-gray-700 ">Remember me</span>
                                        </label>
                                    </div>
                                    <div className="text-center sm:text-right">
                                        <a href="#" className="text-indigo-600 font-medium text-sm duration-200 transition-colors hover:text-indigo-800">Forgot
                                            your password?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <AuthorizationButton onClick={handleButtonClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}