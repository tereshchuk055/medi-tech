import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Doctor, User } from "../interfaces/entities";


interface UsersSlice {
    employees: Doctor[],
    patients: User[]
}

const initialState: UsersSlice = {
    employees: (await import("../employees.json")).default,
    patients: (await import("../users.json")).default
}


const usersSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees: (state: UsersSlice, action: PayloadAction<Doctor[]>) => {
            state.employees = action.payload;
        },
        addEmployee: (state: UsersSlice, action: PayloadAction<Doctor>) => {
            state.employees = [...state.employees, action.payload];
        },
        deleteEmployee: (state: UsersSlice, action: PayloadAction<Doctor>) => {
            state.employees = state.employees.filter(m => m != action.payload);
        },
    }
});

export const { setEmployees, addEmployee, deleteEmployee } = usersSlice.actions

export const employees = usersSlice.reducer
