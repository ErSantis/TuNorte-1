// src/components/Map/MapSection.tsx
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import { MapDisplay } from './MapDisplay';
import { LocationSelector } from './LocationSelector';
import { MapSectionProps } from '../../types/map.types';

// Coordenadas de Barranquilla, Colombia
const BARRANQUILLA_COORDS: [number, number] = [11.019234,-74.851189];


export const MapSection: React.FC<MapSectionProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [mapCenter, setMapCenter] = useState<[number, number]>(BARRANQUILLA_COORDS);
  const [zoom] = useState<number>(18); // Zoom ajustado para la universidad

  useEffect(() => {
    // Si la lista está vacía, agregamos una ubicación por defecto la ubicacion de la universidad
    if (locations.length === 0) {
      
      // Establecemos la ubicación por defecto
      setSelectedLocation(`${BARRANQUILLA_COORDS[0]}, ${BARRANQUILLA_COORDS[1]}`);
      setMapCenter(BARRANQUILLA_COORDS);
    } else {
      // Set default location if available
      const defaultLocation = `${locations[0].latitude}, ${locations[0].longitude}`;
      setSelectedLocation(defaultLocation);
      setMapCenter([locations[0].latitude, locations[0].longitude]);
    }
  }, [locations]);

  const handleLocationChange = (locationValue: string) => {
    setSelectedLocation(locationValue);
  };

  const handleUpdateMarker = () => {
    if (selectedLocation) {
      const [lat, lng] = selectedLocation.split(',').map(coord => parseFloat(coord.trim()));
      setMapCenter([lat, lng]);
    }
  };

  return (
    <Box 
      component="section" 
      id="tab-map" 
      sx={{ 
        py: 4, 
        px: 2,
        maxWidth: 1200,
        mx: 'auto'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
        <MapIcon sx={{ mr: 1 }} /> Mapa
      </Typography>
      
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <LocationSelector 
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationChange={handleLocationChange}
          onUpdateMarker={handleUpdateMarker}
        />
      </Paper>
      
      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%', 
          height: '500px',
          overflow: 'hidden'
        }}
      >
        <MapDisplay 
          center={mapCenter} 
          zoom={zoom} 
          locations={locations} 
        />
      </Paper>
    </Box>
  );
};