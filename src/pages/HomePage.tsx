import {Col, Container, Row} from "react-bootstrap";
import "./HomePage.scss"

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
                    </Row>
                </Container>
            </div>
        </div>
    )
}