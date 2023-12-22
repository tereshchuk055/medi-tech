import { useEffect } from "react";
import ProfileCard from "../components/Cards/ProfileCard";
import { useTypedSelector } from "../hooks/storeHooks";


export default function Profile() {
    const { user } = useTypedSelector((state) => state.auth);
    const { patientss } = useTypedSelector((state) => state.patients);

    useEffect(() => {
        console.log("defrgt")
    })

    return (
        <>
            <div className="bg-gray-100 flex flex-wrap justify-center p-10 dark:bg-neutral-900">
                {[...patientss.filter(a => a.id == user?.id)].map(n =>
                    <ProfileCard key={n.id} patient={n} />
                )}
            </div>
        </>
    )
}