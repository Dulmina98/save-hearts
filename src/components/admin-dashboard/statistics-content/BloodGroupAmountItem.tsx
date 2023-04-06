import "./BloodGroupAmountItem.scss"

export function BloodGroupAmountItem(props: { bloodGroup: string, amount?: number }) {

    return (
        <div className="blood-group-amount-item mb-5">
            <div className="blood-group-amount-item-content">
                <div className="blood-group">{props.bloodGroup}</div>
                <div className="blood-amount">{props.amount}</div>
            </div>
        </div>
    )
}