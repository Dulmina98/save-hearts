import "./StatisticsContent.scss"
import {BloodGroupAmountItem} from "./BloodGroupAmountItem";
import {SectionSubHeading} from "../../SectionSubHeading";
import {projectFirestore} from "../../../firebase/config";
import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import Select from "react-select";

export function StatisticsContent() {

    const [typeAPositive, setTypeAPositive] = useState(0)
    const [typeANegative, setTypeANegative] = useState(0)
    const [typeBPositive, setTypeBPositive] = useState(0)
    const [typeBNegative, setTypeBNegative] = useState(0)
    const [typeOPositive, setTypeOPositive] = useState(0)
    const [typeONegative, setTypeONegative] = useState(0)
    const [typeABPositive, setTypeABPositive] = useState(0)
    const [typeABNegative, setTypeABNegative] = useState(0)
    const [updatedData, setUpdatedData] = useState({
        aPositive: typeAPositive,
        aNegative: typeANegative,
        bPositive: typeBPositive,
        bNegative: typeBNegative,
        oPositive: typeOPositive,
        oNegative: typeONegative,
        abPositive: typeABPositive,
        abNegative: typeABNegative,
    });
    const [show, setShow] = useState(false);
    const [bloodType, setBloodType] = useState("A+")

    let docRef = projectFirestore.collection("statistics").doc("bloodUnits");

    docRef.get().then((doc) => {
        if (doc.exists) {
            const bloodUnits = doc.data();
            setTypeAPositive(bloodUnits?.aPositive)
            setTypeANegative(bloodUnits?.aNegative)
            setTypeBPositive(bloodUnits?.bPositive)
            setTypeBNegative(bloodUnits?.bNegative)
            setTypeOPositive(bloodUnits?.oPositive)
            setTypeONegative(bloodUnits?.oNegative)
            setTypeABPositive(bloodUnits?.abPositive)
            setTypeABNegative(bloodUnits?.abNegative)

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    const updateData = () => {
        const dataToUpdate: any = {};

        switch (bloodType) {
            case "A+":
                dataToUpdate["aPositive"] = updatedData.aPositive || typeAPositive;
                break;
            case "A-":
                dataToUpdate["aNegative"] = updatedData.aNegative || typeANegative;
                break;
            case "B+":
                dataToUpdate["bPositive"] = updatedData.bPositive || typeBPositive;
                break;
            case "B-":
                dataToUpdate["bNegative"] = updatedData.bNegative || typeBNegative;
                break;
            case "O+":
                dataToUpdate["oPositive"] = updatedData.oPositive || typeOPositive;
                break;
            case "O-":
                dataToUpdate["oNegative"] = updatedData.oNegative || typeONegative;
                break;
            case "AB+":
                dataToUpdate["abPositive"] = updatedData.abPositive || typeABPositive;
                break;
            case "AB-":
                dataToUpdate["abNegative"] = updatedData.abNegative || typeABNegative;
                break;
            default:
                break;
        }

        docRef.update(dataToUpdate)
            .then(() => {
                console.log("Document successfully updated!");
                handleClose();
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    };

    const bloodTypes = [
        {value: '1', label: 'A+'},
        {value: '2', label: 'A-'},
        {value: '3', label: 'B+'},
        {value: '4', label: 'B-'},
        {value: '5', label: 'O+'},
        {value: '6', label: 'O-'},
        {value: '7', label: 'AB+'},
        {value: '8', label: 'AB-'},
    ]

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
            <div className={"statistics-content dashboard-tab-content"}>

                <div className="dashboard-section-sub-title mb-4">
                    <SectionSubHeading title={"Available blood units per group"}/>
                </div>

                <div className="blood-groups-amount-main">
                    <BloodGroupAmountItem bloodGroup={"A+"} amount={typeAPositive}/>
                    <BloodGroupAmountItem bloodGroup={"A-"} amount={typeANegative}/>
                    <BloodGroupAmountItem bloodGroup={"B+"} amount={typeBPositive}/>
                    <BloodGroupAmountItem bloodGroup={"B-"} amount={typeBNegative}/>
                    <BloodGroupAmountItem bloodGroup={"O+"} amount={typeOPositive}/>
                    <BloodGroupAmountItem bloodGroup={"O-"} amount={typeONegative}/>
                    <BloodGroupAmountItem bloodGroup={"AB+"} amount={typeABPositive}/>
                    <BloodGroupAmountItem bloodGroup={"AB-"} amount={typeABNegative}/>
                </div>

                <div className="update-units-button-row">
                    <Button className={"py-3"} onClick={handleShow}>Update Units</Button>
                </div>

                <div className="dashboard-section-sub-title mt-5 mb-4">
                    <SectionSubHeading title={"This month statistics"}/>
                </div>

                <div className="this-month-statistics-main">
                    <div className="this-month-statistic-item">
                        <div className="this-month-statistic-item-amount">1000</div>
                        <div className="this-month-statistic-item-title">Expected Total Units</div>
                    </div>
                    <div className="this-month-statistic-item">
                        <div className="this-month-statistic-item-amount">750</div>
                        <div className="this-month-statistic-item-title">Available Total Amount</div>
                    </div>
                    <div className="this-month-statistic-item">
                        <div className="this-month-statistic-item-amount">1000</div>
                        <div className="this-month-statistic-item-title">Required Units</div>
                    </div>
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
                        <Form.Label className={"mt-0"}>Blood Type</Form.Label>
                        <Select options={bloodTypes} placeholder={"Blood Type"}
                                value={bloodType ? {value: bloodType, label: bloodType} : null}
                                className={"select-item"}
                                classNamePrefix="react-select"
                                onChange={(selectedOption) => {
                                    if (selectedOption) {
                                        setBloodType(selectedOption.label)
                                    }
                                }}/>
                        <Form.Label className={"mt-0"}>Update Amount</Form.Label>
                        {bloodType === "A+" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeAPositive.toString()}
                                          name="aPositive"
                                          value={updatedData.aPositive || typeAPositive}
                                          onChange={handleFieldChange}/>
                        }
                        {bloodType === "A-" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeANegative.toString()}
                                          name="aNegative"
                                          value={updatedData.aNegative || typeANegative}
                                          onChange={handleFieldChange}/>
                        }
                        {bloodType === "B+" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeBPositive.toString()}
                                          name="bPositive"
                                          value={updatedData.bPositive || typeBPositive}
                                          onChange={handleFieldChange}/>
                        }
                        {bloodType === "B-" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeBNegative.toString()}
                                          name="bNegative"
                                          value={updatedData.bNegative || typeBNegative}
                                          onChange={handleFieldChange}/>
                        }
                        {bloodType === "O+" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeOPositive.toString()}
                                          name="oPositive"
                                          value={updatedData.oPositive || typeOPositive}
                                          onChange={handleFieldChange}/>
                        }
                        {bloodType === "O-" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeONegative.toString()}
                                          name="oNegative"
                                          value={updatedData.oNegative || typeONegative}
                                          onChange={handleFieldChange}/>
                        }
                        {bloodType === "AB+" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeABPositive.toString()}
                                          name="abPositive"
                                          value={updatedData.abPositive || typeABPositive}
                                          onChange={handleFieldChange}/>
                        }
                        {bloodType === "AB-" &&
                            <Form.Control type="number"
                                          inputMode={"numeric"}
                                          min="0"
                                          step="1"
                                          placeholder={typeABNegative.toString()}
                                          name="abNegative"
                                          value={updatedData.abNegative || typeABNegative}
                                          onChange={handleFieldChange}/>
                        }


                        {/*<Form.Control type="number"
                                      inputMode={"numeric"}
                                      min="0"
                                      step="1"
                                      placeholder={typeANegative.toString()}
                                      name="Staff"
                                      value={updatedData.aNegative || typeANegative}
                                      onChange={handleFieldChange}/>*/}

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