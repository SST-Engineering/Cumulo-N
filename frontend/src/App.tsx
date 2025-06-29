import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './theme';
import AiAnalytics from './pages/AiAnalytics';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PlatformOptions from './pages/PlatformOptions';
import ProjectManagement from './pages/ProjectManagement';
import PortfolioManagement from './pages/PortfolioManagement';
import PlatformConfig from './pages/PlatformConfig';
import PlatformManagement from './pages/PlatformManagement';
import ProgrammeManagement from './pages/ProgrammeManagement';
import Reporting from './pages/Reporting';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/platform/options" element={<PlatformOptions />} />
            <Route path="/platform/project-management" element={<ProjectManagement />} />
            <Route path="/platform/programme-management" element={<ProgrammeManagement />} />
            <Route path="/platform/portfolio-management" element={<PortfolioManagement />} />
            <Route path="/platform/reporting" element={<Reporting />} />
            <Route path="/platform/ai-analytics" element={<AiAnalytics />} />
            <Route path="/platform/config" element={<PlatformConfig />} />
            <Route path="/platform/manage" element={<PlatformManagement />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App; 