import Card from '../components/Cards/Card';
import DoctorCard from '../components/Cards/DoctorCard';
import { List } from 'react-virtualized';
import { useTypedSelector } from '../hooks/storeHooks';
import { useState } from 'react';
import { User } from '../store/interfaces/entities';

// import { lazy, Suspense } from 'react';
// import { createPortal } from "react-dom";
// import Button from '../components/Button/Button';


// const Modal = lazy(() => import('../components/Modal/Modal'));



export default function Employees() {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { employees } = useTypedSelector((state) => state.employees);

    const [selected, setSelected] = useState<User | null>(employees[0])


    const rowRenderer = ({ index, key, style }: any) => {
        const user = employees[index];
        return (
            <div key={key} style={style} className="space-y-4" onClick={() => { setSelected(user) }} >
                <Card key={user.id} user={user} />
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
                                rowCount={employees.length}
                                rowHeight={100}
                                rowRenderer={rowRenderer}
                            />
                        </div>
                        <div className="flex-grow bg-gray-100 dark:bg-neutral-900 overflow-y-hidden">
                            <div className="flex w-full items-center">
                                {selected && <DoctorCard user={selected} />}
                            </div>
                        </div>
                    </div>
                    {/* <Button onClick={() => setIsModalOpen(true)} text="Modal" /> */}
                </div>
            </div>
        </>
    )
}
