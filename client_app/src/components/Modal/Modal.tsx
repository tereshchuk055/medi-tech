import Button from '../Button/Button';
import React, { ReactNode } from 'react';

interface ModalProps {
    onClick?: () => void,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children: ReactNode,
    buttonText ?: string,
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
                <Button onClick={handleButtonClick} text={buttonText ?? "OK"} />
            </div>
        </div>
    );
}


