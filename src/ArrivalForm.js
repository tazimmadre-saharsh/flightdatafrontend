import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"

import "./App.css"
import { SECRETS } from './constants';

export default function ArrivalForm () {


    const [error, setError] = useState();

    const [loading, setLoading] = useState();

    const navigate = useNavigate();
    //*************************************************************** */
    const [flightNumber, setFlightNumber] = useState();
    const [airline, setAirline] = useState();
    const [origin, setOrigin] = useState();
    const [actualTimeOfArrival, setactualTimeOfArrival] = useState();
    const [scheduledTimeOfArrival, setscheduledTimeOfArrival] = useState();
    const [estimatedTimeOfArrival, setestimatedTimeOfArrival] = useState();
    const [status, setStatus] = useState();

    const submitData = async () => {
        try {
            const data = {
                flightNumber, airline, origin, actualTimeOfArrival, scheduledTimeOfArrival, estimatedTimeOfArrival, status
            }
            setLoading(1);
            console.log("Data:", data);
            axios.post(`${SECRETS.url}/arrivaldataupload`, data).then(() => {
                setError("Submitted Successfully");
            })


        } catch (err) {
            console.log(err);
            toast.info('Loading', { position: "bottom-center" });
        }
    }

    return (
        <body>

            <h1 style={{ textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif" }}>Enter Flight Details</h1>
            <div style={{ marginLeft: "35%" }}>
                <form style={{ width: "fit-content", height: "fit-content" }}>
                    <div>

                        <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif", margin: "5px" }}>Flight Number:</label> <br />
                        <input onChange={(e) => {
                            setFlightNumber(e.target.value)
                        }} /> <br /><br />

                        <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif;", margin: "5px" }}>Airline:</label><br></br>

                        <input onChange={(e) => {
                            setAirline(e.target.value);
                        }} /> <br /><br />

                        <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif;", margin: "5px" }}>Origin:</label><br></br>

                        <input onChange={(e) => {
                            setOrigin(e.target.value);
                        }} /> <br /><br />


                        <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif;", margin: "5px" }}>Actual Time of Arrival:</label><br></br>

                        <input type={"time"} onChange={(e) => {
                            setactualTimeOfArrival(e.target.value);
                        }} /> <br /><br />

                        <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif;", margin: "5px" }}>Scheduled time of Arrival:</label><br></br>

                        <input type={"time"} onChange={(e) => {
                            setscheduledTimeOfArrival(e.target.value); console.log(e.target.value)
                        }} /> <br /><br />

                        <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif;", margin: "5px" }}>Estimated time of Arrival:</label><br></br>

                        <input type={"time"} onChange={(e) => {
                            setestimatedTimeOfArrival(e.target.value);
                        }} /> <br /><br />

                        <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif;", margin: "5px" }}>Status:</label><br></br>

                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Departed">Departed</option>
                            <option value="Delayed">Delayed</option>
                            <option value="On Time">On Time</option>
                            <option value="Cancelled">Cancelled</option>
                        </select><br></br><br></br>


                        <button onClick={() => {
                            submitData();
                        }} disabled={loading}>Submit</button>

                        {loading && loading == 1 && <>
                            Please wait loading
                        </>}
                        {loading && loading == 0 && <>
                            Done uploading
                        </>}

                        {error && <>
                            {error}
                        </>}

                    </div>
                </form>
            </div>
        </body>
    );

}