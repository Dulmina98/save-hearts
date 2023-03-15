import "./StatisticsContent.scss"
import {BloodGroupAmountItem} from "./BloodGroupAmountItem";
import {SectionSubHeading} from "../../SectionSubHeading";

export function StatisticsContent() {

    return (
        <div className={"statistics-content dashboard-tab-content"}>

            <div className="dashboard-section-sub-title mb-4">
                <SectionSubHeading title={"Available blood units per group"}/>
            </div>


            <div className="blood-groups-amount-main">
                <BloodGroupAmountItem bloodGroup={"A+"} amount={782}/>
                <BloodGroupAmountItem bloodGroup={"A-"} amount={567}/>
                <BloodGroupAmountItem bloodGroup={"B+"} amount={365}/>
                <BloodGroupAmountItem bloodGroup={"B-"} amount={952}/>
                <BloodGroupAmountItem bloodGroup={"O+"} amount={632}/>
                <BloodGroupAmountItem bloodGroup={"O-"} amount={103}/>
                <BloodGroupAmountItem bloodGroup={"AB+"} amount={750}/>
                <BloodGroupAmountItem bloodGroup={"AB-"} amount={902}/>
            </div>

            <div className="dashboard-section-sub-title mt-5 mb-4">
                <SectionSubHeading title={"This month statistics"}/>
            </div>

            <div className="this-month-statistics-main">
                <div className="this-month-statistic-item">
                    <div className="this-month-statistic-item-amount">1000</div>
                    <div className="this-month-statistic-item-title">Expected Total Units</div>
                </div>
                <div className="this-month-statistic-item">
                    <div className="this-month-statistic-item-amount">750</div>
                    <div className="this-month-statistic-item-title">Available Total Amount</div>
                </div>
                <div className="this-month-statistic-item">
                    <div className="this-month-statistic-item-amount">1000</div>
                    <div className="this-month-statistic-item-title">Required Units</div>
                </div>
            </div>
        </div>
    )
}