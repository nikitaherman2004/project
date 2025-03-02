import React from "react";
import { ReactElement } from "react";
import CreateRestaurantForm from "src/components/CreateRestaurantForm/CreateRestaurantForm";

const AddRestaurantPage = (): ReactElement => {

    const a = '';

    return <div style={{ marginLeft: '308px', marginRight: '308px', paddingTop: '16px', paddingBottom: '26px' }}>
        <h1 style={{ fontSize: '28px', lineHeight: '36px', fontWeight: '700', marginBottom: '28px', color: '#201f1e' }}>
            Создание заведения
        </h1>
        <CreateRestaurantForm />
    </div>
};

export default AddRestaurantPage;