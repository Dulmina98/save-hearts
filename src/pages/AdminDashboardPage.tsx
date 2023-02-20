import "./AdminDashboardPage.scss"
import {Button, Col, Container, Form, Modal, Nav, Row} from "react-bootstrap";
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
import {Line} from "react-chartjs-2";
import {Footer} from "../components/Footer";
import Select from "react-select";


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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const months = [
        {value: 1, label: 'January'},
        {value: 2, label: 'February'},
        {value: 3, label: 'March'},
        {value: 4, label: 'April'},
        {value: 5, label: 'May'},
        {value: 6, label: 'June'},
        {value: 7, label: 'July'},
        {value: 8, label: 'August'},
        {value: 9, label: 'September'},
        {value: 10, label: 'October'},
        {value: 11, label: 'November'},
        {value: 12, label: 'December'},
    ];


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
                                <div className={"blood-requirement-content dashboard-tab-content"}>

                                    <div className="py-5 mb-5 required-blood-amount-content">
                                        <div className={"required-blood-amount-text"}>
                                            <div className={"required-blood-amount red-color"}>1124</div>
                                            <div>Amount of blood need to next month</div>
                                        </div>
                                        <div className="button-row mt-5">
                                            <Button className={"py-3"}>Generate using AI model</Button>
                                            <Button onClick={handleShow} className={"py-3"}>Enter Manually</Button>
                                        </div>

                                    </div>
                                    <div className="past-blood-requirement-chart mb-5">
                                        <div className="chart-title mb-4">Past year required blood amount</div>
                                        <Line data={data}/>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={show} onHide={handleClose}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   className={"manual-update-modal"}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Required Blood Amount</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label id="aria-label" htmlFor="aria-example-input">
                            Select month
                        </label>
                        <Select options={months} placeholder={"Select month"} className={"select-item mt-1"}
                                classNamePrefix="react-select"/>
                        <Form.Label className={"mt-4"}>Enter required blood amount</Form.Label>
                        <Form.Control type="number" inputMode={"numeric"} min="0" step="1"
                                      placeholder="Enter required blood amount"/>
                    </form>

                    <div className={"manual-update-description mt-4 mb-2"}>This feature allows you to manually update
                        the required
                        amount of blood for a particular blood
                        type. Note that this field only accepts numerical input and does
                        not allow negative numbers.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className={"modal-button mx-2"} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className={"modal-button"} variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            <Footer bgColor={"bg-pearlWhite"}/>
        </div>

    )
}