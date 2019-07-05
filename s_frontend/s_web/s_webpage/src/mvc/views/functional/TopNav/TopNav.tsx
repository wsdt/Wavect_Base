import * as React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

export const TopNav = () => {
    return (
        <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">
                <img
                    alt="Wavect logo"
                    src={require("../../../../../public/img/icons/logo_compressed.png")}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/b2c">For Privates</Nav.Link>
                    <Nav.Link href="/b2b">For Enterprises</Nav.Link>
                    <Nav.Link href="/b2g">For other organizations</Nav.Link>
                    <NavDropdown title="Blog" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/blog/environment">Environment</NavDropdown.Item>
                        <NavDropdown.Item href="/blog/health">Health</NavDropdown.Item>
                        <NavDropdown.Item href="blog/society">Society</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/newsletter">Newsletter</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.facebook.com/bekindaustria/" target="_blank">
                        <img
                            alt="Wavect on Facebook"
                            src={require("../../../../../public/img/icons/social/facebook.png")}
                            width="25"
                            height="25"
                            className="d-inline-block align-top"
                        />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/bekind_austria/" target="_blank">
                        <img
                            alt="Wavect on Instagram"
                            src={require("../../../../../public/img/icons/social/instagram.png")}
                            width="25"
                            height="25"
                            className="d-inline-block align-top"
                        />
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/company/19010151" target="_blank">
                        <img
                            alt="Wavect on LinkedIn"
                            src={require("../../../../../public/img/icons/social/linkedin.png")}
                            width="25"
                            height="25"
                            className="d-inline-block align-top"
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
