// src/components/Map/LocationSelector.tsx
import React from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Button, 
  FormHelperText,
  SelectChangeEvent
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CourseLocationType } from '../../../types/course.type';

interface LocationSelectorProps {
  locations: CourseLocationType[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  onUpdateMarker: () => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({ 
  locations, 
  selectedLocation, 
  onLocationChange, 
  onUpdateMarker 
}) => {
  
  const handleChange = (event: SelectChangeEvent) => {
    onLocationChange(event.target.value as string);
  };

  return (
    <form>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="location-select-label">Selecciona la posición del marcador</InputLabel>
        <Select
          labelId="location-select-label"
          id="markerPosition"
          value={selectedLocation}
          label="Selecciona la posición del marcador"
          onChange={handleChange}
          startAdornment={<LocationOnIcon color="action" sx={{ mr: 1 }} />}
        >
          {locations.map((location, index) => (
            <MenuItem 
              key={index} 
              value={`${location.latitude}, ${location.longitude}`}
            >
              {location.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Selecciona una ubicación para actualizar el mapa</FormHelperText>
      </FormControl>
      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={onUpdateMarker}
        startIcon={<LocationOnIcon />}
        sx={{ mt: 1 }}
      >
        Actualizar Ubicación
      </Button>
    </form>
  );
};