import { Container, Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Collapse, IconButton, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';

const mockProgrammes = [
  {
    id: 1,
    name: 'Digital Transformation',
    status: 'Active',
    progress: 68,
    portfolios: ['Enterprise Change', 'Innovation'],
    projects: [
      { id: 101, name: 'ERP Rollout', status: 'In Progress', methodology: 'Waterfall', progress: 80 },
      { id: 102, name: 'Mobile App Launch', status: 'Planning', methodology: 'Agile', progress: 20 },
    ],
  },
  {
    id: 2,
    name: 'Cloud Migration',
    status: 'Planning',
    progress: 35,
    portfolios: ['IT Modernisation'],
    projects: [
      { id: 201, name: 'Data Lake Setup', status: 'In Progress', methodology: 'Hybrid', progress: 50 },
      { id: 202, name: 'Legacy Decommission', status: 'Not Started', methodology: 'Waterfall', progress: 0 },
    ],
  },
  {
    id: 3,
    name: 'AI & Analytics',
    status: 'Active',
    progress: 55,
    portfolios: ['Innovation'],
    projects: [
      { id: 301, name: 'AI Chatbot', status: 'In Progress', methodology: 'Agile', progress: 60 },
      { id: 302, name: 'Predictive Analytics', status: 'Completed', methodology: 'Scrum', progress: 100 },
    ],
  },
];

const ProgrammeManagement = () => {
  const navigate = useNavigate();
  const [openRows, setOpenRows] = useState<{ [key: number]: boolean }>({});

  const handleToggleRow = (id: number) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          Programme Management
        </Typography>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')}>
          Back to Platform Options
        </Button>
      </Box>
      <Paper elevation={1} sx={{ p: 3, mt: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Programmes Overview
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Programme</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Portfolios</TableCell>
                <TableCell>Projects</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockProgrammes.map((prog) => (
                <>
                  <TableRow key={prog.id} hover>
                    <TableCell>
                      <IconButton size="small" onClick={() => handleToggleRow(prog.id)}>
                        {openRows[prog.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{prog.name}</TableCell>
                    <TableCell>
                      <Chip label={prog.status} color={prog.status === 'Active' ? 'success' : prog.status === 'Planning' ? 'warning' : 'default'} size="small" />
                    </TableCell>
                    <TableCell sx={{ minWidth: 120 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LinearProgress variant="determinate" value={prog.progress} sx={{ width: 60, height: 8, borderRadius: 4 }} />
                        <Typography variant="body2">{prog.progress}%</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ minWidth: 120 }}>
                      {prog.portfolios.map((pf) => (
                        <Chip key={pf} label={pf} color="info" size="small" sx={{ mr: 0.5, mb: 0.5 }} />
                      ))}
                    </TableCell>
                    <TableCell>{prog.projects.length}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={6} sx={{ p: 0, border: 0 }}>
                      <Collapse in={openRows[prog.id]} timeout="auto" unmountOnExit>
                        <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1, mb: 1 }}>
                          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                            Projects in this Programme
                          </Typography>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell>Project Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Methodology</TableCell>
                                <TableCell>Progress</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {prog.projects.map((proj) => (
                                <TableRow key={proj.id}>
                                  <TableCell>{proj.name}</TableCell>
                                  <TableCell>
                                    <Chip label={proj.status} color={proj.status === 'Completed' ? 'success' : proj.status === 'In Progress' ? 'primary' : proj.status === 'Planning' ? 'warning' : 'default'} size="small" />
                                  </TableCell>
                                  <TableCell>{proj.methodology}</TableCell>
                                  <TableCell sx={{ minWidth: 100 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                      <LinearProgress variant="determinate" value={proj.progress} sx={{ width: 50, height: 6, borderRadius: 4 }} />
                                      <Typography variant="body2">{proj.progress}%</Typography>
                                    </Box>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default ProgrammeManagement; 