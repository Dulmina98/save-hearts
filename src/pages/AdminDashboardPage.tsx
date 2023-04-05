import "./AdminDashboardPage.scss"
import {Col, Container, Nav, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Footer} from "../components/Footer";
import {BloodRequirementContet} from "../components/admin-dashboard/blood-requirement-content/BloodRequirementContet";
import {StatisticsContent} from "../components/admin-dashboard/statistics-content/StatisticsContent";
import {UpcomingCampsContent} from "../components/admin-dashboard/upcoming-camps/UpcomingCampsContent";
import {CampManagementContent} from "../components/admin-dashboard/camp-management-content/CampManagementContent";
import React, {useState} from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export function AdminDashboardPage() {

    const [activeTab, setActiveTab] = useState("bloodRequirement");

    return (
        <div>
            <div className="admin-dashboard page bg-moonlight">
                <Container>
                    <div className={"py-5"}>
                        <SectionHeading title={"Admin Dashboard"}/>
                    </div>

                    <Row className={"pb-5"}>
                        <Col md={3}>
                            <Nav variant="pills" defaultActiveKey="bloodRequirement" className={"side-panel"}>
                                <Nav.Item>
                                    <Nav.Link eventKey="bloodRequirement"
                                              onClick={() => setActiveTab("bloodRequirement")}>
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
                        <Col md={9}>
                            {activeTab === "bloodRequirement" &&
                                <BloodRequirementContet/>
                            }
                            {activeTab === "statistics" &&
                                <StatisticsContent/>
                            }
                            {activeTab === "campManagement" &&
                                <CampManagementContent/>
                            }
                            {activeTab === "upcomingCamps" &&
                                <UpcomingCampsContent/>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>




            <Footer bgColor={"bg-pearlWhite"}/>
        </div>

    )
}