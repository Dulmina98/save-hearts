import "./CoverImage.scss"

export function CoverImage(props: { imgPath: string, heading: string, headingDescription: string }) {

    return (
        <div className="cover-image">
            <img src={props.imgPath} alt=""/>

            <div className="cover-image-content">
                <div className={"cover-image-heading"}>{props.heading}</div>
                <div className={"cover-image-description"}>{props.headingDescription}</div>
            </div>
        </div>
    )
}