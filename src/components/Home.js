import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="opac">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img
              src="https://brc.ucsd.edu/_images/BGRotator-1.png"
              className="d-block w-100"
              alt="..."
            />
            
            <div className="carousel-caption d-none d-md-block">
              <h2>WELCOME TO OUR UNIVERSITY</h2>
              <p>
                Educational is simple, clean and responsive.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.soas.ac.uk/sites/default/files/styles/narrow_large/public/2022-07/Students%20at%20a%20SOAS%20graduation%201.jpg?h=2caeb94a&itok=BFuuMsIN"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>WELCOME TO OUR UNIVERSITY</h2>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.indstate.edu/sites/default/files/media/october-banner-frame.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>WELCOME TO OUR UNIVERSITY</h2>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className="container">
        <div className="row mt-3 mb-5">
          <div className="col-md-4 mt-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                {/* <img
                src={url + "/" + file}
                className="img-fluid"
              /> */}
                <img
                  src="https://www.bmu.edu.in/wp-content/uploads/2018/12/bba-association-kpmg-programme-overview.jpg"
                  className="img-fluid "
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              {/* <img src= class="card-img-top" alt="" /> */}
              <div class="card-body">
                <div className="t1 w-76 mt-2">
                <h5>
                    Master Of Business Administration
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            itaque nisi tempore libero quidem mollitia aspernatur, reprehenderit</p>
            <Button>Learn More</Button>
                </div>
                
              </div>
            </div>
            </div>
          <div className="col-md-4 mt-4">

            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                {/* <img
                src={url + "/" + file}
                className="img-fluid"
              /> */}
                <img
                  src="https://online.champlain.edu/sites/online/files/styles/width_1600/public/2021-03/online-colleges-human-resources-degree-blog1-1900x900.jpg?itok=GB84mXDi"
                  className="img-fluid "
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              {/* <img src= class="card-img-top" alt="" /> */}
              <div class="card-body">
                <div className="t1 w-76 mt-2">
                <h5>
                    Human Resource Management
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            itaque nisi tempore libero quidem mollitia aspernatur, reprehenderit</p>
            <Button>Learn More</Button>
                </div>
                
              </div>
            </div>
            </div>
          <div className="col-md-4 mt-4">

            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                {/* <img
                src={url + "/" + file}
                className="img-fluid"
              /> */}
                <img
                  src="https://future.mcmaster.ca/wp-content/uploads/2020/09/computerscience-3.jpg"
                  className="img-fluid "
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>
              </div>
              {/* <img src= class="card-img-top" alt="" /> */}
              <div class="card-body">
                <div className="t1 w-76 mt-2">
                  <h5>
                    Computer Science
                  </h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            itaque nisi tempore libero quidem mollitia aspernatur, reprehenderit</p>
            <Button>Learn More</Button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center ab"><b>About Us</b></h3>

      <section className="about" id="about">
        <div className="about-img ">
          <img src="https://www.nottingham.ac.uk/about/images/campuses/campuses-university-hospitals.jpg" />
        </div>
        <div className="about-text">
          <h3>We provide High Quality Education </h3>
          <h2>Visit Our Campus Soon</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            itaque nisi tempore libero quidem mollitia aspernatur, reprehenderit
            corporis nam totam sapiente eveniet dolorem nulla dicta est quasi
            quibusdam rerum facilis. Magnam rerum laboriosam blanditiis vel!
            Facere dignissimos ducimus porro inventore ex officiis, a
            perspiciatis atque accusantium aperiam.
          </p>
          <NavLink className="btn btn-primary" to="/contact">Contact Us</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
