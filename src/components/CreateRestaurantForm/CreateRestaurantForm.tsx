import React, { FC, useCallback, useState } from "react";
import { RestaurantBasicInfo, RestaurantCreateDto, RestaurantLocation } from "src/types/restaurant";
import CommonInput from "../CommonInput/CommonInput";
import CommonSelect from "../CommonSelect/CommonSelect";
import CommonSwitch from "../CommonSwitch/CommonSwitch";
import MiniMap from "../MiniMap/MiniMap";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import { configureInputs, configureSwitches, configureTextAreaInputs } from "./config/form.config";
import './createRestaurantForm.scss';


const initialRestaurantFormState: RestaurantCreateDto = {
    name: '',
    organization: '',
    fullDescription: '',
    numberOfGuests: 0,
    shortDescription: '',
    typeOfEstablishment: '',
    location: {
        address: '',
        district: '',
        latitude: 0,
        longitude: 0,
        microDistrict: '',
    },
    basicInfo: {
        services: '',
        features: '',
        equipment: '',
        draftBeer: false,
        showProgram: '',
        hookahRental: false,
        summerTerrace: false,
        entertainments: '',
        terraceCapacity: 0,
    },
    details: [],
    workSchedules: [],
};

const CreateRestaurantForm: FC = () => {
    
    const [form, setForm] = useState<RestaurantCreateDto>(initialRestaurantFormState);

    const changeProcessedForm = useCallback((newFormState: RestaurantCreateDto) => {
        setForm(newFormState);
    }, []);

    const changeProcessedBasicInfo = useCallback((basicInfo: RestaurantBasicInfo) => {
        setForm(({ ...form, basicInfo }));
    }, []);

    const changeProcessedFormLocation = useCallback((location: RestaurantLocation) => {
        setForm(({ ...form, location }));
    }, []);

    return <div className="form">
        <CommonInput
            showLabel
            width="45%"
            height="40px"
            marginLeft="0"
            placeHolder="Введите название"
            formLabel="Название заведения"
            onChange={(value) => changeProcessedForm({ ...form, name: value })}
        />
        <CommonSelect
            value={form.typeOfEstablishment}
            onChange={(value) => changeProcessedForm(({ ...form, typeOfEstablishment: value }))}
        />
        {configureTextAreaInputs(changeProcessedForm, form).map((prop) => (
            <TextAreaInput
                key={prop.label}
                label={prop.label}
                height={prop.height}
                onChange={prop.onChange}
                placeHolder={prop.placeHolder}
            />
        ))}
        <CommonInput
            showLabel
            width="5%"
            height="40px"
            marginLeft="0"
            placeHolder="0"
            formLabel="Количество мест"
            onChange={(value) => changeProcessedForm({ ...form, numberOfGuests: Number(value) })}
        />
        {configureInputs(changeProcessedBasicInfo, form).map((prop) => (
            <TextAreaInput
                key={prop.label}
                label={prop.label}
                height={prop.height}
                onChange={prop.onChange}
                placeHolder={prop.placeHolder}
            />
        ))}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '25px' }}>
            {configureSwitches(changeProcessedBasicInfo, form).map((prop) => (
                <CommonSwitch
                    key={prop.label}
                    label={prop.label}
                    value={prop.value}
                    onChange={prop.onChange}
                />
            ))}
        </div>
        {form.basicInfo.summerTerrace &&
            <CommonInput
                showLabel
                width="25%"
                height="40px"
                marginLeft="0"
                placeHolder="Введите количество мест"
                disabled={!form.basicInfo.summerTerrace}
                formLabel="Количест мест на летней терассе"
                onChange={(value) => changeProcessedBasicInfo({ ...form.basicInfo, terraceCapacity: Number(value) })}
            />}
        <MiniMap formLocation={form.location} onChangeFormLocation={changeProcessedFormLocation} />
    </div>
};

export default CreateRestaurantForm;