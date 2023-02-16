import {Button, Container, Nav, Navbar} from "react-bootstrap";
import "./NavigationBar.scss"

export function NavigationBar() {

    return (
        <div className="navigation-bar">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="/assets/images/logos/save-hearts-logo.png"
                                                    alt="save-hearts-logo" width={175}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link" className={"mx-2"}>Statistics</Nav.Link>
                            <Nav.Link href="#link" className={"mx-2"}>Organize a Camp</Nav.Link>
                            <Nav.Link href="#link" className={"mx-2"}>Reserve a Time</Nav.Link>
                            <Nav.Link href="#link" className={"mx-2"}>Contact Us</Nav.Link>
                            <Nav.Link href="#link"><Button className={"px-4"}>Sign in</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}