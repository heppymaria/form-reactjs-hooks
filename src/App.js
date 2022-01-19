import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MediaQuery from 'react-responsive';
import InvoiceForm from './components/InvoiceForm'
import Controls from "./components/controls/Controls";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div align="center">
      <Button onClick={handleOpen} variant="contained" color="success">Add</Button>
      {/* <Controls.Button_component
        type= "submit"
        variant = "contained"
        color = "success"
        size = "large"
        text = "Add"
      >ADD</Controls.Button_component> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box position="fixed">
          <Item>
        <Typography id="modal-modal-title" variant="h6" component="h3">
          Create Invoice
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          To create invoice, please enter the required information
        </Typography>
        <br></br>
        
        <InvoiceForm />
        </Item>
        </Box>

      </Modal>
    </div>
  );
}

export default App;
