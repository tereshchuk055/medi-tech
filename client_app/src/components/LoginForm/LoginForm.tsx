import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import AuthorizationButton from "./AuthorizationButton";
import Checkbox from "../Checkbox/Checkbox";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ShowErrorMessage from "../ShowErrorMessage/ShowErrorMessage";
import { useEffect } from "react";

interface FormInputs {
    login: string,
    password: string
}

const schema = yup.object().shape({
    login: yup.string().required("Login required"),
    password: yup.string().required('Password required')
});


export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>({ resolver: yupResolver(schema) });

    const onSubmit = (data: FormInputs) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative font-medium md:h-screen flex items-center content-center">
                <div className="mr-auto ml-auto w-full">
                    <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
                        <h1 className="text-gray-800 block text-3xl font-extrabold font-title">Sign in</h1>
                    </div>
                    <div className="w-full max-w-md mr-auto ml-auto mt-4">
                        <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
                            <div className=" mb-6  h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Login </label>
                                <TextInput
                                    register={register("login")}
                                />
                                {errors.login && <ShowErrorMessage error={errors.login.message} />}
                            </div>
                            <div className="mb-6  h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2"> Password </label>
                                <PasswordInput
                                    register={register("password")}
                                />
                                {errors.password && <ShowErrorMessage error={errors.password.message} />}
                            </div>
                            <div className="mb-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="text-center sm:text-left">
                                        <label>
                                            <Checkbox name="remembering" text="" />
                                            <span className="text-sm font-medium text-gray-700 ">Remember me</span>
                                        </label>
                                    </div>
                                    <div className="text-center sm:text-right">
                                        <a href="#" className="text-indigo-600 font-medium text-sm duration-200 transition-colors hover:text-indigo-800">Forgot
                                            your password?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <AuthorizationButton type="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}