import React from "react";
import { Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  //1. create a form object which should match with model fields
  const userForm = {
    firstname: "",
    lastname: "",
    email: "",
    problem: "",
  };

  //2. create a function for form submission
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Success");
      Swal.fire({
        title: "Success",
        text: "Your problem has been recorded👍",
        icon: "success",
      });
      
    } else {
      console.log("Something went wrong");
      Swal.fire({
        title: "Error",
        text: "Something went wrong😔",
        icon: "error",
      });
    }
  };

  return (
    <section className="sections contain vh-100">
      <div className=" container px-4 py-2 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-12 col-xl-12">
            <div className="card text-black">
             
                <div className="row justify-content">
                  <div className="w1 col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Get In Touch
                    </p>

                    <div className="sign-up-form">
                      <Formik initialValues={userForm} onSubmit={userSubmit}>
                        {({
                          values,
                          handleChange,
                          handleSubmit,
                          errors,
                          touched,
                        }) => (
                          <form
                            className="mx-1 mx-md-4"
                            onSubmit={handleSubmit}
                          >
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <TextField
                                  label="First Name"
                                  variant="outlined"
                                  className="w-100"
                                  id="firstname"
                                  onChange={handleChange}
                                  value={values.firstname}
                                  helperText={
                                    touched.firstname ? errors.firstname : ""
                                  }
                                  error={Boolean(
                                    errors.firstname && touched.firstname
                                  )}
                                />
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fa-solid fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <TextField
                                  label="Last Name"
                                  variant="outlined"
                                  className="w-100"
                                  id="lastname"
                                  onChange={handleChange}
                                  value={values.lastname}
                                />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>

                              <div class="form-outline flex-fill mb-0">
                                <TextField
                                  label="Email"
                                  variant="outlined"
                                  className="w-100"
                                  id="email"
                                  onChange={handleChange}
                                  value={values.email}
                                  helperText={touched.email ? errors.email : ""}
                                  error={Boolean(errors.email && touched.email)}
                                />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <TextField
                                  label="How we can help you? Describe your problem"
                                  variant="outlined"
                                  className="w-100"
                                  id="problem"
                                  onChange={handleChange}
                                  value={values.problem}
                                  helperText={
                                    touched.problem ? errors.problem : ""
                                  }
                                />
                              </div>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <Button
                                className="btn btn-primary"
                                type="submit"
                                variant="contained"
                              >
                                SEND MESSAGE
                              </Button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-4  d-flex align-items-center order-1 order-lg-2">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <h4 className="my-5 display-6 fw-bold ls-tight">
                        Need a specific help?
                      </h4>
                      <br />
                      <p className="mb-4 opacity-71">
                        If you don't want us to contact you for a help, then you
                        can unsbscribe your id from the given link.
                      </p>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
