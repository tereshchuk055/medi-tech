import { useAppDispatch, useTypedSelector } from '../../hooks/storeHooks';
import { Appoitment, Doctor } from '../../store/interfaces/entities';
import { addAppointment } from '../../store/slices/appoitment';
import { changeEmployee } from '../../store/slices/users';
import Button from '../Button/Button';
import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
    onClick?: () => void,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: ReactNode,
    buttonText?: string,
}

const Specialisations = [
    { key: 0, value: "Therapist" },
    { key: 1, value: "Cardiologist" },
    { key: 2, value: "Dermatologist" },
]

export default function AppointmentModal({ onClick, setIsModalOpen, buttonText }: ModalProps) {
    const dispath = useAppDispatch()
    const { employees } = useTypedSelector(state => state.users)
    const { user } = useTypedSelector(state => state.auth)

    const [selectedSpec, setSelectedSpec] = useState<string>(Specialisations[0].value);
    const [selectedDoctors, setSelectedDoctors] = useState<Doctor[]>([]);
    const [selectedDoctor, setSelectedDoctor] = useState<number>();
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [selectedPath, setSelectedPath] = useState<string>("");

    useEffect(() => {
        setSelectedDoctors([...employees].filter((e) => e.position == selectedSpec))
    }, [selectedSpec])

    useEffect(() => {
        setSelectedDoctor(selectedDoctors[0]?.id)
    }, [selectedDoctors])

    useEffect(() => {
        setSelectedTime(selectedDoctors.find(d => d.id == selectedDoctor)?.times[0] ?? "")
    }, [selectedDoctor])

    const handleButtonClick = () => {
        dispath(addAppointment({ id: null, id_doctor: selectedDoctor!, id_patient: user!.id, time: selectedTime, link: selectedPath } as Appoitment))
        const doctor = selectedDoctors.find(d => d.id == selectedDoctor)
        if (doctor) {
            const changed: Doctor = { ...doctor, times: doctor.times.filter(t => t != selectedTime) }

            dispath(changeEmployee(changed))
        }

        if (onClick)
            onClick();
        setIsModalOpen(false);
    }

    return (

        <div className="modal fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-96 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto p-5">
                <div className="flex justify-end">
                    <button onClick={() => setIsModalOpen(false)}>
                        <svg className="w-6 h-6" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialisation</label>
                            <select value={selectedSpec} onChange={(e) => setSelectedSpec(e.target.value)} id="specialisation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                {Specialisations.map((s) => <option key={s.key} value={s.value}>{s.value}</option>)}
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <select onChange={(e) => setSelectedDoctor(+e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                {selectedDoctors.map((d) => <option key={d.id} value={d.id}>{d.firstName} {d.lastName}</option>)}
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time</label>
                            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                {selectedDoctors.find(d => d.id == selectedDoctor)?.times.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Фото</label>
                            <textarea onChange={(e) => setSelectedPath(e.target.value)} id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Опишіть свої скарги тут..."></textarea>
                        </div>
                    </div>

                </form>
                <Button onClick={handleButtonClick} text={buttonText ?? "OK"} />
            </div>
        </div>

    );
}


