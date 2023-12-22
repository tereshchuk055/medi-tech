import Button from '../Button/Button';
import React, { ReactNode } from 'react';

interface ModalProps {
    onClick?: () => void,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: ReactNode,
    buttonText?: string,
}

export default function Modal({ onClick, children, setIsModalOpen, buttonText }: ModalProps) {

    const handleButtonClick = () => {
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
                {children}
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialisation</label>
                            <select id="specialisation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected value="сardiologist">Cardiologist</option>
                                <option value="therapist">Therapist</option>
                                <option value="dermatologist">Dermatologist</option>
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <select id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected value="сardiologist">Cardiologist</option>
                                <option value="therapist">Therapist</option>
                                <option value="dermatologist">Dermatologist</option>
                            </select>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time</label>
                            <select id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected value="8_00">8:00</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Записатись на прийом</label>
                            <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                        </div>
                    </div>

                </form>
                <Button onClick={handleButtonClick} text={buttonText ?? "OK"} />
            </div>
        </div>

    );
}


