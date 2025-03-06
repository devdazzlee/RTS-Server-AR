export interface IUser {
    id: number;
    name: string;
    email: string;
}

const users: IUser[] = [
    { id: 1, name: "Ahmed Raza", email: "ahmed.raza@example.com" },
    { id: 2, name: "Sara Khan", email: "sara.khan@example.com" },
    { id: 3, name: "Zain Malik", email: "zain.malik@example.com" },
    { id: 4, name: "Ali Haider", email: "ali.haider@example.com" },
    { id: 5, name: "Ayesha Noor", email: "ayesha.noor@example.com" },
    { id: 6, name: "Bilal Ahmed", email: "bilal.ahmed@example.com" },
    { id: 7, name: "Fatima Sheikh", email: "fatima.sheikh@example.com" },
    { id: 8, name: "Hassan Raza", email: "hassan.raza@example.com" },
    { id: 9, name: "Zara Iqbal", email: "zara.iqbal@example.com" },
    { id: 10, name: "Usman Tariq", email: "usman.tariq@example.com" },
    { id: 11, name: "Nida Yasir", email: "nida.yasir@example.com" },
    { id: 12, name: "Kashif Rafiq", email: "kashif.rafiq@example.com" },
    { id: 13, name: "Mariam Akram", email: "mariam.akram@example.com" },
    { id: 14, name: "Omar Farooq", email: "omar.farooq@example.com" },
    { id: 15, name: "Tariq Javed", email: "tariq.javed@example.com" },
    { id: 16, name: "Rabia Anwar", email: "rabia.anwar@example.com" },
    { id: 17, name: "Jawad Khan", email: "jawad.khan@example.com" },
    { id: 18, name: "Samina Rehman", email: "samina.rehman@example.com" },
    { id: 19, name: "Fahad Ali", email: "fahad.ali@example.com" },
    { id: 20, name: "Hina Riaz", email: "hina.riaz@example.com" },
    { id: 21, name: "Danish Saeed", email: "danish.saeed@example.com" },
    { id: 22, name: "Sana Munir", email: "sana.munir@example.com" },
    { id: 23, name: "Rehan Qureshi", email: "rehan.qureshi@example.com" },
    { id: 24, name: "Lubna Aziz", email: "lubna.aziz@example.com" },
    { id: 25, name: "Babar Nawaz", email: "babar.nawaz@example.com" },
    { id: 26, name: "Zubair Shafiq", email: "zubair.shafiq@example.com" },
    { id: 27, name: "Mehreen Asif", email: "mehreen.asif@example.com" },
    { id: 28, name: "Imran Khan", email: "imran.khan@example.com" },
    { id: 29, name: "Asma Khalid", email: "asma.khalid@example.com" },
    { id: 30, name: "Hammad Rauf", email: "hammad.rauf@example.com" }
];;

export const getAllUsers = (): IUser[] => {
    return users;
};

export const getUserById = (id: number): IUser | undefined => {
    return users.find(user => user.id === id);
};
