import { Formik } from "formik";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "./config";
import "./Login.css";
import { UserContext } from "./UseContext";

const Login = () => {
  const url = app_config.backend_url;
  // const navigate = useNavigate();
  const { setLoggedIn, setCurrentUser } = useContext(UserContext);
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Wellcome!!👌",
        text: "Enter the new World!!",
      });

      const data = await res.json();
      sessionStorage.setItem("user", JSON.stringify(data));
    } else {
      console.log("Login error ");
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "Check your email and password!!",
      });
    }
  };

  return (
    <div className="bodi">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 main">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={userSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mainF">
                      {/* <!-- Email input --> */}
                      <div className=" boxes">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            value={values.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" for="form1Example13">
                            Email address
                          </label>
                        </div>
                      </div>

                      {/* <!-- Password input --> */}
                      <div className=" boxes">
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            value={values.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" for="form1Example23">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-around align-items-center mb-4">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                          />
                          <label
                            className="form-check-label rem"
                            for="form1Example3"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                        <NavLink className="secondary" to="#!">Forgot password?</NavLink>
                      </div>

                      {/* <!-- Submit button --> */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block sbtn"
                      >
                        Sign in
                      </button>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;