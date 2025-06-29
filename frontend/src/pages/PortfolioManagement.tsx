import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Tabs,
  Tab,
  Button,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  ShowChart as ShowChartIcon,
} from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const PortfolioManagement = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const portfolios = [
    {
      id: 1,
      name: 'Digital Transformation Portfolio',
      status: 'Active',
      projects: 15,
      budget: 2500000,
      spent: 1800000,
      roi: 12.5,
      risk: 'Medium',
      priority: 'High',
    },
    {
      id: 2,
      name: 'Cloud Infrastructure Portfolio',
      status: 'Active',
      projects: 8,
      budget: 1200000,
      spent: 850000,
      roi: 8.2,
      risk: 'Low',
      priority: 'Medium',
    },
    {
      id: 3,
      name: 'AI & ML Initiatives',
      status: 'Planning',
      projects: 6,
      budget: 800000,
      spent: 0,
      roi: 0,
      risk: 'High',
      priority: 'High',
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'High':
        return 'error';
      default:
        return 'default';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'error';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'success';
      default:
        return 'default';
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Portfolio Management
        </Typography>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')}>
          Back to Platform Options
        </Button>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Portfolio Overview" icon={<DashboardIcon />} />
          <Tab label="Strategic Planning" icon={<AssessmentIcon />} />
          <Tab label="Resource Allocation" icon={<PeopleIcon />} />
          <Tab label="Financial Analysis" icon={<MoneyIcon />} />
          <Tab label="Risk Management" icon={<TrendingUpIcon />} />
          <Tab label="Performance Analytics" icon={<ShowChartIcon />} />
        </Tabs>
      </Box>

      {/* Portfolio Overview Tab */}
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          {/* Portfolio Summary Cards */}
          <Grid item xs={12} md={3}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary" gutterBottom>
                  29
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Projects
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="success.main" gutterBottom>
                  $4.5M
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Budget
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="warning.main" gutterBottom>
                  10.2%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average ROI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="info.main" gutterBottom>
                  85%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  On-Time Delivery
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Portfolio Details */}
          {portfolios.map((portfolio) => (
            <Grid item xs={12} md={6} lg={4} key={portfolio.id}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                      {portfolio.name}
                    </Typography>
                    <Chip
                      label={portfolio.status}
                      color={portfolio.status === 'Active' ? 'success' : 'warning'}
                      size="small"
                    />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={`Risk: ${portfolio.risk}`}
                      color={getRiskColor(portfolio.risk) as any}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      label={`Priority: ${portfolio.priority}`}
                      color={getPriorityColor(portfolio.priority) as any}
                      size="small"
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    Projects: {portfolio.projects} | ROI: {portfolio.roi}%
                  </Typography>

                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Budget: ${(portfolio.budget / 1000000).toFixed(1)}M
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Spent: ${(portfolio.spent / 1000000).toFixed(1)}M
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Budget Utilization
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(portfolio.spent / portfolio.budget) * 100}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Strategic Planning Tab */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Strategic Alignment Matrix
              </Typography>
              <Box sx={{ 
                height: 300, 
                bgcolor: 'grey.100', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 2,
                border: '2px dashed grey.300'
              }}>
                <Typography variant="body1" color="text.secondary">
                  Strategic Alignment Visualization
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Portfolio Roadmap
              </Typography>
              <Box sx={{ 
                height: 300, 
                bgcolor: 'grey.100', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 2,
                border: '2px dashed grey.300'
              }}>
                <Typography variant="body1" color="text.secondary">
                  Strategic Roadmap Timeline
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Resource Allocation Tab */}
      <TabPanel value={tabValue} index={2}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Resource Allocation Dashboard
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Resource Type</TableCell>
                  <TableCell>Total Available</TableCell>
                  <TableCell>Allocated</TableCell>
                  <TableCell>Utilization %</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Developers</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>38</TableCell>
                  <TableCell>84%</TableCell>
                  <TableCell>
                    <Chip label="Optimal" color="success" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Project Managers</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>100%</TableCell>
                  <TableCell>
                    <Chip label="Over-allocated" color="warning" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Business Analysts</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>83%</TableCell>
                  <TableCell>
                    <Chip label="Optimal" color="success" size="small" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </TabPanel>

      {/* Financial Analysis Tab */}
      <TabPanel value={tabValue} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Budget vs Actual Spending
              </Typography>
              <Box sx={{ 
                height: 300, 
                bgcolor: 'grey.100', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 2,
                border: '2px dashed grey.300'
              }}>
                <Typography variant="body1" color="text.secondary">
                  Financial Performance Charts
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                ROI Analysis by Portfolio
              </Typography>
              <Box sx={{ 
                height: 300, 
                bgcolor: 'grey.100', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 2,
                border: '2px dashed grey.300'
              }}>
                <Typography variant="body1" color="text.secondary">
                  ROI Performance Metrics
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Risk Management Tab */}
      <TabPanel value={tabValue} index={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Portfolio Risk Assessment
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Risk Distribution
                  </Typography>
                  <Box sx={{ 
                    height: 200, 
                    bgcolor: 'grey.100', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: 2,
                    border: '2px dashed grey.300'
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      Risk Heat Map
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Risk Mitigation Actions
                  </Typography>
                  <Box sx={{ 
                    height: 200, 
                    bgcolor: 'grey.100', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: 2,
                    border: '2px dashed grey.300'
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      Risk Action Items
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      {/* Performance Analytics Tab */}
      <TabPanel value={tabValue} index={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Portfolio Performance Trends
              </Typography>
              <Box sx={{ 
                height: 300, 
                bgcolor: 'grey.100', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 2,
                border: '2px dashed grey.300'
              }}>
                <Typography variant="body1" color="text.secondary">
                  Performance Trend Analysis
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                AI-Powered Portfolio Insights
              </Typography>
              <Box sx={{ 
                height: 300, 
                bgcolor: 'grey.100', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 2,
                border: '2px dashed grey.300'
              }}>
                <Typography variant="body1" color="text.secondary">
                  AI Recommendations & Predictions
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default PortfolioManagement; 