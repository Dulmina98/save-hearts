import {Button, Col, Container, Row} from "react-bootstrap";
import "./HomePage.scss"
import {Activity, ChevronRight, DropletFill, PieChartFill} from "react-bootstrap-icons";

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

            <div className="bg-pearlWhite past-statistics-section">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className="past-statistics-section-image">
                                <img src="/assets/images/homepage/past-statistics-doctor.png" alt=""/>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="past-statistics-section-content">
                                <div className="homepage-title-main">
                                    <div className="red-square"></div>
                                    <div className="homepage-title">Last Month <span
                                        className="red-color">Statistics</span></div>
                                </div>
                                <div className="past-statistics-item-row mt-5">
                                    <div className="past-statistics-item">
                                        <div className="past-statistics-amount red-color">1248</div>
                                        <div className="past-statistics-title">Total Blood Collection</div>
                                    </div>
                                    <div className="past-statistics-item">
                                        <div className="past-statistics-amount red-color">987</div>
                                        <div className="past-statistics-title">Total Blood Issues</div>
                                    </div>
                                </div>
                                <div className="past-statistics-item-row mt-4">
                                    <div className="past-statistics-item">
                                        <div className="past-statistics-amount red-color">38</div>
                                        <div className="past-statistics-title">Organized Blood Donation Camps Amount
                                        </div>
                                    </div>
                                    <div className="past-statistics-item">
                                        <div className="past-statistics-amount red-color">1625</div>
                                        <div className="past-statistics-title">Total Blood Donors</div>
                                    </div>
                                </div>
                                <div className={"past-statistics-description mt-5"}>Your precious donation of blood can
                                    save as many as 3 lives.
                                </div>

                                <div className={"link-btn-main mt-5"}>
                                    <Button className={"link-btn"}>Go to Dashboard <ChevronRight color={"#C91A21"}
                                                                                                 className={"mb-1 chevron-right"}/></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="camp-organize-section bg-moonlight">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="camp-organize-section-content">
                                <div className="homepage-title-main">
                                    <div className="red-square"></div>
                                    <div className="homepage-title">Every drop counts! <span
                                        className="red-color">Organize</span> a <span className="red-color">blood donation camp</span> and
                                        save a life.
                                    </div>
                                </div>
                                <div className="camp-organize-section-description my-5">
                                    Every blood donation has the potential to save a life. As a leader in your
                                    community, you have the ability to make a real difference by organizing a blood
                                    donation camp. Take the lead and inspire others to join in and give the gift of
                                    life.
                                </div>
                                <div className={"link-btn-main mt-5"}>
                                    <Button className={"link-btn"}>Organize Blood Donation Camp <ChevronRight
                                        color={"#C91A21"}
                                        className={"mb-1 chevron-right"}/></Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="camp-organize-section-image">
                                <img src="/assets/images/homepage/camp-organize-doctor.png" alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}