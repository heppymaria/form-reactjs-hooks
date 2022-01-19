import React from "react";
import InvoiceForm from "./InvoiceForm";
import { makeStyles } from "@material-ui/core";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MediaQuery from "react-responsive";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));
  

function Invoice() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
              <br></br>
            </Typography>

            <InvoiceForm />
          </Item>
        </Box>
      </Modal>
      <InvoiceForm />
    </div>
  );
}

export default Invoice;
