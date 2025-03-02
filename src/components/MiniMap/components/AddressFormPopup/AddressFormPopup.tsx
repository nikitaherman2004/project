import { Button } from "@material-ui/core";
import { LatLngExpression } from "leaflet";
import React, { useCallback, useRef } from "react";
import { FC } from "react";
import { Popup } from "react-leaflet";
import CommonInput from "src/components/CommonInput/CommonInput";
import { configureInputs } from "./config/addressFormPopup.config";
import { RestaurantLocation } from "src/types/restaurant";

interface AddressFormPopupProps {
    onSaveChanges: () => void;
    position: LatLngExpression;
    onCancelChanges: () => void;
    formLocation: RestaurantLocation;
    onChangeFormLocation: (location: RestaurantLocation) => void;
};

const AddressFormPopup: FC<AddressFormPopupProps> = ({
    position,
    formLocation,
    onSaveChanges,
    onCancelChanges,
    onChangeFormLocation,
}) => {
    const popupRef = useRef<L.Popup | null>(null);

    const onPopupClose = useCallback(() => {
        let popup = popupRef.current;
        if (!popup) {
            return;
        };

        popup.close();
        popup = null;
    }, []);

    return <Popup ref={popupRef} position={position} closeButton={false}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {configureInputs(onChangeFormLocation, formLocation).map((prop) => (
                <CommonInput
                    showLabel
                    width="100%"
                    height="30px"
                    marginLeft="0"
                    onChange={prop.onChange}
                    formLabel={prop.formLabel}
                    placeHolder={prop.placeHolder}
                />
            ))}
            <div style={{
                display: 'flex',
                gap: '5px',
                width: '100%',
                justifyContent: 'flex-end',
                paddingTop: '5px',
            }}>
                <Button onClick={() => {
                    onCancelChanges();
                    onPopupClose();
                }} style={{ textTransform: 'none', padding: '2.5px' }}>
                    Отмена
                </Button>
                <Button onClick={() => {
                    onSaveChanges();
                    onPopupClose();
                }} variant="text" style={{
                    backgroundColor: '#4f6bed',
                    color: 'white',
                    textTransform: 'none',
                    padding: '2.5px'
                }}>
                    Ок
                </Button>
            </div>
        </div>
    </Popup>
}

export default AddressFormPopup;