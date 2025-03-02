import 'leaflet/dist/leaflet.css';
import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import './miniMap.scss';
import MarkerLayer from './components/MarkerLayer/MarkerLayer';
import { RestaurantLocation } from 'src/types/restaurant';

interface MiniMapProps {
    formLocation: RestaurantLocation;
    onChangeFormLocation: (location: RestaurantLocation) => void;
};

const MiniMap: FC<MiniMapProps> = ({ formLocation, onChangeFormLocation }) => {
    return <MapContainer className="mapContainer"
        zoom={13}
        zoomControl={false}
        center={[53.9, 27.5667]}
        attributionControl={false}
    >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarkerLayer formLocation={formLocation} onChangeFormLocation={onChangeFormLocation} />
    </MapContainer>
}; ``

export default MiniMap;