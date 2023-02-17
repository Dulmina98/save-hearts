import {CoverImage} from "../components/CoverImage";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SectionTitle} from "../components/SectionTitle";
import "./OragnizeCampPage.scss"
import React from "react";

export function OrganizeCampPage() {

    return (
        <div className="organize-camp page">
            <CoverImage imgPath={"/assets/images/organize-camp/organize-camp-cover-image.png"}
                        heading={"Blood donation camp management"}
                        headingDescription={"Online blood donation camp management is a system for organizing and coordinating blood donation events through an online platform."}/>

            <Container>
                <Row>
                    <Col md={6}>
                        <div className={"organize-camp-content"}>
                            <SectionTitle title={"Blood donation camp organizer"}/>
                            <div className={"mt-4 organize-camp-description"}>
                                An online blood donation camp organizer is a platform that helps plan and manage blood
                                donation events through an online platform. It streamlines the process of organizing and
                                participating in blood donation events, making it easier to give the gift of life and
                                save
                                lives in the community.
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
    )
}