interface CardProps {
    position: string,
    age: number,
    firstName: string,
    lastName: string,
}

export default function Card({ position, age, firstName, lastName }: CardProps) {
    return (
        <>
            <button className="bg-white p-3  w-full flex flex-col rounded-md dark:bg-neutral-700  shadow">
                <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-100 w-full dark:text-gray-100">
                    <img src="https://img.freepik.com/premium-vector/vector-illustration-doctor-avatar-photo-of-a-doctor-to-fill-out-a-questionnaire-or-banner-set-and-more-doctor-health-medical-icon_469123-417.jpg" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
                    {firstName} {lastName}
                </div>
                <div className="flex items-center w-full">
                    <div className="bg-sky-300 text-xs py-1 px-2 leading-none dark:bg-sky-500 text-gray-900 font-bold rounded-md">{position}</div>
                    <div className="ml-auto text-gray-900 text-xs dark:text-gray-100 font-bold">Age: {age}</div>
                </div>
            </button>
        </>
    );
}
