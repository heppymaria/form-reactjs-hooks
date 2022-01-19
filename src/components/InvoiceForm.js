import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../components/controls/Controls";
// import Button from '@mui/material/Button';
import * as invoiceService from "../services/invoiceService";
import { Row, Col } from "react-grid-system";
import Typography from "@mui/material/Typography";
import { useForm } from "./useForm";

const initialValues = {
  businessUnit: "",
  invoiceNumber: "",
  date: new Date(),
  supplier: "",
  amountCurr: "",
  amount: "",
  paymentTerms: "",
  supplierSite: "",
  type: "",
  termsDate: new Date(),
};

function InvoiceForm() {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <form>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Business Unit
              </Typography>
            </Col>

            <Col>
              <Controls.Select
                name="businessUnit"
                label="Business Unit"
                value={values.businessUnit}
                onChange={handleInputChange}
                options={invoiceService.getBusinessUnitCollection()}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>
        {/* {values.businessUnit} */}
        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Number
              </Typography>
            </Col>

            <Col>
              {/* <Number /> */}
              <Controls.Input
                name="invoiceNumber"
                label="Invoice Number"
                value={values.invoiceNumber}
                onChange={handleInputChange}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>

        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Date
              </Typography>
            </Col>

            <Col>
              <Controls.DatePicker
                name="date"
                label="Date"
                value={values.date}
                onChange={handleInputChange}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>

        {/* Supplier */}
        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Supplier
              </Typography>
            </Col>

            <Col>
              <Controls.Select
                name="supplier"
                label="Supplier"
                value={values.supplier}
                onChange={handleInputChange}
                options={invoiceService.getSupplierCollection()}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>

        <Grid item xs={4}>
          {/* <Amount /> */}
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Amount
              </Typography>
            </Col>

            <Col xs={2}>
              <Controls.Select
                name="amountCurr"
                label="Curr"
                value={values.amountCurr}
                onChange={handleInputChange}
                options={invoiceService.getAmountCurrCollection()}
                className="form-control2"
              />
            </Col>
            <Col>
              <Controls.Input
                name="amount"
                label="Amount"
                value={values.amount}
                onChange={handleInputChange}
                // style = "width: 10"
              />
            </Col>
          </Row>
        </Grid>

        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Payment Terms
              </Typography>
            </Col>

            <Col>
              <Controls.Select
                name="paymentTerms"
                label="Payment Terms"
                value={values.paymentTerms}
                onChange={handleInputChange}
                options={invoiceService.getPaymentTermsCollection()}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>
        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Supplier Site
              </Typography>
            </Col>

            <Col>
              <Controls.Select
                name="supplierSite"
                label="Supplier Site"
                value={values.supplierSite}
                onChange={handleInputChange}
                options={invoiceService.getSupplierSiteCollection()}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>

        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Type
              </Typography>
            </Col>

            <Col>
              <Controls.Select
                name="type"
                label="Type"
                value={values.type}
                onChange={handleInputChange}
                options={invoiceService.getTypeCollection()}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>

        <Grid item xs={4}>
          <Row align="center">
            <Col xs={2.5}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Terms Date
              </Typography>
            </Col>

            <Col>
              <Controls.DatePicker
                name="termsDate"
                label="Terms Date"
                value={values.termsDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </Col>
          </Row>
        </Grid>
      </Grid>


      <div align="center">
        <br></br>

        <Controls.Button_component
          type="submit"
          variant="contained"
          color="success"
          size="large"
          text="CREATE INVOICE"
        />
        {/* <Button variant="contained" color="success">
        Success
      </Button> */}
      </div>
    </form>
  );
}

// const {
//     values,
//     setValues,
//     errors,
//     setErrors,
//     handleInputChange,
//     resetForm
// } = useForm(initialFValues, true, validate);

// const handleSubmit = e => {
//     e.preventDefault()
//     if(validate()) {

//     }
// }

export default InvoiceForm;
