import "./Footer.scss"
import {Discord, Facebook, Telegram, Twitter} from "react-bootstrap-icons";

export function Footer(props: { bgColor: string }) {

    return (
        <div className={`footer pt-5 pb-4 ${props.bgColor}`}>
            <div className={"footer-logo pt-3"}>
                <img src="/assets/images/logos/save-hearts-logo-main.png" alt=""/>
            </div>
            <div className="footer-slogan my-4">Give the Gift of Life <span className="red-color">DONATE BLOOD</span>
            </div>
            <div className={"footer-social-icons-row mt-3 mb-5"}>
                <Discord color="#C91A21"/><Twitter color="#C91A21"/><Facebook color="#C91A21"/><Telegram
                color="#C91A21"/>
            </div>
            <div className={"publication-text mt-3"}>© 2022 All Rights Reserved To Team Xcode</div>
        </div>
    )
}