import "./StatisticsPage.scss"
import {CoverImage} from "../components/CoverImage";
import {Footer} from "../components/Footer";
import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {SectionHeading} from "../components/SectionHeading";
import {Bar, Line} from "react-chartjs-2";
import {projectFirestore} from "../firebase/config";
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {SectionSubHeading} from "../components/SectionSubHeading";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function StatisticsPage() {

    const [statics, setStatics] = useState([
        {"January": 0},
        {"February": 0},
        {"March": 0},
        {"April": 0},
        {"May": 0},
        {"June": 0},
        {"July": 0},
        {"August": 0},
        {"September": 0},
        {"October": 0},
        {"November": 0},
        {"December": 0}
    ]);
    const [bloodUnits, setBloodUnits] = useState([
        {"A+": 0},
        {"A-": 0},
        {"B+": 0},
        {"B-": 0},
        {"O+": 0},
        {"O-": 0},
        {"AB+": 0},
        {"AB-": 0},
    ]);

    let forecastedBloodAmountDocRef = projectFirestore.collection("statistics").doc("forecastedBloodAmount");

    forecastedBloodAmountDocRef.get().then((doc) => {
        if (doc.exists) {
            const forecastedAmountEachMonth = doc.data();
            setStatics([
                {"January": forecastedAmountEachMonth?.January},
                {"February": forecastedAmountEachMonth?.February},
                {"March": forecastedAmountEachMonth?.March},
                {"April": forecastedAmountEachMonth?.April},
                {"May": forecastedAmountEachMonth?.May},
                {"June": forecastedAmountEachMonth?.June},
                {"July": forecastedAmountEachMonth?.July},
                {"August": forecastedAmountEachMonth?.August},
                {"September": forecastedAmountEachMonth?.September},
                {"October": forecastedAmountEachMonth?.October},
                {"November": forecastedAmountEachMonth?.November},
                {"December": forecastedAmountEachMonth?.December}
            ])

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    const forecastedDataLabel = statics.map(obj => Object.keys(obj)[0]);
    const forecastedData = {
        labels: forecastedDataLabel,
        datasets: [
            {
                label: 'Blood amount',
                data: statics.map(obj => Object.values(obj)[0]),
                borderColor: 'rgb(201, 26, 33)',
                backgroundColor: 'rgba(201, 26, 33, 0.5)',
            },
        ],
    };

    useEffect(() => {
        const bloodCollectionDocRef = projectFirestore.collection('statistics').doc('bloodUnits');

        bloodCollectionDocRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const bloodUnitEachType = doc.data();
                    setBloodUnits([
                        {'A+': bloodUnitEachType?.aPositive},
                        {'A-': bloodUnitEachType?.aNegative},
                        {'B+': bloodUnitEachType?.bPositive},
                        {'B-': bloodUnitEachType?.bNegative},
                        {'O+': bloodUnitEachType?.oPositive},
                        {'O-': bloodUnitEachType?.oNegative},
                        {'AB+': bloodUnitEachType?.abPositive},
                        {'AB-': bloodUnitEachType?.abNegative},
                    ]);
                } else {
                    console.log('No such document!');
                }
            })
            .catch((error) => {
                console.log('Error getting document:', error);
            });
    }, []);

    const bloodUnitsDataLabel = bloodUnits.map((obj) => Object.keys(obj)[0]);
    const bloodUnitsData = {
        labels: bloodUnitsDataLabel,
        datasets: [
            {
                label: 'Blood amount',
                data: bloodUnits.map((obj) => Object.values(obj)[0]),
                borderColor: 'rgb(201, 26, 33)',
                backgroundColor: 'rgba(201, 26, 33, 0.5)',
            },
        ],
    };

    useEffect(() => {
        console.log(bloodUnitsData)
    }, [])


    return (
        <div className="page statistics-page">
            <CoverImage imgPath={"/assets/images/statistics/statistics-cover-image.png"}
                        heading={"BLOOD TRANSFUSION STATISTICS"}
                        headingDescription={"Blood bank statistics refer to data related to the collection, " +
                            "processing, and distribution of blood and blood products at blood banks and other " +
                            "organizations that handle blood donations."}/>

            <div className={"bg-moonlight"}>
                <Container className={"py-5"}>
                    <div className="statistics-heading">
                        <SectionHeading title={"Forecasted Report"}/>
                    </div>
                    <div className={"mt-5"}>
                        <Line data={forecastedData}/>
                    </div>
                    <div className={"mt-5 mb-5 statistics-heading"}>
                        <SectionSubHeading title={"Blood Collection"}/>
                    </div>
                    <Row className={"mb-5"}>
                        <Col md={6}>
                            <Bar data={bloodUnitsData}/>
                        </Col>
                        <Col md={6} className={"blood-collection-description"}>
                            This chart shows the amount of blood collected for each blood type. It can be used to
                            determine the relative availability of different blood types and to plan for blood
                            transfusions or other medical procedures that require specific blood types.
                        </Col>
                    </Row>
                </Container>
            </div>


            <Footer bgColor={"pearWhite"}/>
        </div>
    )
}