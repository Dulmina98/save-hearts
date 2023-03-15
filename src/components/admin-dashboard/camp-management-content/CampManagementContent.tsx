import "./CampManagementContent.scss"
import {CampItem} from "./CampItem";
import {SectionSubHeading} from "../../SectionSubHeading";
import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";

export function CampManagementContent() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mobilesAmount = 1000;
    const staffsAmount = 568;
    const bedsAmount = 741;
    const kitsAmount = 1285;

    return (
        <>
            <div className={"camp-management-content dashboard-tab-content"}>

                <div className="dashboard-section-sub-title mb-4">
                    <SectionSubHeading title={"Blood Donation Camp Management Units"}/>
                </div>

                <div className="camp-management-items-main mb-5">
                    <CampItem amount={mobilesAmount} itemTitle={"Mobiles"}/>
                    <CampItem amount={staffsAmount} itemTitle={"Staffs"}/>
                    <CampItem amount={bedsAmount} itemTitle={"Beds"}/>
                    <CampItem amount={kitsAmount} itemTitle={"Donation Kits"}/>
                </div>

                <div className="btn-row">
                    <Button className={"py-3"} onClick={handleShow}>Update Units</Button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   className={"manual-update-modal"}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Blood Donation Camp Management Units</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Label className={"mt-0"}>Mobiles</Form.Label>
                        <Form.Control type="number" inputMode={"numeric"} min="0" step="1"
                                      placeholder={mobilesAmount.toString()}/>
                        <Form.Label className={"mt-4"}>Staffs</Form.Label>
                        <Form.Control type="number" inputMode={"numeric"} min="0" step="1"
                                      placeholder={staffsAmount.toString()}/>
                        <Form.Label className={"mt-4"}>Beds</Form.Label>
                        <Form.Control type="number" inputMode={"numeric"} min="0" step="1"
                                      placeholder={bedsAmount.toString()}/>
                        <Form.Label className={"mt-4"}>Donation Kits</Form.Label>
                        <Form.Control type="number" inputMode={"numeric"} min="0" step="1"
                                      placeholder={kitsAmount.toString()}/>
                    </form>

                    <div className={"manual-update-description mt-4 mb-2"}>This feature allows you to update
                        the blood donation camp management unit type. Note that this field only accepts
                        numerical input and does not allow negative numbers.
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
        </>

    )

}