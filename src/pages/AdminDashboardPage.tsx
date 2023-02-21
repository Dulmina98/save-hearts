import "./AdminDashboardPage.scss"
import {Col, Container, Nav, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import React, {useState} from "react";
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


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Blood amount',
            data: [1102, 1753, 1672, 2120, 721, 3133, 1082, 1652, 2359, 1365, 2512, 1982],
            borderColor: 'rgb(201, 26, 33)',
            backgroundColor: 'rgba(201, 26, 33, 0.5)',
        },
    ],
};

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
                        </Col>
                    </Row>
                </Container>
            </div>




            <Footer bgColor={"bg-pearlWhite"}/>
        </div>

    )
}