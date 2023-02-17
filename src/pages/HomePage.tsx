import {Col, Container, Row} from "react-bootstrap";
import "./HomePage.scss"
import {Activity, DropletFill, PieChartFill} from "react-bootstrap-icons";

export function HomePage() {

    return (
        <div className="homepage page">
            <div className={"landing-section bg-moonlight"}>
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className={"landing-section-text-col"}>
                                <div className="logo-text mb-3">SAVE</div>
                                <div className="logo-text red-color">HEARTS</div>
                                <div className={"logo-description"}>Blood Donation Camp Management System</div>
                                <div className="slogan mt-5">Give the Gift of Life</div>
                                <div className="slogan red-color">DONATE BLOOD</div>
                            </div>

                        </Col>
                        <Col md={7}>
                            <div className="landing-section-image">
                                <img src="/assets/images/homepage/hand-blood-drop.png" alt=""/>
                            </div>

                        </Col>
                        <div className="landing-section-cards-row">
                            <div className="landing-section-card">
                                <DropletFill color={"#C91A21"} size={30} className={"mt-3"}/>
                                <div className="landing-section-card-title mt-3 mb-2">About Blood</div>
                                <div className="landing-section-card-description">
                                    The ABO blood group system was discovered by Karl Landsteiner in 1900. 46 years
                                    later (1946) the Blood Transfusion Service was formed. In 1996 the National Blood
                                    Service was formed to collect and provide blood supplies for all the hospitals in
                                    Sri Lanka.
                                </div>
                            </div>
                            <div className="landing-section-card">
                                <PieChartFill color={"#C91A21"} size={30} className={"mt-4"}/>
                                <div className="landing-section-card-title mt-3 mb-2">Components of Blood</div>
                                <div className="landing-section-card-description">
                                    When we receive your donation we separate it into individual components by spinning
                                    it in a machine called a centrifuge. The individual components are red cells, white
                                    cells, platelets and plasma. These can all be put to different uses.
                                </div>
                            </div>
                            <div className="landing-section-card">
                                <Activity color={"#C91A21"} size={30} className={"mt-4"}/>
                                <div className="landing-section-card-title mt-3 mb-2">Donate Blood</div>
                                <div className="landing-section-card-description">
                                    To ensure the quality, safety, adequacy and cost effectiveness of the blood supply
                                    and related laboratory, clinical, academic and research services in accordance with
                                    national requirements and WHO recommendations.
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}