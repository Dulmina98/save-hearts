import "./CampItem.scss"

export function CampItem(props: { amount: number, itemTitle: string }) {

    return (
        <div className="camp-item">
            <div className="camp-item-content">
                <div className="camp-item-amount">{props.amount}</div>
                <div className="camp-item-title">{props.itemTitle}</div>
            </div>
        </div>
    )
}