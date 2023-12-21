export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    permission: number
    age: number;
    position: string
    link: string;
    degree: string,
    address: string,
    appointments: string,
    workExperience: number,
    phoneNumber: string,
    about: string,
}

export interface News {
    id: number,
    title: string,
    description: string,
    author: string,
    photoUrl: string,
    date: string,
    link: string
}

export interface Patient {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    permission: number,
    link: string,
    number: string,
    birthDate: string,
    gender: string,
    address: string,
    workPlace: string,
    height: number,
    weight: number,
    chronicConditions: string,
    allergies: string,
    vaccinations: string
}

