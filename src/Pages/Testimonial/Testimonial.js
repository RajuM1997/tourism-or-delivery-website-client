import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial py-5">
      <div className="text-center pb-5">
        <i className="text-warning">
          <h6>Client Sey!!!!</h6>
        </i>
        <h1 className="title">
          Explore <br /> our <br /> testimonials
        </h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col" data-aos="fade-right">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                className="d-block img-fluid"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sally Morgan</h5>

                <p className="card-text">
                  There’s a growing appreciation for Meteora wines, and the
                  vineyards here enjoy special privileges under the Protected
                  Geographic Indication (PGI) tag.
                </p>
                {/* display the ratting */}
                <div className="testimonial-icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-down">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                className="d-block img-fluid"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sally Morgan</h5>

                <p className="card-text">
                  Just around the corner of Kastraki, just a few blocks away
                  from the Great Saint tower area, is a route that takes you to
                  the highest point in Meteora..
                </p>
                {/* display the ratting */}
                <div className="testimonial-icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-left">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1528478246253-b119d2406290?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80"
                className="d-block img-fluid"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title">Sally Morgan</h5>

                <p className="card-text">
                  b The trail is only accessible by the “Via Cordata”, which
                  involves vertical and horizontal climbing secured by a rope
                  around your waist.
                </p>
                {/* display the ratting */}
                <div className="testimonial-icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
