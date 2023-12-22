export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    permission: number,
    age: number,
    link: string,
    phoneNumber: string,

}

export interface Doctor extends User {
    position: string
    degree: string,
    workExperience: number,
    about: string,
    times: string[],
    appointments: string
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

export interface Appoitment {
    id: number | null,
    id_patient: number,
    id_doctor: number,
    time: string,
    link: string
}

export interface Patient extends User {
    gender: string,
    address: string,
    height: number,
    weight: number,
    chronicConditions: string,
    allergies: string,
    about: string,
    vaccinations: string
}