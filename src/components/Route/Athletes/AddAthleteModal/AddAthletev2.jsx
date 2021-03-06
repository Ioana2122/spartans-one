import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import "./AddAthlete.css";
import {
  addAthleteFields,
  personalBestFields
} from "../../../../helpers/addAthlete";
import Spinner from "./Spinner";

const athletesAPI = "https://theboxathletes.herokuapp.com/athletes/";

class AddAthleteV2 extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    age: "",
    genre: "",
    personalBest: {
      benchpress: "" || 0,
      strictpress: "" || 0,
      pushpress: "" || 0,
      row: "" || 0,
      backsquat: "" || 0,
      frontsquat: "" || 0,
      deadlift: "" || 0,
      trapDeadlift: "" || 0
    },
    selectedFileName: "Upload Photo...",
    selectedFile: null,
    spinner: false
  };
  onChangeFileHandler = event => {
    this.setState({
      selectedFileName: this.state.phone + event.target.files[0].name,
      selectedFile: event.target.files[0]
    });
  };
  submitHandler = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
      const formData = new FormData();
      formData.append("name", this.state.name);
      formData.append("phoneNumber", this.state.phone);
      formData.append("email", this.state.email);
      formData.append("age", this.state.age);
      formData.append("sex", this.state.genre);
      formData.append("personalBest", JSON.stringify(this.state.personalBest));
      this.state.selectedFile
        ? formData.append(
            "photo",
            this.state.selectedFile,
            this.state.selectedFileName
          )
        : formData.append("photo", this.state.selectedFile);
      this.setState({ spinner: true });
      fetch(athletesAPI, {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(() => {
          this.setState({ spinner: false });
          this.props.onHide();
          this.props.showServerResponse(
            `${this.state.name} has joined The Box and Vali's Athletes!`
          );
        })
        .finally(() => {
          setTimeout(() => {
            this.props.changeCount();
          }, 2500);
        });
    } else {
      event.target.className += " was-validated";
      const formElements = Array.from(form.elements);
      const firstInvalidElement = formElements.find(
        element => !element.validity.valid && element.required
      );
      firstInvalidElement.focus();
    }
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  changePrHandler = event => {
    this.setState({
      personalBest: {
        ...this.state.personalBest,
        [event.target.name]: parseInt(event.target.value) || 0
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.spinner ? <Spinner /> : null}
        <Modal
          show
          onHide={this.props.onHide}
          message={this.props.message}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="text-light modalHeader">
            <Modal.Title id="contained-modal-title-vcenter">
              <MDBIcon icon="user-plus" size="lg" className="mr-2" /> Add
              Athlete
            </Modal.Title>
            <button
              type="button"
              className="close text-white"
              onClick={this.props.onHide}
            >
              <span>&times;</span>
            </button>
          </Modal.Header>
          <form
            className="needs-validation addform"
            onSubmit={this.submitHandler}
            noValidate
          >
            <Modal.Body className="text-light" id="modalBody">
              <h5 className="mt-2 mb-2 p-2 text-center border">
                <MDBIcon icon="info" size="lg" className="mr-2" /> Athlete Info
              </h5>
              <MDBRow className="m-3 border">
                {addAthleteFields.map((field, index) => (
                  <MDBCol md="4" key={index}>
                    <MDBInput
                      icon={field.icon}
                      value={this.state[field.name]}
                      onChange={this.changeHandler}
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      label={field.label}
                      labelClass="labelClass"
                      className="addAthleteInput"
                      required
                    >
                      <div className="invalid-feedback ml-4 pl-3">
                        {field.invalidMessage}
                      </div>
                      <div className="valid-feedback ml-4 pl-3">
                        Looks good!
                      </div>
                    </MDBInput>
                  </MDBCol>
                ))}
                <MDBCol md="4" className="mb-2 mt-3">
                  <label>
                    <MDBIcon icon="camera" size="lg" /> - Photo
                  </label>
                  <div className="custom-file">
                    <input
                      type="file"
                      onChange={this.onChangeFileHandler}
                      className="custom-file-input"
                      id="FormPhoto"
                    />
                    <label className="custom-file-label" htmlFor="FormPhoto">
                      {this.state.selectedFileName}
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="mt-1 mb-1">
                    <MDBIcon icon="male" size="lg" /> /{" "}
                    <MDBIcon icon="female" size="lg" />
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      onChange={this.changeHandler}
                      id="male"
                      name="genre"
                      value="M"
                      required
                    />
                    <label className="custom-control-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      onChange={this.changeHandler}
                      id="female"
                      name="genre"
                      value="F"
                      required
                    />
                    <label className="custom-control-label" htmlFor="female">
                      Female
                    </label>
                    <div className="invalid-feedback">
                      Please select male or female!
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
              <h5 className="mt-2 mb-2 p-2 text-center border">
                <MDBIcon icon="dumbbell" /> Personal Best
              </h5>
              <MDBRow className="m-3 pb-4 border">
                {personalBestFields.map((field, index) => (
                  <MDBCol md="3" key={index}>
                    <MDBInput
                      label={field.label}
                      labelClass="labelClass"
                      className="addAthleteInput mx-auto"
                      id={field.name}
                      onChange={this.changePrHandler}
                      type={field.type}
                      name={field.name}
                      value={this.state[field.name]}
                    />
                  </MDBCol>
                ))}
              </MDBRow>
              <MDBCol md="12" className="mb-3 mt-3">
                <div className="custom-control custom-checkbox pl-3">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    name="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="invalidCheck"
                  >
                    Check the box if the info submitted is correct
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </MDBCol>
            </Modal.Body>
            <Modal.Header className="modalFooter">
              <MDBBtn color="success" size="sm" type="submit">
                <MDBIcon icon="share-square" size="lg" className="mr-2" />{" "}
                Submit
              </MDBBtn>
              <MDBBtn color="danger" size="sm" onClick={this.props.onHide}>
                <MDBIcon icon="ban" size="lg" className="mr-2" /> Cancel
              </MDBBtn>
            </Modal.Header>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddAthleteV2;
