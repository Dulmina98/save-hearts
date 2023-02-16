import "./ReserveTimePage.scss"
import {CoverImage} from "../components/CoverImage";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SectionTitle} from "../components/SectionTitle";
import React from 'react'
import Select from 'react-select'

export function ReserveTimePage() {

    const date = [
        {value: 1, label: '02nd March 2023'},
        {value: 2, label: '06th March 2023'},
        {value: 3, label: '07th March 2023'},
        {value: 4, label: '09th March 2023'},
        {value: 5, label: '12th March 2023'},
        {value: 6, label: '16th March 2023'},
        {value: 7, label: '22th March 2023'},
    ];

    const donationCamp = [
        {value: 1, label: 'Matara - Old Dutch Market'},
        {value: 2, label: 'KiribathGoda - YMBA'},
        {value: 3, label: 'Bambalapitiya - GP Square'},
        {value: 4, label: 'Colombo 07 - Musaeus College'},
        {value: 5, label: 'Kandy - Kotikagoda Purana Temple'},
        {value: 6, label: 'Galle - Sri Sudharmarama Temple'},
        {value: 7, label: 'Colombo 10 - Ananda College'},
    ];

    const timeSlot = [
        {value: 1, label: '8.00 a.m.'},
        {value: 2, label: '8.30 a.m.'},
        {value: 3, label: '9.00 a.m.'},
        {value: 4, label: '8.30 a.m.'},
        {value: 5, label: '10.00 a.m.'},
        {value: 6, label: '10.30 a.m.'},
        {value: 7, label: '11.00 a.m.'},
    ];

    return (
        <div className="reserve-time page">
            <CoverImage imgPath={"/assets/images/reserve-time/reserve-time-cover-image.png"}
                        heading={"Reserve a time to donate blood"}
                        headingDescription={"Online reservation allows individuals to schedule a time to donate blood through an online platform."}/>

            <Container>
                <Row>
                    <Col md={7}>
                        <div className={"reserve-time-image"}>
                            <img src="/assets/images/reserve-time/reserve-time-doctor.png" alt=""/>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="reserve-time-content">
                            <SectionTitle title={"Reserve a time"}/>
                            <div className={"section-description"}>
                                Checking blood transfusion service staff availability is the process of determining
                                whether the necessary
                            </div>
                            <div className={"select-section"}>
                                <div className={"mb-4 mt-5"}>
                                    <Select options={date} placeholder={"Select Date"} className={"select-item"}
                                            classNamePrefix="react-select"/>
                                </div>
                                <div className={"mb-4"}>
                                    <Select options={donationCamp} placeholder={"Select Blood Donation Camp"}
                                            className={"select-item"} classNamePrefix="react-select"/>
                                </div>
                                <div>
                                    <Select options={timeSlot} placeholder={"Time Slot"} className={"select-item"}
                                            classNamePrefix="react-select"/>
                                </div>
                            </div>
                            <div className={"mt-4 button-row"}>
                                <Button disabled={true} className={"mx-4"}>Reserve</Button>
                                <Button>Search</Button>
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}