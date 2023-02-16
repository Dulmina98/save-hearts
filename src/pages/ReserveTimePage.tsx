import "./ReserveTime.scss"
import {CoverImage} from "../components/CoverImage";

export function ReserveTimePage() {

    return (
        <div className="reserve-time page">
            <CoverImage imgPath={"/assets/images/reserve-time/reserve-time-cover-image.png"}
                        heading={"Reserve a time to donate blood"}
                        headingDescription={"Online reservation allows individuals to schedule a time to donate blood through an online platform."}/>
        </div>
    )
}