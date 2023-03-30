import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import React, {useState} from "react";
import "./LoginPage.scss"
import {Footer} from "../components/Footer";
import {useLogin} from "../hooks/useLogin";

export function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isPending} = useLogin();

    const handleSubmit = (e: any) => {
        e.preventDefault()
        login(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="login page">
            <div className={"bg-moonlight"}>
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className={"login-content"}>
                                <SectionHeading title={"Login"}/>
                                <div className={"mt-4 create-account-description"}>
                                    Dont you have an account? <a href="/signup" className={"link-btn"}>Create One</a>
                                </div>
                                <div className="mt-5">
                                    <form onSubmit={handleSubmit} className="auth-form">
                                        <div className="select-section">
                                            <div className="mb-4">
                                                <Form.Control type="email" placeholder="Email" required={true}
                                                              onChange={(e) => setEmail(e.target.value)}
                                                              value={email}/>
                                            </div>
                                            <div className="mb-4">
                                                <Form.Control type="password" placeholder="Password" required={true}
                                                              onChange={(e) => setPassword(e.target.value)}
                                                              value={password}/>
                                            </div>
                                            {!isPending && <Button className="btn" type={"submit"}>Login</Button>}
                                            {isPending && <Button disabled={true} className="btn">Login...</Button>}
                                            {error && <Button className="btn">{error}</Button>}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className={"login-image"}>
                                <img src="/assets/images/login/login-girl.png" alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer bgColor={"bg-pearlWhite"}/>
        </div>
    )
}