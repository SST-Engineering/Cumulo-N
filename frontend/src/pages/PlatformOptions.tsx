import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Timeline as TimelineIcon,
  Assessment as AssessmentIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Psychology as PsychologyIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const options = [
  {
    title: 'Project Management',
    description: 'Create and manage projects with Agile, Waterfall, and hybrid methodologies. Features Gantt charts, PERT networks, and activity-on-arrow diagrams.',
    icon: <TimelineIcon sx={{ fontSize: 22 }} />, path: '/platform/project-management', color: 'primary',
  },
  {
    title: 'Programme Management',
    description: 'Coordinate multiple related projects, manage dependencies, and ensure strategic alignment across complex programmes.',
    icon: <AssessmentIcon sx={{ fontSize: 22 }} />, path: '/platform/programme-management', color: 'info',
  },
  {
    title: 'Portfolio Management',
    description: 'Strategic portfolio planning, resource allocation, and performance tracking across multiple projects and programmes.',
    icon: <DashboardIcon sx={{ fontSize: 22 }} />, path: '/platform/portfolio-management', color: 'secondary',
  },
  {
    title: 'Advanced Reporting',
    description: 'Comprehensive reporting and dashboards with real-time metrics, custom KPIs, and executive summaries.',
    icon: <AnalyticsIcon sx={{ fontSize: 22 }} />, path: '/platform/reporting', color: 'warning',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics and insights powered by AI/LLM technology. Predictive modeling, risk assessment, and intelligent recommendations.',
    icon: <PsychologyIcon sx={{ fontSize: 22 }} />, path: '/platform/ai-analytics', color: 'success',
  },
  {
    title: 'Platform Configuration',
    description: 'Configure system settings, user permissions, integrations, and customize the platform to your organization\'s needs.',
    icon: <SettingsIcon sx={{ fontSize: 22 }} />, path: '/platform/config', color: 'error',
  },
];

const PlatformOptions = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      {/* Header band */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', minHeight: 64, mb: 2, mt: 1 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: 26, md: 32 }, mr: 3, whiteSpace: 'nowrap' }}>
          Cumulo-N
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { xs: 14, md: 18 }, maxWidth: 700, lineHeight: 1.2 }}>
          Deliver what makes the difference, with a fully integrated enterprise program portfolio platform.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '80vh' }}>
        {/* Main dashboard area (left, below header) */}
        <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: { xs: 'center', md: 'flex-start' } }}>
          <Paper elevation={0} sx={{ p: 2.5, bgcolor: 'grey.100', borderRadius: 2, minWidth: 260, minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'grey.500', fontSize: 16, mt: 0 }}>
            Dashboard widgets and stats coming soon...
          </Paper>
        </Box>
        {/* Vertical card menu (right) */}
        <Box sx={{ width: { xs: '100%', md: 300 }, display: 'flex', flexDirection: 'column', gap: 1.2, alignItems: { xs: 'center', md: 'flex-end' }, justifyContent: 'flex-start', mt: { xs: 2, md: 0 } }}>
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
                maxWidth: 300,
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

export default PlatformOptions; 