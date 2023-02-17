import "./SectionSubHeading.scss"

export function SectionSubHeading(props: { title: string }) {

    return (
        <div className="section-sub-title">
            <div className={"red-square"}></div>
            <div className={"title-text"}>{props.title}</div>
        </div>
    )
}