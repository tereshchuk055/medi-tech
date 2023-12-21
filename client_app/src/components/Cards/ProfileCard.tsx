import { Patient } from "../../store/interfaces/entities";

interface ProfileCardProps {
    patient: Patient
}

export default function ProfileCard({patient}:ProfileCardProps ) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 relative flex items-center">


                <div>
                    <img
                        src={patient.link}
                        alt="Doctor"
                        className="object-cover mb-4 rounded-lg w-80 h-90"
                    />

                    <div className="py-3 sm:order-none order-3">
                        <h2 className="text-lg  font-bold text-sky-500">Contact</h2>

                        <div className="border-t-2 w-20 border-sky-500 my-3"></div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 text-sky-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </a>
                            <div className="ml-2 truncate">{patient.email}</div>
                        </div>
                        <div className="flex items-center my-1">
                            <a className="w-6 text-gray-700 text-sky-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </a>
                            <div className="ml-2 truncate">{patient.number}</div>
                        </div>
                    </div>
                </div>

   
                <button className="absolute top-0 right-0 m-4 bg-sky-500 text-white px-4 py-2 rounded-xl">Редагувати</button>
               
                <div className="mx-10 h-12"></div>


                <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                    <div className="py-3 ">
                        <h2 className="text-lg  font-bold text-sky-500">Information</h2>
                        <div className="border-t-2 w-20 border-sky-500 my-3"></div>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            First name: <span className="font-semibold ">{patient.firstName}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Last name: <span className="font-semibold ">{patient.lastName}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Birth date: <span className="font-semibold ">{patient.birthDate}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Gender: <span className="font-semibold">{patient.gender}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Address: <span className="font-semibold">{patient.address}</span>
                        </p>
                        <p className="text-gray-700  dark:text-gray-300">
                            Work place: <span className="font-semibold">{patient.workPlace}</span>
                        </p>
                    </div>

                    <div className="py-3">
                        <h2 className="text-lg  font-bold text-sky-500">Medical indicators</h2>
                        <div className="border-t-2 w-20 border-sky-500 my-3"></div>

                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            <span className="font-semibold ">Height:</span> {patient.height}
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            <span className="font-semibold ">Weight:</span> {patient.weight}
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            <span className="font-semibold ">Chronic conditions:</span> {patient.chronicConditions}
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            <span className="font-semibold ">Allergies:</span> {patient.allergies}
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            <span className="font-semibold ">Vaccinations:</span> {patient.vaccinations}
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
}