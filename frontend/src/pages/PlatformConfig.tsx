import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Divider,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface PlatformConfig {
  platformName: string;
  maxStorageGB: number;
  enableEncryption: boolean;
  enableBackup: boolean;
  retentionDays: number;
  apiEndpoint: string;
  webhookUrl: string;
}

interface Resource {
  id: number;
  name: string;
  role: string;
  type: string;
  availability: string;
}

interface Calendar {
  id: number;
  name: string;
  workWeek: string;
  holidays: string;
}

const PlatformConfig = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<PlatformConfig>({
    platformName: 'Cumulo-N Platform',
    maxStorageGB: 100,
    enableEncryption: true,
    enableBackup: true,
    retentionDays: 30,
    apiEndpoint: 'https://api.cumulo-n.com',
    webhookUrl: '',
  });

  const [saved, setSaved] = useState(false);

  // Resource Pool State
  const [resources, setResources] = useState<Resource[]>([
    { id: 1, name: 'Alice Smith', role: 'Developer', type: 'Full Time', availability: '100%' },
    { id: 2, name: 'Bob Jones', role: 'Project Manager', type: 'Contractor', availability: '60%' },
  ]);
  const [newResource, setNewResource] = useState<Omit<Resource, 'id'>>({ name: '', role: '', type: '', availability: '' });

  // Calendar State
  const [calendars, setCalendars] = useState<Calendar[]>([
    { id: 1, name: 'Standard', workWeek: 'Mon-Fri', holidays: '25 Dec, 1 Jan' },
  ]);
  const [newCalendar, setNewCalendar] = useState<Omit<Calendar, 'id'>>({ name: '', workWeek: '', holidays: '' });

  const handleSave = async () => {
    // TODO: Implement save to backend
    console.log('Saving platform config:', config);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    // TODO: Implement reset to defaults
    console.log('Resetting to defaults');
  };

  // Resource Pool Handlers
  const handleAddResource = () => {
    if (!newResource.name || !newResource.role) return;
    setResources((prev) => [
      ...prev,
      { id: Date.now(), ...newResource },
    ]);
    setNewResource({ name: '', role: '', type: '', availability: '' });
  };
  const handleDeleteResource = (id: number) => {
    setResources((prev) => prev.filter((r) => r.id !== id));
  };

  // Calendar Handlers
  const handleAddCalendar = () => {
    if (!newCalendar.name) return;
    setCalendars((prev) => [
      ...prev,
      { id: Date.now(), ...newCalendar },
    ]);
    setNewCalendar({ name: '', workWeek: '', holidays: '' });
  };
  const handleDeleteCalendar = (id: number) => {
    setCalendars((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Platform Configuration
        </Typography>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')}>
          Back to Platform Options
        </Button>
      </Box>
      
      {saved && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Configuration saved successfully!
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Basic Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Basic Settings
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Platform Name"
                value={config.platformName}
                onChange={(e) => setConfig({ ...config, platformName: e.target.value })}
                fullWidth
              />
              <TextField
                label="Max Storage (GB)"
                type="number"
                value={config.maxStorageGB}
                onChange={(e) => setConfig({ ...config, maxStorageGB: parseInt(e.target.value) })}
                fullWidth
              />
              <TextField
                label="Data Retention (Days)"
                type="number"
                value={config.retentionDays}
                onChange={(e) => setConfig({ ...config, retentionDays: parseInt(e.target.value) })}
                fullWidth
              />
            </Box>
          </Paper>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Security & Backup
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={config.enableEncryption}
                    onChange={(e) => setConfig({ ...config, enableEncryption: e.target.checked })}
                  />
                }
                label="Enable Encryption"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={config.enableBackup}
                    onChange={(e) => setConfig({ ...config, enableBackup: e.target.checked })}
                  />
                }
                label="Enable Automatic Backup"
              />
            </Box>
          </Paper>
        </Grid>

        {/* API Configuration */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              API Configuration
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="API Endpoint"
                value={config.apiEndpoint}
                onChange={(e) => setConfig({ ...config, apiEndpoint: e.target.value })}
                fullWidth
              />
              <TextField
                label="Webhook URL (Optional)"
                value={config.webhookUrl}
                onChange={(e) => setConfig({ ...config, webhookUrl: e.target.value })}
                fullWidth
                placeholder="https://your-webhook-endpoint.com"
              />
            </Box>
          </Paper>
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={handleReset}>
              Reset to Defaults
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Save Configuration
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Resource Pool Section */}
      <Paper sx={{ p: 3, mt: 5, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Resource Pool
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Name"
            value={newResource.name}
            onChange={e => setNewResource({ ...newResource, name: e.target.value })}
            size="small"
          />
          <TextField
            label="Role"
            value={newResource.role}
            onChange={e => setNewResource({ ...newResource, role: e.target.value })}
            size="small"
          />
          <Select
            value={newResource.type}
            onChange={e => setNewResource({ ...newResource, type: e.target.value })}
            displayEmpty
            size="small"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="">Type</MenuItem>
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            <MenuItem value="Contractor">Contractor</MenuItem>
          </Select>
          <TextField
            label="Availability"
            value={newResource.availability}
            onChange={e => setNewResource({ ...newResource, availability: e.target.value })}
            size="small"
            placeholder="e.g. 100%"
          />
          <Button variant="contained" onClick={handleAddResource} sx={{ minWidth: 120 }}>
            Add Resource
          </Button>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Availability</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resources.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.role}</TableCell>
                  <TableCell>{r.type}</TableCell>
                  <TableCell>{r.availability}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => handleDeleteResource(r.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Calendar Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Calendars
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Calendar Name"
            value={newCalendar.name}
            onChange={e => setNewCalendar({ ...newCalendar, name: e.target.value })}
            size="small"
          />
          <TextField
            label="Work Week"
            value={newCalendar.workWeek}
            onChange={e => setNewCalendar({ ...newCalendar, workWeek: e.target.value })}
            size="small"
            placeholder="e.g. Mon-Fri"
          />
          <TextField
            label="Holidays"
            value={newCalendar.holidays}
            onChange={e => setNewCalendar({ ...newCalendar, holidays: e.target.value })}
            size="small"
            placeholder="e.g. 25 Dec, 1 Jan"
          />
          <Button variant="contained" onClick={handleAddCalendar} sx={{ minWidth: 120 }}>
            Add Calendar
          </Button>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Work Week</TableCell>
                <TableCell>Holidays</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {calendars.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.workWeek}</TableCell>
                  <TableCell>{c.holidays}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => handleDeleteCalendar(c.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default PlatformConfig; 