import "./SignupPage.scss"
import React, {useState} from "react";
import {useSignup} from "../hooks/useSignup";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import {Footer} from "../components/Footer";
import Select from "react-select";
import {UserBloodGroups} from "../interfaces/user-blood-groups";
import {DataConfig} from "../firebase/data-config";

export function SignupPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [nic, setNIC] = useState('')
    const [mobileNum, setMobileNum] = useState('')
    const [selectBloodGroup, setSelectBloodGroup] = useState<UserBloodGroups | null>(null);
    const [selectedBloodGroupValue, setSelectedBloodGroupValue] = useState<string>('');
    const [nearestCity, setNearestCity] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isPending, error} = useSignup()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        signup(firstName, lastName, email, nic, mobileNum, selectedBloodGroupValue, password)

        setFirstName('');
        setLastName('');
        setEmail('');
        setNIC('');
        setMobileNum('');
        setSelectBloodGroup(null);
        setSelectedBloodGroupValue('');
        setNearestCity('');
        setPassword('');
    }
    const handleBloodGroupChange = (selectedOption: UserBloodGroups | null) => {
        if (selectedOption) {
            setSelectedBloodGroupValue(selectedOption.id);
        } else {
            setSelectedBloodGroupValue('');
        }
        setSelectBloodGroup(selectedOption);
    };

    return (
        <div className="signup page">
            <div className={"bg-moonlight"}>
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className={"signup-content"}>
                                <SectionHeading title={"Sign up"}/>
                                <div className="mt-5">
                                    <form onSubmit={handleSubmit} className="auth-form">
                                        <div className={"select-section"}>
                                            <div className={"mb-4"}>
                                                <Form.Control type="text" placeholder="First Name" required={true}
                                                              onChange={(e) => setFirstName(e.target.value)}
                                                              value={firstName}/>
                                            </div>
                                            <div className={"mb-4"}>
                                                <Form.Control type="text" placeholder="Last Name" required={true}
                                                              onChange={(e) => setLastName(e.target.value)}
                                                              value={lastName}/>
                                            </div>
                                            <div className={"mb-4"}>
                                                <Form.Control type="email" placeholder="Email" required={true}
                                                              onChange={(e) => setEmail(e.target.value)} value={email}/>
                                            </div>
                                            <div className={"mb-4"}>
                                                <Form.Control type="text" placeholder="NIC" required={true}
                                                              onChange={(e) => setNIC(e.target.value)} value={nic}/>
                                            </div>
                                            <div className={"mb-4"}>
                                                <Form.Control type="tel" placeholder="Mobile Number" required={true}
                                                              onChange={(e) => setMobileNum(e.target.value)}
                                                              value={mobileNum}/>
                                            </div>
                                            <div className={"mb-4"}>
                                                <Select
                                                    options={DataConfig.bloodGroups}
                                                    placeholder={"Select Blood Group"}
                                                    className={"select-item"}
                                                    classNamePrefix="react-select"
                                                    value={selectBloodGroup}
                                                    getOptionValue={(option) => option.id}
                                                    onChange={handleBloodGroupChange}
                                                    isMulti={false}
                                                />
                                            </div>
                                            <div className={"mb-4"}>
                                                <Form.Control type="tel" placeholder="Nearest City" required={true}
                                                              onChange={(e) => setNearestCity(e.target.value)}
                                                              value={nearestCity}/>
                                            </div>
                                            <div className={"mb-4"}>
                                                <Form.Control type="password" placeholder="Password" required={true}
                                                              onChange={(e) => setPassword(e.target.value)}
                                                              value={password}/>
                                            </div>
                                        </div>
                                        {!isPending && <Button type={"submit"}>Sign in</Button>}
                                        {isPending && <Button disabled>Sign in...</Button>}
                                        {error && <Button>{error}</Button>}
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className={"signup-image"}>
                                <img src="/assets/images/signup/signup-girl.png" alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer bgColor={"pearlWhite"}/>
        </div>
    )
}