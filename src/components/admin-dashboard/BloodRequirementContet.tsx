import "./BloodRequirementContent.scss"
import {Button, Form, Modal} from "react-bootstrap";
import {Line} from "react-chartjs-2";
import React, {useState} from "react";
import {data} from "../../pages/AdminDashboardPage";
import Select from "react-select";

export function BloodRequirementContet() {

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
        <>
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
        </>
    )
}