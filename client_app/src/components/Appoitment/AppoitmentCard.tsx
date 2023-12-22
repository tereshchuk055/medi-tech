import { useAppDispatch, useTypedSelector } from '../../hooks/storeHooks';
import { Appoitment } from '../../store/interfaces/entities';
import { cancelAppointment } from '../../store/slices/appoitment';


interface AppoitmentCardProps {
    appointment: Appoitment
}

export default function AppoitmentCard({ appointment }: AppoitmentCardProps) {
    const dispatch = useAppDispatch();
    const { patients, employees } = useTypedSelector((state) => state.users);

    const patient = patients.find(u => u.id == appointment.id_patient);
    const doctor = employees.find(u => u.id == appointment.id_doctor);

    const handleClick = () => {
        dispatch(cancelAppointment(appointment.id!))
    }

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg m-6 pt-10 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={appointment.link} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{appointment.time}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Patient: {patient?.firstName} {patient?.lastName}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Doctor: {doctor?.firstName} {doctor?.lastName}</span>
                <div className="flex mt-4 md:mt-6">
                    <button onClick={handleClick} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Cancel</button>
                </div>
            </div>
        </div>

    );
}
