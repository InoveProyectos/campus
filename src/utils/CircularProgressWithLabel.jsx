import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', marginLeft: "10px", marginRight: "20px" }}>
      <CircularProgress style={{color: "rgb(195,235,113)"}} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0, 
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ><h6>{`${Math.round(props.value)}%`}</h6>
      </Box>
    </Box>
  );
}


export default function CircularWithValueLabel(props) {
  const {
    attendance
  } = props;

  const [progress, setProgress] = React.useState(77);

  React.useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    // }, 800);
    // return () => {
    //   clearInterval(timer);
    // };
    setProgress(attendance)
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}