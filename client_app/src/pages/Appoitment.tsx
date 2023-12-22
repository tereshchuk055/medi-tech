import { Suspense, lazy, useState } from 'react';
import AppoitmentCard from '../components/Appoitment/AppoitmentCard';
import { useTypedSelector } from '../hooks/storeHooks';
import Button from '../components/Button/Button';

const AppointmentModal = lazy(() => import('../components/Modals/AppointmentModal'));


export default function Appoitment() {

    const { user } = useTypedSelector((state) => state.auth);
    const { appointments } = useTypedSelector((state) => state.appoitments);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    return (
        <><div className="dark:bg-neutral-900 h-screen">
            <div className="ml-20 flex justify-center p-10 w-80 dark:bg-neutral-900">
                <Button onClick={() => setIsModalOpen(true)} text="Create Appointment" />
            </div>


            <div className="bg-gray-100 flex flex-wrap justify-around  p-10 dark:bg-neutral-900">
                {[...appointments.filter(a => a.id_patient == user?.id)].map(n =>
                    <AppoitmentCard key={n.id} appointment={n} />
                )}
            </div>
            {isModalOpen && (<Suspense fallback={<div>Loading...</div>}>
                <AppointmentModal setIsModalOpen={setIsModalOpen} children={[]} />
            </Suspense>)}
            </div>
        </>
    )
}
