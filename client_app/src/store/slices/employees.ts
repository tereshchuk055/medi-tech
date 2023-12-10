import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../interfaces/entities";


interface EmployeesSlice {
    employees: User[]
}

const initialState: EmployeesSlice = {
    employees: []
}

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        setEmployees: (state: EmployeesSlice, action: PayloadAction<User[]>) => {
            state.employees = action.payload;
        },
        addEmployee: (state: EmployeesSlice, action: PayloadAction<User>) => {
            state.employees = [...state.employees, action.payload];
        },
        deleteEmployee: (state: EmployeesSlice, action: PayloadAction<User>) => {
            state.employees = state.employees.filter(m => m != action.payload);
        },
    }
});

export const { setEmployees, addEmployee, deleteEmployee } = employeesSlice.actions

export const employees = employeesSlice.reducer
