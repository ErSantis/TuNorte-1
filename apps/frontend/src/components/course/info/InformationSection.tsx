import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Divider, 
  Grid, 
  Paper,
  Chip,
  Stack
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import { CourseInfoType } from "../../../types/course.type";
import { ProfessorType } from "../../../types/professor.type";

export const InformationSection = React.memo(({ info }: { info: CourseInfoType }) => {
  return (
    <Box 
      component="section" 
      id="tab-information" 
      sx={{ 
        py: 4, 
        px: 2,
        maxWidth: 1200,
        mx: 'auto'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Información
      </Typography>
      
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Profesores
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {info.professors.map((prof: ProfessorType, index: number) => (
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Card elevation={3}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: 'primary.main',
                      width: 56,
                      height: 56,
                      mr: 2
                    }}
                  >
                    {prof.firstname.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography variant="h6">
                    {prof.firstname} {prof.middlename} {prof.lastname}
                  </Typography>
                </Box>
                
                <Divider sx={{ my: 1.5 }} />
                
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
                  <EmailIcon color="action" />
                  <Typography variant="body1">
                    {prof.email}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Paper elevation={2} sx={{ p: 3, bgcolor: 'background.default' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SchoolIcon sx={{ mr: 1.5 }} color="primary" />
          <Typography variant="h6" component="h3">
            Departamento:
          </Typography>
          <Chip 
            label={info.nameDept} 
            color="primary" 
            variant="outlined" 
            sx={{ ml: 2 }}
          />
        </Box>
      </Paper>
    </Box>
  );
});