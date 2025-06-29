import { Container, Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Reporting = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Advanced Reporting
        </Typography>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')}>
          Back to Platform Options
        </Button>
      </Box>
      <Grid container spacing={4}>
        {/* Planned vs Actual Timeline */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Planned vs Actual Timeline
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Compare planned project/programme timelines with actual delivery dates to identify schedule variances.
            </Typography>
            <Box sx={{ height: 220, bgcolor: 'grey.100', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey.500', border: '2px dashed #e0e0e0' }}>
              [Timeline Chart Placeholder]
            </Box>
          </Paper>
        </Grid>
        {/* Planned vs Actual Costs */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Planned vs Actual Costs
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Track budgeted versus actual spend to monitor cost performance and identify overruns or savings.
            </Typography>
            <Box sx={{ height: 220, bgcolor: 'grey.100', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey.500', border: '2px dashed #e0e0e0' }}>
              [Cost Chart Placeholder]
            </Box>
          </Paper>
        </Grid>
        {/* Planned vs Actual Resource Usage */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Planned vs Actual Resource Usage
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Analyze planned versus actual resource allocation (e.g., FTEs, hours) to optimize team performance and utilization.
            </Typography>
            <Box sx={{ height: 220, bgcolor: 'grey.100', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey.500', border: '2px dashed #e0e0e0' }}>
              [Resource Usage Chart Placeholder]
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reporting; 