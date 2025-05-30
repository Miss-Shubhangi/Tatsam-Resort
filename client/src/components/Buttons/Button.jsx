import React from 'react'
import Button from "@mui/material/Button";

function ButtonComponent({
  buttonType,
  label,
  handleButtonClick,
  prefixIcon,
  suffixIcon,
  className,}) {
    const variant = buttonType === "primary" ? "contained" : "outlined";
  const style =
    buttonType === "primary"
      ? {
          backgroundColor: `transparent`,
          color:'white',
          border: `1px solid white`,
        }
      : {
          color: `var(--primary-color)`,
          backgroundColor:'white',
        };
  return (
      <Button
      style={style}
      variant={variant}
      className={className}
      onClick={() => handleButtonClick()}
      startIcon={prefixIcon}
      endIcon={suffixIcon}
      sx={{
        //borderColor: `var(--primary-color)`,
        padding: "10px 50px",
        borderRadius: `10px`,
        fontFamily:'var( --subheading-font)',
        '&:hover':{
          backgroundColor:'white',
         color: `var(--primary-color)`,
        },
      }}
    >
      {label}
    </Button>
  )
}

export default ButtonComponent



// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import { purple } from '@mui/material/colors';

// const BootstrapButton = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 16,
//   padding: '6px 12px',
//   border: '1px solid',
//   lineHeight: 1.5,
//   backgroundColor: '#0063cc',
//   borderColor: '#0063cc',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     backgroundColor: '#0069d9',
//     borderColor: '#0062cc',
//     boxShadow: 'none',
//   },
//   '&:active': {
//     boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: '#005cbf',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//   },
// });

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: 'transparent',
//    boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 16,
//   padding: '6px 12px',
//   border: '1px solid',
//   lineHeight: 1.5,
//   '&:hover': {
//     backgroundColor: 'white',
//     color:'var(--heading-color)'
//   },
// }));

// export default function CustomizedButtons() {
//   return (
//     <Stack  direction="row">
//       <ColorButton variant="contained">Check Availability</ColorButton>
      
//     </Stack>
//   );
// }

