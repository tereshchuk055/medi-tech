import { useState} from "react";

import Button from "../Button/Button";
import UserDataStep from "./UserDataStep";
import CredentialsStep from "./CredentialsStep";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";


export type FormStepType = {
  register: any;
  errors?: any;
};

export enum UserSex {
  Male,
  Female,
}

export type UserDataInputs = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: UserSex;
  phoneNumber: string;
};

export type CredentialsInputs = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type FormInputs = UserDataInputs | CredentialsInputs;

const schema: yup.ObjectSchema<UserDataInputs | CredentialsInputs>[] = [
  yup.object().shape({
    firstName: yup.string().required("Enter your first name!"),
    lastName: yup.string().required("Enter your last name!"),
    birthDate: yup
      .date()
      .max(new Date(), "Birth date can't be in the future")
      .required("Select your birth date!"),
    gender: yup.mixed<UserSex>().required("Select your gender!"),
    phoneNumber: yup.string().matches(/^\+380\d{9}$/, "Enter a valid phone number").required("Enter your phone number!"),
  }),
  yup.object().shape({
    email: yup.string().required("Enter your email!").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
    password: yup
      .string()
      .required("Enter your password!")
      .min(6, "Password must be at least 6 characters long"),
    repeatPassword: yup
      .string()
      .required("Repeat your password!")
      .oneOf([yup.ref("password")], "Passwords don't match"),
  }),]

export default function RegisterForm() {
  const [currStep, setCurrStep] = useState(1)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: yupResolver(schema[currStep - 1]), mode: "onBlur" });


  function stepper() {
    const steps: { [key: number]: JSX.Element } = {
      1: <>
        <UserDataStep
          register={register}
          errors={errors} />
        <Button
          type="submit"
          text={`Next ${String.fromCharCode(8594)} `}
        />
      </>,
      2: <>
        <CredentialsStep
          register={register}
          errors={errors} />
        <Button text="Register"
          type="submit" />
      </>
    }
    return steps[currStep]
  }

  function previousStep() {
    if (currStep === 1) return
    setCurrStep(curr => curr - 1)
  }

  function nextStep() {
    setCurrStep(curr => curr + 1)
  }

  const onSubmit =  (userInfo: FormInputs) => {
    if (currStep < 2) nextStep()
    else {
      console.log("User Info: ", userInfo)
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative font-medium md:h-screen flex items-center content-center ">
      <div className="mr-auto ml-auto w-full">
        <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 ">
          <h1 className="text-gray-800 block text-3xl font-extrabold font-title  text-center ">
            Sign up
          </h1>
          <div className="w-full max-w-md mr-auto ml-auto mt-4">
            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
              {stepper()}
              {currStep === 2 ? <div onClick={previousStep} className=" mt-3"> &#8592; Back</div  > : null}
            </div>
          </div>
        </div>
      </div>
    </form >
  );
}
