import {CoverImage} from "../components/CoverImage";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import "./OragnizeCampPage.scss"
import React from "react";
import {SectionSubHeading} from "../components/SectionSubHeading";
import Select from "react-select";
import {Footer} from "../components/Footer";

export function OrganizeCampPage() {

    const district = [
        {value: 1, label: 'Gampaha'},
        {value: 2, label: 'Colombo'},
        {value: 3, label: 'Kalutara'},
        {value: 4, label: 'Galle'},
        {value: 5, label: 'Matara'},
        {value: 6, label: 'Hambantota'},
        {value: 7, label: 'Matale'},
        {value: 8, label: 'Kandy'},
        {value: 9, label: 'Nuwara Eliya'},
        {value: 10, label: 'Puttalam'},
        {value: 11, label: 'Kurunegala'},
        {value: 12, label: 'Badulla'},
        {value: 13, label: 'Monaragala'},
        {value: 14, label: 'Anuradhapura'},
        {value: 15, label: 'Polonnaruwa'},
        {value: 16, label: 'Kegalla'},
        {value: 17, label: 'Ratnapura'},
        {value: 18, label: 'Jaffna'},
        {value: 19, label: 'Kilinochchi'},
        {value: 20, label: 'Mannar'},
        {value: 21, label: 'Mullaitivu'},
        {value: 22, label: 'Vavuniya'},
        {value: 23, label: 'Trincomalee'},
        {value: 24, label: 'Batticaloa'},
        {value: 25, label: 'Ampara'},
    ];
    const n = 10;

    const date = [
        {value: 1, label: '02nd March 2023'},
        {value: 2, label: '06th March 2023'},
        {value: 3, label: '07th March 2023'},
        {value: 4, label: '09th March 2023'},
        {value: 5, label: '12th March 2023'},
        {value: 6, label: '16th March 2023'},
        {value: 7, label: '22th March 2023'},
    ];

    return (
        <div>
            <div className="organize-camp page">
                <CoverImage imgPath={"/assets/images/organize-camp/organize-camp-cover-image.png"}
                            heading={"Blood donation camp management"}
                            headingDescription={"Online blood donation camp management is a system for organizing and coordinating blood donation events through an online platform."}/>

                <div className={"bg-moonlight"}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className={"organize-camp-content"}>
                                    <SectionHeading title={"Blood donation camp organizer"}/>
                                    <div className={"mt-4 organize-camp-description"}>
                                        An online blood donation camp organizer is a platform that helps plan and manage
                                        blood donation events through an online platform. It streamlines the process of
                                        organizing
                                        and participating in blood donation events, making it easier to give the gift of
                                        life
                                        and save lives in the community.
                                    </div>
                                    <div className="mt-5">
                                        <Button className={"px-3 py-2"}>Send Your Application</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={"organize-camp-image"}>
                                    <img src="/assets/images/organize-camp/organize-camp-doctor.png" alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={"bg-pearlWight"}>
                    <Container className={"my-5"}>
                        <Row>
                            <Col md={6}>
                                <div className="availability-check-col">
                                    <SectionSubHeading title={"Check blood transfusion service staff availability"}/>
                                    <div className={"mt-4 availability-check-description"}>
                                        Checking blood transfusion service staff availability is the process of
                                        determining
                                        whether the necessary staff are available to run a blood donation camp. It is an
                                        important step in organizing a successful event.
                                    </div>
                                    <div className={"select-section"}>
                                        <div className={"mb-4 mt-5"}>
                                            <Select options={district} placeholder={"District"}
                                                    className={"select-item"}
                                                    classNamePrefix="react-select"/>
                                        </div>
                                        <div className={"mb-4"}>
                                            <Select options={date} placeholder={"Date"}
                                                    className={"select-item"} classNamePrefix="react-select"/>
                                        </div>
                                    </div>
                                    <div className={"button-row"}>
                                        <Button>Search</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={"availability-col my-5"}>
                                    <div className="availability-col-content">
                                        <div className="section-sub-heading-main">
                                            <SectionSubHeading title={"Availability"}/>
                                        </div>
                                        <div className="availability-item mt-4">
                                            <div className="availability-item-title">Camps On That Day</div>
                                            <div className="availability-item-amount">N/A</div>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Mobiles</div>
                                            <div className="availability-item-amount">N/A</div>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Staff</div>
                                            <div className="availability-item-amount">N/A</div>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Beds</div>
                                            <div className="availability-item-amount">N/A</div>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Blood Donation Kits</div>
                                            <div className="availability-item-amount">N/A</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer bgColor={"bg-moonlight"}/>
        </div>

    )
}