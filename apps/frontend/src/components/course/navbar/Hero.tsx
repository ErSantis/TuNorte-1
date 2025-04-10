import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  name: string;
}

const sections = [
  { label: 'Información', id: 'tab-information' },
  { label: 'Horarios', id: 'tab-schedule' },
  { label: 'Tareas', id: 'tab-tasks' },
  { label: 'Mapa', id: 'tab-map' },
];

export const Hero = ({ name }: HeroProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Adjust this value to match the height of your AppBar or desired offset
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Typography variant="h6">{name}</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => handleClick(section.id)}
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              {section.label}
            </Button>
          ))}
            <Button
            onClick={() => navigate(-1)}
            sx={{ textTransform: 'none', color: 'red' }}
            >
            REGRESAR
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
