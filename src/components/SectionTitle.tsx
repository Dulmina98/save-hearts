import "./SectionTitle.scss"

export function SectionTitle(props: { title: string }) {

    return (
        <div className="section-title">
            <div className={"red-square"}></div>
            <div className={"title-text"}>{props.title}</div>
        </div>
    )
}