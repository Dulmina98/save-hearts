import {CoverImage} from "../components/CoverImage";
import {Button, Col, Container, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import "./OragnizeCampPage.scss"
import React, {useState} from "react";
import {SectionSubHeading} from "../components/SectionSubHeading";
import Select from "react-select";
import {Footer} from "../components/Footer";
import {projectFirestore} from "../firebase/config";

export function OrganizeCampPage() {

    const [district, setDistrict] = useState("Select District")
    const [bedsAmount, setBedsAmount] = useState(0)
    const [staffsAmount, setStaffsAmount] = useState(0)
    const [mobilesAmount, setMobilesAmount] = useState(0)
    const [kitsAmount, setKitsAmount] = useState(0)
    const [tempDistrict, setTempDisctrict] = useState("")

    const districts = [
        {value: '1', label: 'Colombo'},
        {value: '2', label: 'Matara'},
        {value: '3', label: 'Galle'},
        {value: '4', label: 'Kandy'},
        {value: '5', label: 'Jaffna'},
    ]

    let docRef = projectFirestore.collection("campManagement").doc(district);

    docRef.get().then((doc) => {
        if (doc.exists) {
            const managementUnits = doc.data();
            setBedsAmount(managementUnits?.Beds);
            setStaffsAmount(managementUnits?.Staff)
            setMobilesAmount(managementUnits?.Mobiles)
            setKitsAmount(managementUnits?.DonationKits)

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    function handleSearch(selectedOption: string) {
        setDistrict(selectedOption)
    }

    return (
        <div>
            <div className="organize-camp page">
                <CoverImage imgPath={"/assets/images/organize-camp/organize-camp-cover-image.png"}
                            heading={"Blood Donation Camp Organizer"}
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
                                        <Button href={'/camp-request-form'} className={"px-3 py-2"}>Send Your
                                            Application</Button>
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
                                            <div className="district-select-note">Note: These statistics are only for
                                                the current month.
                                            </div>
                                            <Select options={districts} placeholder={"District"}
                                                    value={tempDistrict ? {
                                                        value: tempDistrict,
                                                        label: tempDistrict
                                                    } : null}
                                                    className={"select-item"}
                                                    classNamePrefix="react-select"
                                                    onChange={(selectedOption) => {
                                                        if (selectedOption) {
                                                            setTempDisctrict(selectedOption.label)
                                                        }
                                                    }}/>
                                        </div>
                                    </div>
                                    <div className={"button-row"}>
                                        <Button onClick={() => handleSearch(tempDistrict)}>Search</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className={"availability-col my-5"}>
                                    <div className="availability-col-content">
                                        <div className="section-sub-heading-main">
                                            <SectionSubHeading title={"Availability"}/>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Mobiles</div>
                                            <div
                                                className="availability-item-amount">{mobilesAmount ? mobilesAmount : 'N/A'}</div>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Staff</div>
                                            <div
                                                className="availability-item-amount">{staffsAmount ? staffsAmount : 'N/A'}</div>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Beds</div>
                                            <div
                                                className="availability-item-amount">{bedsAmount ? bedsAmount : 'N/A'}</div>
                                        </div>
                                        <div className="availability-item mt-1">
                                            <div className="availability-item-title">Blood Donation Kits</div>
                                            <div
                                                className="availability-item-amount">{kitsAmount ? kitsAmount : 'N/A'}</div>
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