import React from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Timeline as TimelineIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Analytics as AnalyticsIcon,
  Psychology as PsychologyIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';

const options = [
  {
    title: 'Project Management',
    description: 'Create and manage projects with Agile, Waterfall, and hybrid methodologies.',
    icon: <TimelineIcon sx={{ fontSize: 22 }} />, path: '/platform/project-management', color: 'primary',
  },
  {
    title: 'Portfolio Management',
    description: 'Strategic portfolio planning, resource allocation, and performance tracking.',
    icon: <DashboardIcon sx={{ fontSize: 22 }} />, path: '/platform/portfolio-management', color: 'secondary',
  },
  {
    title: 'Platform Management',
    description: 'Monitor, manage, and maintain your platform operations.',
    icon: <AssessmentIcon sx={{ fontSize: 22 }} />, path: '/platform/manage', color: 'info',
  },
  {
    title: 'Platform Configuration',
    description: 'Configure system settings, user permissions, and integrations.',
    icon: <SettingsIcon sx={{ fontSize: 22 }} />, path: '/platform/config', color: 'error',
  },
  {
    title: 'Advanced Reporting',
    description: 'Comprehensive reporting and dashboards with real-time metrics.',
    icon: <AnalyticsIcon sx={{ fontSize: 22 }} />, path: '/platform/reporting', color: 'warning',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'AI-powered trends, risks, and opportunities across your data.',
    icon: <PsychologyIcon sx={{ fontSize: 22 }} />, path: '/platform/ai-analytics', color: 'success',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      {/* Header band */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', minHeight: 64, mb: 6, mt: 1 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: 28, md: 36 }, mr: 3, whiteSpace: 'nowrap' }}>
          Cumulo-N
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 22 }, maxWidth: 700, lineHeight: 1.2 }}>
          Deliver what makes a difference
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '70vh' }}>
        {/* Left side (empty for now, can add widgets later) */}
        <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 } }} />
        {/* Vertical card menu (right) */}
        <Box sx={{ width: { xs: '100%', md: 320 }, display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: { xs: 'center', md: 'flex-end' }, justifyContent: 'flex-start', mt: { xs: 2, md: 0 } }}>
          {options.map((option, idx) => (
            <Paper
              key={option.title}
              elevation={2}
              tabIndex={0}
              role="button"
              aria-label={option.title}
              sx={{
                p: 1.2,
                minHeight: 62,
                width: { xs: '92vw', sm: 270, md: 270 },
                maxWidth: 320,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s',
                border: `2px solid transparent`,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.2,
                '&:hover, &:focus': {
                  boxShadow: 5,
                  borderColor: `${option.color}.main`,
                  backgroundColor: 'grey.50',
                },
              }}
              onClick={() => navigate(option.path)}
              onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') navigate(option.path); }}
            >
              <Box sx={{ color: `${option.color}.main`, mt: 0.5 }}>{option.icon}</Box>
              <Box>
                <Typography variant="subtitle2" component="h2" sx={{ fontWeight: 'bold', fontSize: 15 }}>
                  {option.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12 }}>
                  {option.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 