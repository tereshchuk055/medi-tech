import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User } from "../interfaces/entities";


interface EmployeesSlice {
    employees: User[]
}

const initialState: EmployeesSlice = {
    employees: [
        {
            id: 0,
            permission: 0,
            email: "sofia@gmail.com",
            firstName: 'Sofia',
            lastName: 'Horai',
            age: 19,
            position: 'Терапевт',
            link: 'https://img.freepik.com/free-photo/doctor-holding-clipboard-looking-at-camera_23-2148285743.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais',
            degree: 'MD',
            address: '123 Main St, City',
            appointments: 'Monday, Wednesday, Friday',
            workExperience: 3,
            phoneNumber: '+1234567890',
            about: 'I am a passionate and dedicated therapist with a focus on holistic health.',
        },
        {
            id: 1,
            permission: 0,
            email: "sofia@gmail.com",
            firstName: 'Vlad',
            lastName: 'Tereshchuk',
            age: 25,
            position: 'Терапевт',
            link: 'https://img.freepik.com/free-photo/doctor-holding-clipboard-looking-at-camera_23-2148285743.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais',
            degree: 'MD',
            address: '123 Main St, City',
            appointments: 'Monday, Wednesday, Friday',
            workExperience: 3,
            phoneNumber: '+1234567890',
            about: 'I am a passionate and dedicated therapist with a focus on holistic health.',
        },
        {
            id: 2,
            permission: 0,
            email: "sofia@gmail.com",
            firstName: 'Vlad',
            lastName: 'Tereshchuk',
            age: 25,
            position: 'Терапевт',
            link: 'https://img.freepik.com/free-photo/doctor-holding-clipboard-looking-at-camera_23-2148285743.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais',
            degree: 'MD',
            address: '123 Main St, City',
            appointments: 'Monday, Wednesday, Friday',
            workExperience: 3,
            phoneNumber: '+1234567890',
            about: 'I am a passionate and dedicated therapist with a focus on holistic health.',
        },

    ]
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
