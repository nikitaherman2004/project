import { Icon, LatLngExpression, LeafletMouseEvent } from "leaflet";
import React, { FC, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import marker from '../../../../img/marker-svgrepo-com.svg';
import AddressFormPopup from "../AddressFormPopup/AddressFormPopup";
import './markerLayer.scss';
import { RestaurantLocation } from "src/types/restaurant";

interface MarkerLayerProps {
    formLocation: RestaurantLocation;
    onChangeFormLocation: (location: RestaurantLocation) => void;
};

const MarkerLayer: FC<MarkerLayerProps> = ({ formLocation, onChangeFormLocation }) => {
    const map = useMap();

    const [isAccepted, setIsAccepted] = useState<boolean>(false);
    const [position, setPosition] = useState<LatLngExpression | null>(null);

    const onChangePosition = useCallback((event: LeafletMouseEvent) => {
        setPosition(event.latlng);
    }, []);

    useEffect(() => {
        map.on('click', onChangePosition);

        return () => {
            map.off('click', onChangePosition);
        };
    }, []);

    const markerIcon = useMemo(() => new Icon({
        iconUrl: marker,
        className: 'marker',
        iconAnchor: [25, 52],
    }), []);

    const onSaveChanges = useCallback(() => {
        setIsAccepted(true);
    }, []);

    const onCancelChanges = useCallback(() => {
        setIsAccepted(false);
    }, []);

    return <React.Fragment key={'map-marker'}>
        {
            position && isAccepted &&
            <Marker
                icon={markerIcon}
                draggable={false}
                position={position}
            />
        }
        {
            position && <AddressFormPopup
                position={position}
                formLocation={formLocation}
                onSaveChanges={onSaveChanges}
                onCancelChanges={onCancelChanges}
                onChangeFormLocation={onChangeFormLocation}
            />
        }
    </React.Fragment>
};

export default MarkerLayer;