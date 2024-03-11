import Shell from '@azaVista/shell';
import { Spinner } from '@azaVista/posts-ui';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Shell>
      <Box p={2}>
        <Link to="/">Click to go back home.</Link>
        <Box>
          <Spinner />
        </Box>
      </Box>
    </Shell>
  );
}

export default Home;
