import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Doctor, User } from "../interfaces/entities";


interface UsersSlice {
    employees: Doctor[],
    patients: User[],
    searchParam: string
}

const initialState: UsersSlice = {
    employees: (await import("../employees.json")).default,
    patients: (await import("../users.json")).default,
    searchParam: ""
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
        setSearchParam: (state: UsersSlice, action: PayloadAction<string>) => {
            state.searchParam = action.payload;
        },
        changeEmployee: (state: UsersSlice, action: PayloadAction<Doctor>) => {
            state.employees = state.employees.map(t => (t.id === action.payload.id ? action.payload : t));
        }
    }
});

export const { setEmployees, addEmployee, deleteEmployee, setSearchParam, changeEmployee } = usersSlice.actions

export const users = usersSlice.reducer