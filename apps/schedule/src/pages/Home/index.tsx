import Shell from '@azaVista/shell';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Shell>
      <Box p={2}>
        <h1 className="text-white">asdfasdf</h1>
        <Typography>
          This is the MyOrg Login Homepage from <code>@myorg/login</code>.
        </Typography>
        <Link to="/">Click to go back home.</Link>
      </Box>
    </Shell>
  );
}

export default Home;
