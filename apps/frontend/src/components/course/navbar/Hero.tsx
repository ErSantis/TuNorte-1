import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';

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
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
        </Box>
        <Button href="/" sx={{ textTransform: 'none', color: 'primary.main' }}>
          REGRESAR
        </Button>
      </Toolbar>
    </AppBar>
  );
};
