import "./CampManagementContent.scss"
import {CampItem} from "./CampItem";
import {SectionSubHeading} from "../../SectionSubHeading";
import {Button, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {projectFirestore} from "../../../firebase/config";
import Select from "react-select";

export function CampManagementContent() {


    const [show, setShow] = useState(false);
    const [bedsAmount, setBedsAmount] = useState(0)
    const [staffsAmount, setStaffsAmount] = useState(0)
    const [mobilesAmount, setMobilesAmount] = useState(0)
    const [kitsAmount, setKitsAmount] = useState(0)
    const [updatedData, setUpdatedData] = useState({
        Mobiles: mobilesAmount,
        Staff: staffsAmount,
        Beds: bedsAmount,
        DonationKits: kitsAmount,
    });
    const [district, setDistrict] = useState("Colombo")

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

    const updateData = () => {
        docRef.update(updatedData)
            .then(() => {
                console.log("Document successfully updated!");
                handleClose();
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    };
    const handleFieldChange = (event: any) => {
        const {name, value} = event.target;
        setUpdatedData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={"camp-management-content dashboard-tab-content"}>

                <div className="dashboard-section-sub-title mb-4">
                    <SectionSubHeading title={"Blood Donation Camp Management Units"}/>
                </div>

                <div className={"district-select mb-5"}>
                    <Select options={districts} placeholder={"District"}
                            value={district ? {value: district, label: district} : null}
                            className={"select-item"}
                            classNamePrefix="react-select"
                            onChange={(selectedOption) => {
                                if (selectedOption) {
                                    setDistrict(selectedOption.label)
                                }
                            }}/>
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
                        <Form.Control type="number"
                                      inputMode={"numeric"}
                                      min="0"
                                      step="1"
                                      placeholder={mobilesAmount.toString()}
                                      name="Mobiles"
                                      value={updatedData.Mobiles || mobilesAmount}
                                      onChange={handleFieldChange}/>

                        <Form.Label className={"mt-4"}>Staffs</Form.Label>
                        <Form.Control type="number"
                                      inputMode={"numeric"}
                                      min="0"
                                      step="1"
                                      placeholder={staffsAmount.toString()}
                                      name="Staff"
                                      value={updatedData.Staff || staffsAmount}
                                      onChange={handleFieldChange}/>

                        <Form.Label className={"mt-4"}>Beds</Form.Label>
                        <Form.Control type="number"
                                      inputMode={"numeric"}
                                      min="0"
                                      step="1"
                                      placeholder={bedsAmount.toString()}
                                      name="Beds"
                                      value={updatedData.Beds || bedsAmount}
                                      onChange={handleFieldChange}/>

                        <Form.Label className={"mt-4"}>Donation Kits</Form.Label>
                        <Form.Control type="number"
                                      inputMode={"numeric"}
                                      min="0"
                                      step="1"
                                      placeholder={kitsAmount.toString()}
                                      name="DonationKits"
                                      value={updatedData.DonationKits || kitsAmount}
                                      onChange={handleFieldChange}/>
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
                    <Button className={"modal-button"} variant="primary" onClick={updateData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )

}