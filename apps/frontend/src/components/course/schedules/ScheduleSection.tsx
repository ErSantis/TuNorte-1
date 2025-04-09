import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Grid,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CourseScheduleType } from "../../../types/course.type";

export const ScheduleSection = React.memo(({ schedules }: { schedules: CourseScheduleType[] }) => {
  // Helper function to group schedules by day
  const groupSchedulesByDay = () => {
    const grouped: Record<string, CourseScheduleType[]> = {};
    
    schedules.forEach(schedule => {
      if (!grouped[schedule.day]) {
        grouped[schedule.day] = [];
      }
      grouped[schedule.day].push(schedule);
    });
    
    return grouped;
  };

  const schedulesGroupedByDay = groupSchedulesByDay();
  
  return (
    <Box 
      component="section" 
      id="tab-schedule" 
      sx={{ 
        py: 4, 
        px: 2,
        maxWidth: 1200,
        mx: 'auto'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        
        <CalendarMonthIcon sx={{ mr: 1 }}/>Horarios
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(schedulesGroupedByDay).map(([day, daySchedules], dayIndex) => (
          <Grid container spacing={3} sx={{ mb: 4 }} key={dayIndex}>
            <Card elevation={3} sx={{ mb: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <DateRangeIcon color="primary" sx={{ mr: 1.5 }} />
                  <Typography variant="h6" component="h2">
                    {day}
                  </Typography>
                </Box>
                
                <Divider sx={{ mb: 2 }} />
                
                <List>
                  {daySchedules.map((schedule, scheduleIndex) => (
                    <ListItem key={scheduleIndex} sx={{ py: 1 }}>
                      <ListItemIcon>
                        <AccessTimeIcon color="action" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography variant="body1" component="span" fontWeight="medium">
                            {schedule.starttime} - {schedule.endtime}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {schedules.length === 0 && (
        <Paper 
          elevation={1} 
          sx={{ 
            p: 3, 
            textAlign: 'center',
            bgcolor: 'background.default' 
          }}
        >
          <Typography variant="body1">
            No hay horarios disponibles para este curso.
          </Typography>
        </Paper>
      )}
    </Box>
  );
});