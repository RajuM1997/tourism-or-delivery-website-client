import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog py-5">
      <Container>
        <div className="text-center">
          <i className="text-warning">
            <h6>Latest Blog Posts</h6>
          </i>
          <h1 className="text-center title pb-5">
            Our Latest Article <br /> For Travellers
          </h1>
        </div>
        <Row lg={3} xs={1} className="g-4">
          <Col>
            <CardGroup data-aos="fade-up">
              <Card className="card">
                <Card.Img
                  variant="top"
                  className="card-image img-thumbnail"
                  src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=811&q=80"
                />
                <Card.Body className="d-flex justify-content-between pt-3">
                  <div className="comment-icon">
                    <i className="far fa-clock"></i>
                    <span> 15 May 2020</span>
                  </div>
                  <div className="comment-icon">
                    <i className="far fa-comment-alt"></i>
                    <span className="ps-1">0 Comments</span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <Card.Title>TRIP ABOUT TO LEAVE</Card.Title>
                </Card.Body>
                <Card.Body className="py-0 description">
                  <Card.Text>
                    It won’t be a bigger problem to find one video game lover in
                    your neighbor. Since the introduction of Virtual Game.one
                    video game lover in“If I was the California tourism
                    industry, I’d be really worried.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer mx-auto">
                  <Link to="/">View Details</Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-up">
              <Card className=" active">
                <Card.Img
                  variant="top"
                  className="card-image img-thumbnail"
                  src="https://images.unsplash.com/photo-1499419819507-77191b8ec46e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                />
                <Card.Body className="d-flex justify-content-between pt-3">
                  <div className="comment-icon">
                    <i className="far fa-clock"></i>
                    <span> 15 May 2020</span>
                  </div>
                  <div className="comment-icon">
                    <i className="far fa-comment-alt"></i>
                    <span className="ps-1">0 Comments</span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <Card.Title>Golden Gate Bridge, San Francisco</Card.Title>
                </Card.Body>
                <Card.Body className="py-0 description">
                  <Card.Text>
                    The most popular state for tourism in the U.S. endured
                    record wildfires, drought and flooding just this year. “The
                    rate of change has been so dramatic,” says one local
                    scientist.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer mx-auto">
                  <Link to="/">View Details</Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
          <Col>
            <CardGroup data-aos="fade-up">
              <Card className="card">
                <Card.Img
                  variant="top"
                  className="card-image img-thumbnail"
                  src="https://images.unsplash.com/photo-1477959061014-5aa7ff249d84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                />
                <Card.Body className="d-flex justify-content-between pt-3">
                  <div className="comment-icon">
                    <i className="far fa-clock"></i>
                    <span> 15 May 2020</span>
                  </div>
                  <div className="comment-icon">
                    <i className="far fa-comment-alt"></i>
                    <span className="ps-1">0 Comments</span>
                  </div>
                </Card.Body>
                <Card.Body>
                  <Card.Title>TBrown Pendant Lamp Hanging on Trees</Card.Title>
                </Card.Body>
                <Card.Body className="py-0 description">
                  <Card.Text>
                    he Biden administration has announced that it would lift
                    travel restrictions on Nov. 8 and reopen the United States
                    to fully vaccinated international travelers.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer mx-auto">
                  <Link to="/">View Details</Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
