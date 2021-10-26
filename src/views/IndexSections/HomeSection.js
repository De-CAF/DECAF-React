import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="index-page">
      <div className="page-header">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 class="">DECAF•Social</h1>
            <h4>A De-Centralised Authorised File social network. It's Free and Open Source.</h4>
            <div class="btn-wrapper mb-3">
              <p class="category text-success d-inline">More About Us</p>
              <a href="/landing" class="btn btn-success btn-link btn-sm"><i
                class="tim-icons icon-minimal-right"></i></a>
            </div>
          </div>
        </Container>
      </div>
    </div>

  );
}
