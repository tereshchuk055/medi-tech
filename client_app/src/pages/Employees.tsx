import Card from '../components/Cards/Card';
import { List } from 'react-virtualized';
import { useState } from 'react';
import DoctorCard from '../components/Cards/DoctorCard';
// import { useState, lazy, Suspense } from 'react';
// import { createPortal } from "react-dom";
// import Button from '../components/Button/Button';


// const Modal = lazy(() => import('../components/Modal/Modal'));

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    position: string
    link: string;
    degree: string,
    address: string,
    appointments: string,
    workExperience: number,
    phoneNumber: string,
    about: string,
}



const defaultValues: User[] = [
    {
        id: 0,
        firstName: 'Vlad',
        lastName: 'Tereshchuk',
        age: 25,
        position: 'Терапевт',
        link: 'https://img.freepik.com/free-photo/doctor-holding-clipboard-looking-at-camera_23-2148285743.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais',
        degree: 'MD',
        address: '123 Main St, City',
        appointments: 'Monday, Wednesday, Friday',
        workExperience: 3,
        phoneNumber: '+1234567890',
        about: 'I am a passionate and dedicated therapist with a focus on holistic health.',
    },
    {
        id: 1,
        firstName: 'Vlad',
        lastName: 'Tereshchuk',
        age: 25,
        position: 'Терапевт',
        link: 'https://img.freepik.com/free-photo/doctor-holding-clipboard-looking-at-camera_23-2148285743.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais',
        degree: 'MD',
        address: '123 Main St, City',
        appointments: 'Monday, Wednesday, Friday',
        workExperience: 3,
        phoneNumber: '+1234567890',
        about: 'I am a passionate and dedicated therapist with a focus on holistic health.',
    },
    {
        id: 2,
        firstName: 'Vlad',
        lastName: 'Tereshchuk',
        age: 25,
        position: 'Терапевт',
        link: 'https://img.freepik.com/free-photo/doctor-holding-clipboard-looking-at-camera_23-2148285743.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais',
        degree: 'MD',
        address: '123 Main St, City',
        appointments: 'Monday, Wednesday, Friday',
        workExperience: 3,
        phoneNumber: '+1234567890',
        about: 'I am a passionate and dedicated therapist with a focus on holistic health.',
    },

]




export default function Employees() {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [users,] = useState<User[]>(defaultValues);


    const rowRenderer = ({ index, key, style }: any) => {
        const user = users[index];
        return (
            <div key={key} style={style} className="space-y-4 " >
                <Card position={user.position} age={user.age} firstName={user.firstName} lastName={user.lastName} />
            </div>

        );
    };


    return (
        <>
            <div className="bg-gray-100 dark:bg-neutral-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
                <div className="flex-grow overflow-hidden h-full flex flex-col">
                    <div className="flex-grow flex overflow-x-hidden">
                        <div className="xl:w-85 w-50 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full  lg:block hidden p-5">
                            <div className="text-xs text-gray-400 tracking-wider">Doctors</div>
                            <div className="relative mt-2 mb-5">
                                <input type="text" className="pl-8 h-9  bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search" />
                                <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>

                            </div>
                            <List
                                width={300}
                                height={600}
                                rowCount={users.length}
                                rowHeight={100}
                                rowRenderer={rowRenderer}
                            />
                        </div>
                        <div className="flex-grow bg-gray-100 dark:bg-neutral-900 overflow-y-hidden">
                            <div className="flex w-full items-center">


                                <DoctorCard
                                    key={defaultValues[0].id}
                                    link={defaultValues[0].link}
                                    firstName={defaultValues[0].firstName}
                                    lastName={defaultValues[0].lastName}
                                    position={defaultValues[0].position}
                                    degree={defaultValues[0].degree}
                                    address={defaultValues[0].address}
                                    appointments={defaultValues[0].appointments}
                                    workExperience={defaultValues[0].workExperience}
                                    phoneNumber={defaultValues[0].phoneNumber}
                                    about={defaultValues[0].about}
                                />


                            </div>
                        </div>
                    </div>

                    {/* <Button onClick={() => setIsModalOpen(true)} text="Modal" /> */}
                </div>
            </div>




        </>
    )
}
