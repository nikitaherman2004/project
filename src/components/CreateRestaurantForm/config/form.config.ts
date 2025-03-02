import { CommonSwitchProps } from "src/components/CommonSwitch/CommonSwitch";
import { TextAreaInputProps } from "src/components/TextAreaInput/TextAreaInput";
import { RestaurantBasicInfo, RestaurantCreateDto } from "src/types/restaurant";

export const configureSwitches = (
    onChangeBasicInfo: (basicInfo: RestaurantBasicInfo) => void,
    currentForm: RestaurantCreateDto): CommonSwitchProps[] => [
        {
            label: 'Разливное пиво',
            value: currentForm.basicInfo.draftBeer,
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                draftBeer: value
            }),
        },
        {
            label: 'Аренда кальяна',
            value: currentForm.basicInfo.hookahRental,
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                hookahRental: value
            }),
        },
        {
            label: 'Летняя терасса',
            value: currentForm.basicInfo.summerTerrace,
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                summerTerrace: value
            }),
        },
    ];

export const configureInputs = (
    onChangeBasicInfo: (basicInfo: RestaurantBasicInfo) => void,
    currentForm: RestaurantCreateDto): TextAreaInputProps[] => [
        {
            label: 'Предоставляемые услуги',
            height: 60,
            placeHolder: 'Введите перечень услуг',
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                services: value
            }),
        },
        {
            label: 'Особенности заведения',
            height: 60,
            placeHolder: 'Введите ключевые особенности',
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                features: value
            }),
        },
        {
            label: 'Оборудование',
            height: 60,
            placeHolder: 'Введите перечень оборудования',
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                equipment: value
            }),
        },
        {
            label: 'Шоу-программа',
            height: 60,
            placeHolder: 'Введите мероприятия заведения',
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                showProgram: value
            }),
        },
        {
            label: 'Развлечения',
            height: 60,
            placeHolder: 'Введите развлекательные программы',
            onChange: (value) => onChangeBasicInfo({
                ...currentForm.basicInfo,
                entertainments: value
            }),
        },
    ];

export const configureTextAreaInputs = (
    onChangeForm: (newFormState: RestaurantCreateDto) => void,
    currentForm: RestaurantCreateDto): TextAreaInputProps[] => [
        {
            label: 'Краткое описание заведения',
            height: 120,
            placeHolder: 'Введите краткое описание заведения',
            onChange: (value) => onChangeForm({
                ...currentForm,
                shortDescription: value
            }),
        },
        {
            label: 'Подробное описание заведения',
            height: 250,
            placeHolder: 'Введите подробное описание заведения',
            onChange: (value) => onChangeForm({
                ...currentForm,
                fullDescription: value
            }),
        },
    ]