import React from "react";
import { useRouter } from "next/dist/client/router";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    const menu = document.getElementById("basic-navbar-nav");
    menu.classList.remove("show");
  };

  return (
    <header>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand
            onClick={() => {
              router.push("/");
            }}
          >
            Elements74
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
            <Nav>
              <Nav.Link
                onClick={() => {
                  router.push("/");
                  handleClick();
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  router.push("/about");
                  handleClick();
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  router.push("/contactUs");
                  handleClick();
                }}
              >
                Contact Us
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      router.push("/catagories/men's clothing");
                      handleClick();
                    }}
                  >
                    Men&apos;s Wear
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      router.push("/catagories/women's clothing");
                      handleClick();
                    }}
                  >
                    Women&apos;s Wear
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      router.push("/catagories/jewelery");
                      handleClick();
                    }}
                  >
                    Jewelry
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      router.push("/catagories/electronics");
                      handleClick();
                    }}
                  >
                    Electronics
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
