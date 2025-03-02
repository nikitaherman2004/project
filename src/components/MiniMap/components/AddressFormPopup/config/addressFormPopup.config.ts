import { RestaurantCreateDto, RestaurantLocation } from "src/types/restaurant";

interface AddressInputProps {
    formLabel: string;
    placeHolder: string;
    onChange: (value: string) => void;
};

export const configureInputs = (
    onChangeLocation: (location: RestaurantLocation) => void,
    location: RestaurantLocation): AddressInputProps[] => [
        {
            formLabel: 'Адрес заведения',
            placeHolder: 'Адрес',
            onChange: (value) => onChangeLocation({
                ...location,
                address: value,
            }),
        },
        {
            formLabel: 'Район',
            placeHolder: 'Район',
            onChange: (value) => onChangeLocation({
                ...location,
                district: value,
            }),
        },
        {
            formLabel: 'Микрорайон',
            placeHolder: 'Микрорайон',
            onChange: (value) => onChangeLocation({
                ...location,
                microDistrict: value,
            }),
        },
    ];