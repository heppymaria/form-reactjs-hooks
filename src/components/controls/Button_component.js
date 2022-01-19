import React from "react";
import {Button} from "@material-ui/core";
// import Button from '@mui/material/Button';
// import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
// import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';
import { green, lightGreen } from '@mui/material/colors';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(green[500]),
//   backgroundColor: green[500],
//   '&:hover': {
//     backgroundColor: green[700],
//   },
// }));

  
  export default function Button_component(props) {
    const { variant, size, color, onClick, text, ...other } = props;
  return (
    <Button variant={variant} size={size} color={color} onClick={onClick}>
      {text}
    </Button>
    // <ButtonUnstyled {...props} component={CustomButtonRoot} />
  );
}
