// src/components/Map/MapDisplay.tsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { ChangeMapViewProps, MapDisplayProps } from '../../../types/map.types';
import 'leaflet/dist/leaflet.css';
import { getLocationName } from '../../../utils/map/getLocationName';


// Componente para actualizar la posición del mapa
const ChangeMapView: React.FC<ChangeMapViewProps> = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 18);
  return null;
};


export const MapDisplay: React.FC<MapDisplayProps> = ({
  center,
  zoom,
  locations
}) => {
  // Arreglo para iconos de Leaflet en React
  useEffect(() => {
    // Definir el ícono personalizado con rutas absolutas
    const customIcon = new L.Icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Configurar el ícono por defecto
    L.Marker.prototype.options.icon = customIcon;
  }, []);


  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          {getLocationName(locations,center[0], center[1])}
        </Popup>
      </Marker>
      <ChangeMapView coords={center} />
    </MapContainer>
  );
};