import {Button, Container, Nav, Navbar} from "react-bootstrap";
import "./NavigationBar.scss"
import {useAuthContext} from "../hooks/useAuthContext";
import {useLogout} from "../hooks/useLogout";
import {useEffect, useState} from "react";

export function NavigationBar() {

    const {logout, isPending} = useLogout();
    const {user, authIsReady} = useAuthContext()
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        setIsAdmin(false)
        if (user?.email === "admin1@gmail.com" || user?.email === "admin2@gmail.com" || user?.email === "admin3@gmail.com") {
            setIsAdmin(true);
        }
    }, [user])


    return (
        <div className="navigation-bar">
            <Navbar expand="lg" className={"bg-pearlWhite"}>
                <Container>
                    <Navbar.Brand href="/"><img src="/assets/images/logos/save-hearts-logo.png"
                                                alt="save-hearts-logo" width={175}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link disabled={true} href="#link" className={"mx-2"}>Statistics</Nav.Link>
                            <Nav.Link href="/organize-camp" className={"mx-2"}>Organize a Camp</Nav.Link>
                            <Nav.Link href="/reserve-time" className={"mx-2"}>Reserve a Time</Nav.Link>
                            <Nav.Link href='/contact-us' className={"mx-2"}>Contact Us</Nav.Link>
                            {user && isAdmin &&
                                <Nav.Link href="/admin-dashboard" className={"mx-2"}>Dashboard</Nav.Link>}
                            {!user && <Nav.Link href="/login"><Button className={"px-4 py-2"}>Login</Button></Nav.Link>}
                            {user &&
                                <>
                                    {!isPending && <Nav.Link><Button className={"px-4"} onClick={logout}>Logout</Button></Nav.Link>}
                                    {isPending && <Nav.Link><Button disabled={true} className={"px-4"}>Login
                                        out...</Button></Nav.Link>}
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}