import "./AdminDashboardPage.scss"
import {Col, Container, Nav, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import {useState} from "react";

export function AdminDashboardPage() {

    const [activeTab, setActiveTab] = useState("bloodRequirement");

    return (
        <div className="admin-dashboard page">
            <Container>
                <div className={"my-5"}>
                    <SectionHeading title={"Admin Dashboard"}/>
                </div>

                <Row className={"my-5"}>
                    <Col md={3}>
                        <Nav variant="pills" defaultActiveKey="/home" className={"side-panel"}>
                            <Nav.Item>
                                <Nav.Link eventKey="bloodRequirement" onClick={() => setActiveTab("bloodRequirement")}>
                                    <div className={"side-panel-button-icon"}><img
                                        src={`/assets/images/dashboard/admin/blood-requirement-${activeTab === "bloodRequirement" ? "white" : "red"}.png`}
                                        alt=""/></div>
                                    <div className={"side-panel-button-title"}>Blood Requirement</div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="statistics" onClick={() => setActiveTab("statistics")}>
                                    <div className={"side-panel-button-icon"}><img
                                        src={`/assets/images/dashboard/admin/statistics-${activeTab === "statistics" ? "white" : "red"}.png`}
                                        alt=""/></div>
                                    <div className={"side-panel-button-title"}>Statistics</div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="campManagement" onClick={() => setActiveTab("campManagement")}>
                                    <div className={"side-panel-button-icon"}><img
                                        src={`/assets/images/dashboard/admin/camp-management-${activeTab === "campManagement" ? "white" : "red"}.png`}
                                        alt=""/></div>
                                    <div className={"side-panel-button-title"}>Camp Management</div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="upcomingCamps" onClick={() => setActiveTab("upcomingCamps")}>
                                    <div className={"side-panel-button-icon"}><img
                                        src={`/assets/images/dashboard/admin/medical-tent-${activeTab === "upcomingCamps" ? "white" : "red"}.png`}
                                        alt=""/></div>
                                    <div className={"side-panel-button-title"}>Upcoming Camps</div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}