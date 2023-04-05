import "./ContactUsPage.scss"
import {Footer} from "../components/Footer";
import React from "react";
import {Container} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import {Discord, EnvelopeFill, Facebook, GeoAltFill, Telegram, TelephoneFill, Twitter} from "react-bootstrap-icons";

export function ContactUsPage() {

    return (
        <div className="page contact-us-page bg-moonlight">
            <div className="contact-us-main">
                <div className="header-image">
                    <img src="/assets/images/contact-us/contact-us-header.png" alt=""/>
                </div>
                <Container className={"contact-us-content-main"}>
                    <div className="red-box"></div>
                    <div className="contact-us-content">
                        <div className="contact-us-content-row">
                            <div className="contact-us-details-col">
                                <SectionHeading title={"Contact Us"}/>
                                <div className={"contact-us-description"}>Feel free to contact us anytime and we'll get
                                    back to you as soon as possible
                                </div>

                                <div className="contact-us-contact-details mt-5">
                                    <div className={"contact-details-item-row mt-4"}>
                                        <div className={"contact-details-item-icon"}><TelephoneFill color={"#000"}
                                                                                                    size={20}/></div>
                                        <div className="contact-details-item-text">011 7 220 677</div>
                                    </div>
                                    <div className={"contact-details-item-row mt-4"}>
                                        <div className={"contact-details-item-icon"}><EnvelopeFill color={"#000"}
                                                                                                   size={20}/></div>
                                        <div className="contact-details-item-text">info@nbts.health.gov</div>
                                    </div>
                                    <div className={"contact-details-item-row mt-4"}>
                                        <div className={"contact-details-item-icon"}><GeoAltFill color={"#000"}
                                                                                                 size={20}/></div>
                                        <div className="contact-details-item-text">National Blood Center,<br/>
                                            No. 555/5D,<br/>
                                            Elvitigala Mawatha,<br/>
                                            Colombo 05.
                                        </div>
                                    </div>
                                </div>

                                <div className="social-icons-row mt-5">
                                    <Discord color="#C91A21" size={20}/><Twitter color="#C91A21" size={20}/><Facebook
                                    color="#C91A21" size={20}/><Telegram
                                    color="#C91A21" size={20}/>
                                </div>
                            </div>
                            <div className="contact-us-content-img-col">
                                <div className={"contact-us-img"}>
                                    <img src="/assets/images/contact-us/contact-us-page-img.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"contact-us-end-description"}>
                        Thank you for visiting our website. If you have any questions or comments, please don't hesitate
                        to get in touch. You can reach us by phone, email, or using the form on this page. We look
                        forward to hearing from you and helping in any way we can.
                    </div>


                </Container>
            </div>

            <Footer bgColor={"bg-pearlWhite"}/>
        </div>
    )
}