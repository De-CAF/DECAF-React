import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img
        alt="..."
        className="path"
        src="/static/img/path1.png"
      />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
            <Link to="landing-page">
              <img
                alt="..."
                className="img-raised"
                src="/static/img/landing-page.png"
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="landing-page"
              tag={Link}
            >
              View Landing Page
            </Button>
          </Col>
          <Col sm="6">
            <Link to="profile-page">
              <img
                alt="..."
                className="img-raised"
                src="/static/img/profile-page.png"
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="profile-page"
              tag={Link}
            >
              View Profile Page
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
