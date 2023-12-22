import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Patient } from "../interfaces/entities";

interface PatientsSlice {
    patientss: Patient[]
}

const initialState: PatientsSlice = {
    patientss: (await import("../users.json")).default,
}

const patientsSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        setPatient: (state: PatientsSlice, action: PayloadAction<Patient[]>) => {
            state.patientss = action.payload;
        },
        addPatient: (state: PatientsSlice, action: PayloadAction<Patient>) => {
            state.patientss = [...state.patientss, action.payload];
        },
        deletePatient: (state: PatientsSlice, action: PayloadAction<Patient>) => {
            state.patientss = state.patientss.filter(m => m != action.payload);
        },
    }
});

export const { setPatient, addPatient, deletePatient } = patientsSlice.actions

export const patientss = patientsSlice.reducer
