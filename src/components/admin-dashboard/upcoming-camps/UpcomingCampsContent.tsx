import {SectionSubHeading} from "../../SectionSubHeading";
import {Table} from "react-bootstrap";
import "./UpcomingCampsContent.scss"

export function UpcomingCampsContent() {

    return (
        <div className={"upcoming-camps-content dashboard-tab-content"}>

            <div className="dashboard-section-sub-title mb-4">
                <SectionSubHeading title={"Upcoming Blood Donation Camps"}/>
            </div>

            <div className={"upcoming-camps-table"}>
                <Table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Date</th>
                        <th>District</th>
                        <th>Place</th>
                        <th className={"expected-blood-units"}>Expected amount of blood units</th>
                        <th>Staff</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>2023.03.10</td>
                        <td>Colombo</td>
                        <td>Bambalapitiya - GP Square</td>
                        <td>1200</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2023.03.15</td>
                        <td>Galle</td>
                        <td>Richmond College</td>
                        <td>900</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>2023.03.21</td>
                        <td>Kalutara</td>
                        <td>YMBA Auditorium</td>
                        <td>1100</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>2023.03.30</td>
                        <td>Kandy</td>
                        <td>Trinity College</td>
                        <td>1200</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>2023.03.30</td>
                        <td>Kandy</td>
                        <td>Trinity College</td>
                        <td>1200</td>
                        <td>20</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}