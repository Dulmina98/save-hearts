import Select from "react-select";
import {Footer} from "../components/Footer";
import {Button} from "react-bootstrap";
import "./CampRequestForm.scss"
import axios from "axios";
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

export function CampRequestForm() {
    const districts = [
        {value: 1, label: 'Gampaha'},
        {value: 1, label: 'Colombo'},
        {value: 3, label: 'Kalutara'},
        {value: 4, label: 'Galle'},
        {value: 5, label: 'Matara'},
        {value: 6, label: 'Hambantota'},
        {value: 7, label: 'Matale'},
        {value: 8, label: 'Kandy'},
        {value: 9, label: 'Nuwara Eliya'},
        {value: 10, label: 'Puttalam'},
        {value: 11, label: 'Kurunegala'},
        {value: 12, label: 'Badulla'},
        {value: 13, label: 'Monaragala'},
        {value: 14, label: 'Anuradhapura'},
        {value: 15, label: 'Polonnaruwa'},
        {value: 16, label: 'Kegalla'},
        {value: 17, label: 'Ratnapura'},
        {value: 18, label: 'Jaffna'},
        {value: 19, label: 'Kilinochchi'},
        {value: 20, label: 'Mannar'},
        {value: 21, label: 'Mullaitivu'},
        {value: 22, label: 'Vavuniya'},
        {value: 23, label: 'Trincomalee'},
        {value: 24, label: 'Batticaloa'},
        {value: 25, label: 'Ampara'},
    ];

    let navigate = useNavigate();
    const [request, setRequest] = useState({
        leaderName: "",
        contactNumber: "",
        email: "",
        expectUnits: 0,
        expectDonors: 0,
        district: "",
        month: "",
        location: "",
        message: ""

    })
    const {leaderName, contactNumber, email, expectUnits, expectDonors, district, month, location, message} = request

    const onInputChange = ({e}: { e: any }) => {
        setRequest({...request, [e.target.name]: e.target.value})
    }
    const onSubmit = async ({e}: { e: any }) => {
        e.preventDefault();

        await axios.post("http://localhost:8000/request-blood-camp", request);
        navigate("/");
    };


    return (
        <div>
            <div className={"mt-4 mb-5"}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 border p-4 mt-2 '>
                            <h2 className='text-center m-4'>Send an Application</h2>
                            <form onSubmit={(e) => onSubmit({e: e})}>
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className="mb-3">
                                        <label htmlFor="LeaderName" className="form-label">
                                            Name Of the Person taking the lead
                                        </label>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            // placeholder="Enter your name"
                                            name="leaderName"
                                            value={leaderName}
                                            onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>
                                </div>
                                {/*------------------------------------------------------*/}
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className="mb-3">
                                        <label htmlFor="ContactNumber" className="form-label">
                                            Contact Number
                                        </label>
                                        <input
                                            type={"tel"}
                                            className="form-control"
                                            // placeholder="Enter your Contact number"
                                            name="contactNumber"
                                            value={contactNumber}
                                            onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>
                                </div>
                                {/*------------------------------------------------------*/}
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className="mb-3">
                                        <label htmlFor="Email" className="form-label">
                                            Email Address
                                        </label>
                                        <input
                                            type={"email"}
                                            className="form-control"
                                            // placeholder="Enter your Email Address"
                                            name="email"
                                            value={email}
                                            onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>
                                </div>
                                {/*------------------------------------------------------*/}
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className="mb-3">
                                        <label htmlFor="Location" className="form-label">
                                            Location Address or Description about place
                                        </label>
                                        <input
                                            type={"text"}
                                            className="form-control"
                                            // placeholder="Enter your Email Address"
                                            name="location"
                                            value={location}
                                            onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>
                                </div>
                                {/*------------------------------------------------------*/}
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className="mb-3 col-6">
                                        <label htmlFor="ExpectUnits" className="form-label">
                                            Expecting Blood Units
                                        </label>
                                        <input
                                            type={"number"}
                                            className="form-control"
                                            // placeholder="Number Of Expect Units"
                                            name="expectUnits"
                                            value={expectUnits}
                                            onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>

                                    <div className="mb-3 col-6">
                                        <label htmlFor="ExpectDonors" className="form-label">
                                            Expecting Blood Donors
                                        </label>
                                        <input
                                            type={"number"}
                                            className="form-control"
                                            // placeholder="Number Of Expect Donors"
                                            name="expectDonors"
                                            value={expectDonors}
                                            onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>
                                </div>
                                {/*------------------------------------------------------*/}
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className={"select-section col-6 mb-3"}>
                                        <label htmlFor="District" className="form-label">
                                            District
                                        </label>
                                        <Select options={districts}
                                                placeholder={"-Select-"}
                                                className={"select-item"}
                                                classNamePrefix="react-select"
                                                name={"district"}
                                                onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>

                                    <div className={"select-section col-6"}>
                                        <label htmlFor="Month" className="form-label">
                                            Month
                                        </label>
                                        <input
                                            type={"month"}
                                            className="form-control"
                                            placeholder="-Select Date-"
                                            name="month"

                                            value={month}
                                            onChange={(e) => onInputChange({e: e})}
                                        />

                                    </div>

                                </div>
                                {/*------------------------------------------------------*/}
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className="mb-3">
                                        <label htmlFor="Message" className="form-label">
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control"
                                            // placeholder="Enter your Email Address"
                                            name="message"
                                            value={message}
                                            onChange={(e) => onInputChange({e: e})}
                                        />
                                    </div>
                                </div>
                                {/*------------------------------------------------------*/}
                                <div className={"row"}>
                                    <div className="mb-3">
                                        <label htmlFor="File" className="form-label">
                                            Upload Your Application Here
                                        </label>
                                        <input
                                            type={"file"}
                                            className="form-control"
                                            // placeholder="Enter your Email Address"
                                            name="file"
                                            // value={name}
                                            // onChange={(e) => onInputChange(e)}
                                        />
                                    </div>
                                </div>
                                {/*------------------------------------------------------*/}
                                <div className={"mt-4 button-row"}>
                                    <Link className={"btn-cancel btn mx-4"} to={"/"}>Cancel</Link>
                                    <Button type={"submit"}>Submit</Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


            </div>
            <Footer bgColor={"bg-moonlight"}/>
        </div>
    )
}




