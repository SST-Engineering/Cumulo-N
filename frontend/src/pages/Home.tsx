import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Cumulo-N
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          Enterprise PPPM Platform
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ maxWidth: 800, mb: 4 }}>
          The most integrated Project, Programme & Portfolio Management solution. 
          Powered by AI, featuring Agile, Waterfall, PERT, and advanced network diagrams.
        </Typography>
        
        <Paper elevation={3} sx={{ p: 4, mb: 4, maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom>
            🚀 Key Features
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 2 }}>
            <Typography variant="body2" sx={{ bgcolor: 'primary.light', color: 'white', px: 2, py: 1, borderRadius: 1 }}>
              AI-Powered Insights
            </Typography>
            <Typography variant="body2" sx={{ bgcolor: 'secondary.light', color: 'white', px: 2, py: 1, borderRadius: 1 }}>
              Agile & Waterfall
            </Typography>
            <Typography variant="body2" sx={{ bgcolor: 'success.light', color: 'white', px: 2, py: 1, borderRadius: 1 }}>
              PERT Networks
            </Typography>
            <Typography variant="body2" sx={{ bgcolor: 'info.light', color: 'white', px: 2, py: 1, borderRadius: 1 }}>
              Activity Diagrams
            </Typography>
            <Typography variant="body2" sx={{ bgcolor: 'warning.light', color: 'white', px: 2, py: 1, borderRadius: 1 }}>
              Portfolio Analytics
            </Typography>
          </Box>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/login')}
            sx={{ 
              px: 4, 
              py: 1.5, 
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            }}
          >
            Sign In to Cumulo-N
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 