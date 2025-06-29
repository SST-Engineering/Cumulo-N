import { useState, useEffect, ChangeEvent } from 'react';
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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  IconButton,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Add as AddIcon,
  Timeline as TimelineIcon,
  Assessment as AssessmentIcon,
  Schedule as ScheduleIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Warning as WarningIcon,
  Settings as SettingsIcon,
  ViewTimeline as ViewTimelineIcon,
  NetworkCheck as NetworkCheckIcon,
  ShowChart as ShowChartIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import type { SelectChangeEvent } from '@mui/material/Select';

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
      id={`project-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const LOCAL_STORAGE_KEY = 'cumuloN-projects';

const ProjectManagement = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const defaultProjects = [
    {
      id: 1,
      name: 'Digital Transformation Initiative',
      status: 'In Progress',
      progress: 65,
      methodology: 'Agile',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      team: 12,
    },
    {
      id: 2,
      name: 'Cloud Migration Project',
      status: 'Planning',
      progress: 25,
      methodology: 'Waterfall',
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      team: 8,
    },
    {
      id: 3,
      name: 'AI Implementation',
      status: 'Completed',
      progress: 100,
      methodology: 'Hybrid',
      startDate: '2023-09-01',
      endDate: '2024-02-28',
      team: 15,
    },
  ];

  const [projects, setProjects] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultProjects;
  });
  const [newProject, setNewProject] = useState({
    name: '',
    methodology: '',
    team: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  // Handle new project field changes for TextField
  const handleInputChange = (field: keyof typeof newProject) => (e: ChangeEvent<HTMLInputElement>) => {
    setNewProject({ ...newProject, [field]: e.target.value });
  };

  // Handle new project field changes for Select
  const handleSelectChange = (field: keyof typeof newProject) => (e: SelectChangeEvent<string>) => {
    setNewProject({ ...newProject, [field]: e.target.value });
  };

  // Handle project creation
  const handleCreateProject = () => {
    const id = Date.now();
    const project = {
      id,
      name: newProject.name,
      status: 'Planning',
      progress: 0,
      methodology: newProject.methodology,
      startDate: newProject.startDate,
      endDate: newProject.endDate,
      team: Number(newProject.team),
      description: newProject.description,
    };
    setProjects([project, ...projects]);
    setOpenDialog(false);
    setNewProject({ name: '', methodology: '', team: '', startDate: '', endDate: '', description: '' });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircleIcon color="success" />;
      case 'In Progress':
        return <PendingIcon color="primary" />;
      case 'Planning':
        return <WarningIcon color="warning" />;
      default:
        return <PendingIcon />;
    }
  };

  const getStatusChip = (status: string) => (
    <Chip
      label={status}
      color={status === 'Completed' ? 'success' : status === 'In Progress' ? 'primary' : 'warning'}
      size="small"
    />
  );

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Project Management
        </Typography>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')}>
          Back to Platform Options
        </Button>
      </Box>

      {/* Add button row, right-aligned, below the header */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="button" sx={{ fontWeight: 500, fontSize: 16, color: 'primary.main', cursor: 'pointer' }} onClick={() => setOpenDialog(true)}>
            Add
          </Typography>
          <Fab
            color="primary"
            aria-label="add project"
            size="small"
            onClick={() => setOpenDialog(true)}
          >
            <AddIcon fontSize="small" />
          </Fab>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Projects Overview" icon={<AssessmentIcon />} />
          <Tab label="Gantt Charts" icon={<TimelineIcon />} />
          <Tab label="PERT Networks" icon={<NetworkCheckIcon />} />
          <Tab label="Activity Diagrams" icon={<ViewTimelineIcon />} />
          <Tab label="Analytics" icon={<ShowChartIcon />} />
        </Tabs>
      </Box>

      {/* Projects Overview Tab */}
      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                      {project.name}
                    </Typography>
                    {getStatusIcon(project.status)}
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    {getStatusChip(project.status)}
                    <Chip
                      label={project.methodology}
                      variant="outlined"
                      size="small"
                      sx={{ ml: 1 }}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" paragraph>
                    Progress: {project.progress}%
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Start: {project.startDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      End: {project.endDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Team Size: {project.team} members
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" variant="outlined" startIcon={<TimelineIcon />}>
                      Gantt
                    </Button>
                    <Button size="small" variant="outlined" startIcon={<NetworkCheckIcon />}>
                      PERT
                    </Button>
                    <Button size="small" variant="outlined" startIcon={<SettingsIcon />}>
                      Manage
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      {/* Gantt Charts Tab */}
      <TabPanel value={tabValue} index={1}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Interactive Gantt Chart
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Visualize project timelines, dependencies, and resource allocation with our advanced Gantt chart system.
          </Typography>
          <Box sx={{ 
            height: 400, 
            bgcolor: 'grey.100', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 2,
            border: '2px dashed grey.300'
          }}>
            <Typography variant="h6" color="text.secondary">
              Interactive Gantt Chart Component
            </Typography>
          </Box>
        </Paper>
      </TabPanel>

      {/* PERT Networks Tab */}
      <TabPanel value={tabValue} index={2}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            PERT Network Diagrams
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Program Evaluation and Review Technique (PERT) networks for critical path analysis and project optimization.
          </Typography>
          <Box sx={{ 
            height: 400, 
            bgcolor: 'grey.100', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 2,
            border: '2px dashed grey.300'
          }}>
            <Typography variant="h6" color="text.secondary">
              Interactive PERT Network Diagram
            </Typography>
          </Box>
        </Paper>
      </TabPanel>

      {/* Activity Diagrams Tab */}
      <TabPanel value={tabValue} index={3}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Activity-on-Arrow & Precedence Networks
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Advanced network diagrams showing activity dependencies, critical paths, and project flow visualization.
          </Typography>
          <Box sx={{ 
            height: 400, 
            bgcolor: 'grey.100', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 2,
            border: '2px dashed grey.300'
          }}>
            <Typography variant="h6" color="text.secondary">
              Interactive Activity Network Diagram
            </Typography>
          </Box>
        </Paper>
      </TabPanel>

      {/* Analytics Tab */}
      <TabPanel value={tabValue} index={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Project Performance Metrics
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
                  Performance Charts & KPIs
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                AI-Powered Insights
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

      {/* Add Project Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                label="Project Name"
                fullWidth
                required
                value={newProject.name}
                onChange={handleInputChange('name')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Methodology</InputLabel>
                <Select label="Methodology" value={newProject.methodology} onChange={handleSelectChange('methodology')}>
                  <MenuItem value="agile">Agile</MenuItem>
                  <MenuItem value="waterfall">Waterfall</MenuItem>
                  <MenuItem value="hybrid">Hybrid</MenuItem>
                  <MenuItem value="scrum">Scrum</MenuItem>
                  <MenuItem value="kanban">Kanban</MenuItem>
                  <MenuItem value="prince2">PRINCE II</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Team Size"
                type="number"
                fullWidth
                value={newProject.team}
                onChange={handleInputChange('team')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={newProject.startDate}
                onChange={handleInputChange('startDate')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={newProject.endDate}
                onChange={handleInputChange('endDate')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Project Description"
                multiline
                rows={4}
                fullWidth
                value={newProject.description}
                onChange={handleInputChange('description')}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleCreateProject} variant="contained" disabled={!newProject.name || !newProject.methodology || !newProject.team || !newProject.startDate || !newProject.endDate}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProjectManagement; 