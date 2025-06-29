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
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Alert,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Check as CheckIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

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
      id={`platform-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const PlatformManagement = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [analyticsTools, setAnalyticsTools] = useState([
    { id: 1, name: 'GoodData.CN', status: 'active', type: 'analytics' },
    { id: 2, name: 'Metabase', status: 'inactive', type: 'analytics' },
    { id: 3, name: 'ChartJs', status: 'active', type: 'visualization' },
  ]);

  const [dataConnectors, setDataConnectors] = useState([
    { id: 1, name: 'Airbyte', status: 'active', type: 'connector' },
    { id: 2, name: 'Spark Streams', status: 'active', type: 'stream' },
    { id: 3, name: 'PostgreSQL FDW', status: 'active', type: 'database' },
  ]);

  const [storageConfig, setStorageConfig] = useState({
    primaryStorage: 'S3',
    backupStorage: 'Minio',
    dataLakeFormat: 'Iceberg',
    hdfsEnabled: true,
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getStatusChip = (status: string) => (
    <Chip
      label={status}
      color={status === 'active' ? 'success' : 'default'}
      size="small"
    />
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Platform Management
        </Typography>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')}>
          Back to Platform Options
        </Button>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Analytics Platform" />
          <Tab label="Data Lake" />
          <Tab label="Data Sources" />
          <Tab label="Monitoring" />
        </Tabs>
      </Box>

      {/* Analytics Platform Tab */}
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Analytics Tools
              </Typography>
              <List>
                {analyticsTools.map((tool) => (
                  <ListItem key={tool.id}>
                    <ListItemText
                      primary={tool.name}
                      secondary={tool.type}
                    />
                    <ListItemSecondaryAction>
                      {getStatusChip(tool.status)}
                      <IconButton edge="end" aria-label="settings" sx={{ ml: 1 }}>
                        <SettingsIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Add Tool
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Analytics Engine Configuration
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="API Endpoint"
                  defaultValue="https://api.gooddata.cn/"
                  fullWidth
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Query Engine</InputLabel>
                <Select defaultValue="cube">
                  <MenuItem value="cube">Cube.dev</MenuItem>
                  <MenuItem value="gooddata">GoodData.CN</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Data Lake Tab */}
      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Storage Configuration
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Primary Storage</InputLabel>
                <Select
                  value={storageConfig.primaryStorage}
                  onChange={(e) => setStorageConfig({
                    ...storageConfig,
                    primaryStorage: e.target.value as string
                  })}
                >
                  <MenuItem value="S3">AWS S3</MenuItem>
                  <MenuItem value="Minio">Minio</MenuItem>
                  <MenuItem value="HDFS">HDFS</MenuItem>
                  <MenuItem value="ABS">Azure Blob Storage</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Data Lake Format</InputLabel>
                <Select
                  value={storageConfig.dataLakeFormat}
                  onChange={(e) => setStorageConfig({
                    ...storageConfig,
                    dataLakeFormat: e.target.value as string
                  })}
                >
                  <MenuItem value="Iceberg">Apache Iceberg</MenuItem>
                  <MenuItem value="Delta">Delta Lake</MenuItem>
                  <MenuItem value="Hudi">Apache Hudi</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Data Connectors
              </Typography>
              <List>
                {dataConnectors.map((connector) => (
                  <ListItem key={connector.id}>
                    <ListItemText
                      primary={connector.name}
                      secondary={connector.type}
                    />
                    <ListItemSecondaryAction>
                      {getStatusChip(connector.status)}
                      <IconButton edge="end" aria-label="settings" sx={{ ml: 1 }}>
                        <SettingsIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Add Connector
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Data Sources Tab */}
      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Connected Data Sources
              </Typography>
              <Grid container spacing={2}>
                {['Databases', 'Files', 'APIs', 'Apps', 'Streams'].map((sourceType) => (
                  <Grid item xs={12} sm={6} md={4} key={sourceType}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {sourceType}
                        </Typography>
                        <Button
                          startIcon={<AddIcon />}
                          variant="outlined"
                          fullWidth
                        >
                          Add {sourceType}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Monitoring Tab */}
      <TabPanel value={tabValue} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Alert severity="info" sx={{ mb: 3 }}>
              Platform health: Healthy | Last checked: 2 minutes ago
              <Button
                size="small"
                startIcon={<RefreshIcon />}
                sx={{ ml: 2 }}
              >
                Refresh
              </Button>
            </Alert>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                System Metrics
              </Typography>
              {/* Add metrics visualization here */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Active Processes
              </Typography>
              {/* Add process list here */}
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </Container>
  );
};

export default PlatformManagement; 