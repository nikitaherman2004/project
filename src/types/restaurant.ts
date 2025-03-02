import { DayOfWeek } from "./enum/DayOfWeek.enum";

export type RestaurantCreateDto = {
    name: string;
    organization: string;
    fullDescription: string;
    numberOfGuests: number;
    shortDescription: string;
    typeOfEstablishment: string;
    location: RestaurantLocation;
    basicInfo: RestaurantBasicInfo;
    details: RestaurantAdditionalDetails[];
    workSchedules: RestaurantWorkSchedule[];
};

export type RestaurantLocation = {
    address: string;
    district: string;
    latitude: number;
    longitude: number;
    microDistrict: string;
};

export type RestaurantBasicInfo = {
    services: string;
    features: string;
    equipment: string;
    draftBeer: boolean;
    showProgram: string;
    hookahRental: boolean;
    summerTerrace: boolean;
    entertainments: string;
    terraceCapacity: number;
};

export type RestaurantAdditionalDetails = {
    name: string;
    description: string;
};

export type RestaurantWorkSchedule = {
    dayOfWeek: DayOfWeek;
    workingEnd: string;
    workingStart: string;
};