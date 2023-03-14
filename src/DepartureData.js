import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'
import { SECRETS } from './constants';

export default function DepartureData () {


    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`${SECRETS.url}/getdepartureData`).then((response) => {
            console.log(response.data)
            setData(response.data)
        }).catch(error => {
            console.log(error)
        });
    }, []);

    return (
        <>
            <body >

                <h1>Flight Details</h1>


                <a href="/addDeparture" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                    Add Departure
                </a>
                <br></br><br></br>

                <table style={{ border: "3px solid rgb(0, 0, 0)" }}>
                    <tr>
                        <th>Flight Number</th>
                        <th>Airline</th>
                        <th>Destination</th>
                        <th>Gate Number</th>
                        <th>Actual time of Departure</th>
                        <th>Scheduled Time of Departure</th>
                        <th>Estimated time of Departure</th>
                        <th>Status</th>

                    </tr>
                    {data && data.map((value, key) => {
                        return (
                            <tr>
                                <td>{value["flightNumber"]}</td>
                                <td>{value["airline"]}</td>
                                <td>{value["destination"]}</td>
                                <td>{value["gateNumber"]}</td>
                                <td>{value["actualTimeOfDeparture"]}</td>
                                <td>{value["scheduledTimeOfDeparture"]}</td>
                                <td>{value["estimatedTimeOfDeparture"]}</td>
                                <td>{value["status"]}</td>

                            </tr>
                        )
                    })}

                </table>



            </body>
        </>
    );
}