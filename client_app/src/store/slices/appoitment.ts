import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Appoitment } from "../interfaces/entities";

interface AppoitmentSlice {
    appointments: Appoitment[]
}

const initialState: AppoitmentSlice = {
    appointments: (await import("../appointments.json")).default,
}

const appoitmentSlice = createSlice({
    name: "appoitments",
    initialState,
    reducers: {
        setAppoitment: (state: AppoitmentSlice, action: PayloadAction<Appoitment[]>) => {
            state.appointments = action.payload;
        },
        addAppointment: (state: AppoitmentSlice, action: PayloadAction<Appoitment>) => {
            const maxId = state.appointments.reduce((max, obj) => (obj.id! > max ? obj.id! : max), 0);

            state.appointments = [...state.appointments, {...action.payload, id:maxId+1}].sort((a, b) => {
                const timeA = new Date(`2000-01-01T${a.time}`);
                const timeB = new Date(`2000-01-01T${b.time}`);

                return timeA.getTime() - timeB.getTime();
            });
        },
        cancelAppointment: (state: AppoitmentSlice, action: PayloadAction<number>) => {
            state.appointments = state.appointments.filter(a => a.id != action.payload);
        },
    }
});

export const { setAppoitment, addAppointment, cancelAppointment } = appoitmentSlice.actions

export const appointments = appoitmentSlice.reducer
