import { Container, Box, Typography, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AiAnalytics = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          AI-Powered Analytics
        </Typography>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')}>
          Back to Platform Options
        </Button>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 700 }}>
        Cumulo-N's AI Analytics highlights trends, risks, anomalies, and opportunities across your projects, programmes, and portfolios—surfacing insights you may have missed. As your data grows, this page will evolve to provide even deeper, more actionable intelligence.
      </Typography>
      <Grid container spacing={4}>
        {/* Project Insights */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Project Insights
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              AI-detected trends, risks, and opportunities at the project level.
            </Typography>
            <Box sx={{ height: 120, bgcolor: 'grey.100', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey.500', border: '2px dashed #e0e0e0' }}>
              [No project-level insights yet]
            </Box>
          </Paper>
        </Grid>
        {/* Programme Insights */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Programme Insights
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              AI-detected patterns, dependencies, and risks across programmes.
            </Typography>
            <Box sx={{ height: 120, bgcolor: 'grey.100', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey.500', border: '2px dashed #e0e0e0' }}>
              [No programme-level insights yet]
            </Box>
          </Paper>
        </Grid>
        {/* Portfolio Insights */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Portfolio Insights
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              AI-powered portfolio-wide trends, risks, and opportunities.
            </Typography>
            <Box sx={{ height: 120, bgcolor: 'grey.100', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey.500', border: '2px dashed #e0e0e0' }}>
              [No portfolio-level insights yet]
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AiAnalytics; 