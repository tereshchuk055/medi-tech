import TextInput from "../TextInput/TextInput";
import DatePicker from "../DatePicker/DatePicker";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ShowErrorMessage from "../ShowErrorMessage/ShowErrorMessage";

interface FormInputs {
    disease: string,
    dateApplication: Date,
    condition: string,
    bloodPressure: string,
    referral: string,
    recommendations: string,
    medicine: string,
}

const schema = yup.object().shape({
    disease: yup.string().required("Disease is a required field"),
    condition: yup.string().required("Condition is a required field"),
    bloodPressure: yup
        .string()
        .test('isValidBloodPressure', 'Invalid blood pressure format', function (value) {
            const { disease } = this.parent as FormInputs;

            if (disease === 'hypertension' && value !== undefined && parseInt(value, 10) < 140) {
                return false;
            }

            return value === undefined || /\d{2,3}\/\d{2,3}/.test(value);
        })
        .required('Blood pressure is required'),
    referral: yup.string().required("Referral is a required field"),
    medicine: yup.string().required("Medicine is a required field"),
    recommendations: yup.string().required("Recommendations is a required field"),
    dateApplication: yup.date().required('Date is required field'),
});


export default function TreatmentForm() {
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
            <div className="relative font-medium  flex items-center content-center ">
                <div className="mr-auto ml-auto w-full">
                    <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-center">
                        <h1 className="text-gray-800 block text-3xl font-extrabold font-title">Treatment Card</h1>
                    </div>
                    <div className="w-full max-w-md mr-auto ml-auto mt-4">
                        <div className="grid grid-cols-2 gap-4 bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">
                            <div className="mb-2  w-45 h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Disease </label>
                                <TextInput
                                    register={register("disease")}
                                />
                                {errors.disease && <ShowErrorMessage error={errors.disease.message} />}
                            </div>
                            <div className="ml-4 mb-2  h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2"> Date of application </label>
                                <DatePicker

                                    register={register("dateApplication")}
                                />
                                {errors.dateApplication && <ShowErrorMessage error={errors.dateApplication.message} />}

                            </div>
                            <div className=" mb-2 h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Patient condition </label>
                                <TextInput
                                    register={register("condition")} />
                                {errors.condition && <ShowErrorMessage error={errors.condition.message} />}
                            </div>
                            <div className="ml-4  mb-2 h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Blood Pressure </label>
                                <TextInput
                                    register={register("bloodPressure")} />
                                {errors.bloodPressure && <ShowErrorMessage error={errors.bloodPressure.message} />}
                            </div>
                            <div className="mb-2 h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Referral to a doctor </label>
                                <TextInput
                                    register={register("referral")} />
                                {errors.referral && <ShowErrorMessage error={errors.referral.message} />}
                            </div>

                            <div className="ml-4  mb-2 h-20">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Medicine </label>
                                <TextInput
                                    register={register("medicine")} />
                                {errors.medicine && <ShowErrorMessage error={errors.medicine.message} />}
                            </div>
                            <div className=" col-span-2 mb-5">
                                <label className="block text-gray-700 text-sm font-medium mb-2" > Recommendations </label>
                                <TextArea
                                    register={register("recommendations")}
                                />
                                {errors.recommendations && <ShowErrorMessage error={errors.recommendations.message} />}
                            </div>
                            <div className=" col-span-2 ">
                                <Button
                                    type="submit"
                                    text="Add Treatment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}