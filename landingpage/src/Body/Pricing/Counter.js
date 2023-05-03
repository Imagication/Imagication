import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import { white } from '@mui/material/colors';
function Counter(props) {
    const { minValue, onIncrement, onDecrement } = props;
    const [count, setCount] = React.useState(minValue);
  
    function handleIncrement() {
      setCount(Math.min(count + 1, props.maxValue || Infinity));
      onIncrement();
    }
  
    function handleDecrement() {
        if (count > minValue) {
            setCount(count - 1);
            onDecrement();
          }
    }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button size="small" variant="contained"  sx={{ opacity: 0.25 }}  style={{backgroundColor:'black'}} onClick={handleDecrement}>
        <RemoveIcon/>
      </Button>
      <Typography sx={{ mx: 2 }}>{count}</Typography>
      <Button size="small" variant="contained" sx={{ opacity: 0.25 }} style={{backgroundColor:'black'}} onClick={handleIncrement}>
        <AddIcon/>
      </Button>
    </Box>
  );
}

export default Counter;
