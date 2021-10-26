import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download() {
    return (
        <div
            className="section section-download"
            data-background-color="black"
            id="section-download"
        >
            <img
                alt="..."
                className="path"
                src="/static/img/path1.png"
            />
            <Container>
                <Row className="justify-content-md-center">

                    <Col className="text-center" lg="8" md="12">
                        <img src="/static/img/mockupHD.png" />
                        <h2 className="title">
                            Coming Soon!
                        </h2>
                        <h4 className="description">
                            We cannot wait to release the mobile version. Our application will soon be available on Android as well as on iOS!
                        </h4>
                    </Col>
                    <Col className="text-center" lg="8" md="12">
                        <Button
                            className="btn-round"
                            color='success'
                            href="#"
                            role="button"
                            size="lg"
                        >
                            <i className="fab fa-android" />
                        </Button>
                        <Button
                            className="btn-round"
                            color=""
                            href="#"
                            role="button"
                            size="lg"
                        >
                            <i className="fab fa-apple" />
                        </Button>
                    </Col>

                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row className="row-grid align-items-center my-md">
                    <Col lg="6">
                        <h3 className="text-info font-weight-light mb-2">
                            Thank you for supporting us!
                        </h3>
                        <h4 className="mb-0 font-weight-light">
                            Let's get in touch on any of these platforms.
                        </h4>
                    </Col>
                    <Col className="text-lg-center btn-wrapper" lg="6">
                        <Button
                            className="btn-icon btn-round"
                            color="twitter"
                            id="twitter"
                            size="lg"
                        >
                            <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="twitter">
                            Tweet!
                        </UncontrolledTooltip>
                        <Button
                            className="btn-icon btn-round"
                            color="facebook"
                            id="facebook"
                            size="lg"
                        >
                            <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="facebook">
                            Share!
                        </UncontrolledTooltip>
                        <Button
                            className="btn-icon btn-round"
                            color="github"
                            href="https://github.com/creativetimofficial"
                            id="tooltip877922017"
                            size="lg"
                            target="_blank"
                        >
                            <i className="fab fa-github" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip877922017">
                            Star on Github
                        </UncontrolledTooltip>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
