import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { red } from '@mui/material/colors';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'whte',
    with:"390px",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    with:"390px",
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
      border:'red solid 4px',
      with:"390px",
    },
    '&:hover fieldset': {
      borderColor: 'red',
      border:'red solid 4px'
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      with:"390px",
    },
  },
});





export default function CustomizedInputsStyled() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      
      <CssTextField label="Custom CSS issa" id="custom-css-outlined-input"
      style={{width:"500px" }}
      />
     
    </Box>
  );
}
