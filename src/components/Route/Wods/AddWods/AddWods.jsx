import React, { Fragment } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import "./AddWods.css";
import Select from "../../Athletes/AthleteDetails/Select";

export default function AddWods(props) {
  return (
    <Fragment>
      <Modal
        show={props.displayModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="text-light"
          style={{ backgroundColor: "#1f1f1f" }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            <MDBIcon icon="dumbbell" size="lg" className="mr-2" /> Add Wod
          </Modal.Title>
          <button
            type="button"
            className="close text-white"
            onClick={props.toggleModal}
          >
            <span>&times;</span>
          </button>
        </Modal.Header>
        <form
          className="needs-validation"
          noValidate
          style={{
            backgroundColor: "#383838",
            padding: "0.5rem"
          }}
        >
          <Modal.Body className="text-light">
            <MDBRow className="m-3">
              <MDBCol md="4" className="mb-2 mt-3">
                <MDBInput
                  className="text-white"
                  icon="pen"
                  type="text"
                  name="wodName"
                  label="Name"
                  labelClass="labelClass"
                  required
                >
                  <div className="invalid-feedback ml-4 pl-3"></div>
                  <div className="valid-feedback ml-4 pl-3">Looks good!</div>
                </MDBInput>
              </MDBCol>
              <MDBCol md="4" className="mb-2 mt-3">
                <MDBInput
                  className="text-white"
                  icon="align-left"
                  type="text"
                  name="description"
                  label="Description"
                  labelClass="labelClass"
                ></MDBInput>
              </MDBCol>
              <MDBCol md="4" className="mb-2 mt-3">
                <MDBInput
                  className="text-white"
                  icon="clock"
                  type="number"
                  name="time"
                  label="Time"
                  labelClass="labelClass"
                ></MDBInput>
              </MDBCol>
              <MDBCol md="4" className="mb-2 mt-3">
                <h6 className="mt-2 mb-2 p-2 text-center">Type</h6>

                <Select
                  options={props.options}
                  getValue={props.getValue}
                  defaultValue="Select Type"
                />
              </MDBCol>
            </MDBRow>

            <h5 className="mt-2 mb-2 p-2 text-center border">
              <MDBIcon icon="dumbbell" /> Exercises
            </h5>
            <MDBRow className="m-3 pb-4 border">
              <MDBCol md="6" className="mb-2 mt-3">
                <MDBInput
                  className="text-white"
                  type="text"
                  name="exerciseName"
                  label="Name"
                  labelClass="labelClass"
                ></MDBInput>
              </MDBCol>
              <MDBCol md="6" className="mb-2 mt-3">
                <MDBInput
                  className="text-white"
                  icon=""
                  type="number"
                  name="reps"
                  label="Reps"
                  labelClass="labelClass"
                ></MDBInput>
              </MDBCol>

              <MDBCol md="6" className="mb-2 mt-3">
                Weight
                <MDBInput
                  icon="female"
                  className="text-white"
                  type="number"
                  name="weightFemale"
                  label="Kg"
                ></MDBInput>
                <MDBInput
                  className="text-white"
                  icon="male"
                  type="number"
                  name="weightMale"
                  label="Kg"
                ></MDBInput>
              </MDBCol>
            </MDBRow>
          </Modal.Body>
          <Modal.Header className="modalFooter">
            <MDBBtn color="success" size="sm" type="submit">
              <MDBIcon icon="share-square" size="lg" className="mr-2" /> Add
              Exercise
            </MDBBtn>
            <MDBBtn color="danger" size="sm" onClick={props.toggleModal}>
              <MDBIcon icon="ban" size="lg" className="mr-2" /> Cancel
            </MDBBtn>
          </Modal.Header>
        </form>
      </Modal>
    </Fragment>
  );
}