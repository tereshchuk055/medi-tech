

// import { useState, lazy, Suspense } from 'react';
// import { createPortal } from "react-dom";
// import Button from '../components/Button/Button';

import ProfileCard from "../components/Cards/ProfileCard";

export default function Profile() {
    return (
        <>
            <div className="bg-gray-100 flex flex-wrap justify-center p-10 dark:bg-neutral-900">
                <ProfileCard
                />
            </div>
        </>
    )
}
