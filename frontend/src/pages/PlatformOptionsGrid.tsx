import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlatformOptions from './PlatformOptions';
import { Button } from '@mui/material';

const PlatformOptionsGrid = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => navigate('/platform/options')} sx={{ mt: 2, ml: 2 }}>
        Back to Platform Options
      </Button>
      <PlatformOptions />
    </div>
  );
};

export default PlatformOptionsGrid; 