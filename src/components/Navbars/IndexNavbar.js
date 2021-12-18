
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserEmail } from "../../features/userSlice";
import { selectdefaultIsLoggedIn } from "../../features/defaultAuthSlice";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");

  const userEmail = useSelector(selectUserEmail)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const defaultIsLoggedIn = useSelector(selectdefaultIsLoggedIn)

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>DECAF• </span>
            Social
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Decentralised file sharing social network
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  DECAF• Social
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://github.com/De-CAF/DECAF-React"
                rel="noopener noreferrer"
                target="_blank"
                title="Star us on Twitter"
              >
                <i className="fab fa-github" />
                <p className="d-lg-none d-xl-none">Github</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Explore
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/">
                  <i className="tim-icons icon-image-02" />
                  Home
                </DropdownItem>
                {
                  userEmail ? (isLoggedIn ? ( <><DropdownItem tag={Link} to="/profile">
                    <i className="tim-icons icon-single-02" />
                    Profile
                  </DropdownItem><DropdownItem tag={Link} to="/account-settings">
                      <i className="tim-icons icon-single-02" />
                      Account Settings
                    </DropdownItem><DropdownItem tag={Link} to="/chat">
                      <i className="tim-icons icon-email-85" />
                      Chat
                    </DropdownItem></>) : (                <><DropdownItem tag={Link} to="/register">
                      <i className="tim-icons icon-laptop" />
                      Register
                    </DropdownItem><DropdownItem tag={Link} to="/login">
                        <i className="tim-icons icon-tablet-2" />
                        Login
                      </DropdownItem></>)) : (defaultIsLoggedIn ? (                <><DropdownItem tag={Link} to="/profile">
                      <i className="tim-icons icon-single-02" />
                      Profile
                    </DropdownItem><DropdownItem tag={Link} to="/account-settings">
                        <i className="tim-icons icon-single-02" />
                        Account Settings
                      </DropdownItem><DropdownItem tag={Link} to="/chat">
                        <i className="tim-icons icon-email-85" />
                        Chat
                      </DropdownItem></>):(                <><DropdownItem tag={Link} to="/register">
                        <i className="tim-icons icon-laptop" />
                        Register
                      </DropdownItem><DropdownItem tag={Link} to="/login">
                          <i className="tim-icons icon-tablet-2" />
                          Login
                        </DropdownItem></>))
                }
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              {
                userEmail ? (isLoggedIn ? (<Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  target="_blank"
                  href="/profile"
                >
                  <i className="tim-icons icon-spaceship" /> Profile
                </Button>) : (<Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  target="_blank"
                  href="/register"
                >
                  <i className="tim-icons icon-spaceship" /> Lets get started
                </Button>)) : (defaultIsLoggedIn ? (<Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  target="_blank"
                  href="/profile"
                >
                  <i className="tim-icons icon-spaceship" /> Profile
                </Button>) : (<Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  target="_blank"
                  href="/register"
                >
                  <i className="tim-icons icon-spaceship" /> Lets get started
                </Button>))
              }
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                to="/download" tag={Link}
              >
                <i className="tim-icons icon-cloud-download-93" /> Download
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar >
  );
}
