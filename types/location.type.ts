export type Wards =  {
    Id: string;
    Name: string;
    Level: string;
}

export type Districts = {
    Id: string;
    Name: string;
    Wards: Wards [];
}

export type Location = {
    Id: string;
    Name: string;
    Districts: Districts [];
}