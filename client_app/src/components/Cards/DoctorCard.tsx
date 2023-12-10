import { User } from "../../store/interfaces/entities";

interface DoctorCardProps {
    user: User
}

export default function DoctorCard({ user }: DoctorCardProps) {
    return (
        <>
            <div className="flex flex-col sm:flex-row mt-5">

                <div className="flex flex-col sm:w-1/3">
                    <div className="py-3 sm:order-none order-3">
                        <div className="h-200 w-100 p-3  ">
                            <img
                                src={user.link}
                                alt="Doctor"
                                className="object-cover mb-4 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10 text-lg">
                    <div className="py-3  m-3">
                        <div className="w-2/3 sm:text-center m-5 ">
                            <p className="dark:text-gray-100 font-bold text-heading sm:text-4xl text-2xl text-gray-700">
                                {user.firstName} {user.lastName}
                            </p>
                            <p className="text-heading dark:text-gray-300 ">{user.position}</p>
                        </div>
                        <h2 className="text-xl font-bold  text-gray-700 dark:text-gray-100 ">Information</h2>
                        <div className="border-t-2 w-25 border-sky-500 my-3"></div>

                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Position: <span className="font-semibold ">{user.position}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Degree: <span className="font-semibold">{user.degree}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Address: <span className="font-semibold">{user.address}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Appointments: <span className="font-semibold">{user.appointments}</span>
                        </p>
                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Work experience: <span className="font-semibold">{user.workExperience} years</span>
                        </p>

                        <p className="text-gray-700 mb-2 dark:text-gray-300">
                            Phone number: <span className="font-semibold">{user.phoneNumber}</span>
                        </p>

                        <h2 className="text-xl font-bold dark:text-gray-100 text-gray-700 ">About me</h2>
                        <div className="border-t-2 w-25 border-sky-500 my-3"></div>
                        <p>{user.about}</p>
                    </div>
                </div>
            </div>
        </>
    );
}