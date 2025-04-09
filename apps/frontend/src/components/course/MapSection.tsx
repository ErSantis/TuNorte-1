import React, { useCallback } from 'react';
import { 
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  SelectChangeEvent
} from '@mui/material';
import { CourseLocationType } from "../../types/course.type";

export const MapSection = React.memo(({ locations }: { locations: CourseLocationType[] }) => {
  const handleUpdateMarker = useCallback(() => {
    console.log("Actualizar Marcador");
  }, []);

  return (
    <Box 
      component="section" 
      id="tab-map"
      sx={{
        padding: 3,
        '& > *': { mb: 3 }  // margin bottom para todos los hijos directos
      }}
    >
      <Typography variant="h4" component="h1">
        Mapa
      </Typography>

      <Paper 
        component="form" 
        id="markerForm"
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="marker-position-label">
            Selecciona la posición del marcador
          </InputLabel>
          <Select
            labelId="marker-position-label"
            id="markerPosition"
            label="Selecciona la posición del marcador"
            defaultValue=""
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
        </FormControl>

        <Button 
          variant="outlined" 
          color="primary"
          onClick={handleUpdateMarker}
          sx={{ alignSelf: 'flex-start' }}
        >
          Actualizar Marcador
        </Button>
      </Paper>

      <Box 
        id="map"
        sx={{
          width: '100%',
          height: '400px', // Ajusta según necesites
          bgcolor: 'grey.200' // Color temporal para visualizar el área del mapa
        }}
      />
    </Box>
  );
});

// Si quieres mantener el nombre del componente en las DevTools
MapSection.displayName = 'MapSection';