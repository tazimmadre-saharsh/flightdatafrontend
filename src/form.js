import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {useNavigate} from "react-router-dom"

import "./App.css"

export default function Form(){
    

    const [error, setError] = useState();

    const [loading, setLoading] = useState();

    const navigate = useNavigate();
//*************************************************************** */
    const [flightNumber, setFlightNumber] = useState();
    const [airline, setAirline] = useState();
    const [destination, setDestination] = useState();
    const [gateNumber, setGateNumber] = useState();
    const [actualTimeOfDeparture, setactualTimeOfDeparture] = useState();
    const [scheduledTimeOfDeparture, setscheduledTimeOfDeparture] = useState();
    const [estimatedTimeOfDeparture, setestimatedTimeOfDeparture] = useState();
    const [status, setStatus] = useState();

    const submitData = async()=>{
        try{
            const data = {
                flightNumber, airline, destination, gateNumber, actualTimeOfDeparture, scheduledTimeOfDeparture, estimatedTimeOfDeparture, status
            }
            setLoading(1);
            console.log("Data:", data);
            axios.post("https://tame-ruby-zebra-ring.cyclic.app/flightdataupload", data).then(()=>{
                setError("Submitted Successfully");
            })

          
        } catch(err){
            console.log(err);
            toast.info('Loading', {position:"bottom-center"});
        }
    }

        return(
            <body>
                
                <h1 style={{ textAlign : "center", fontFamily: "Arial, Helvetica, sans-serif"}}>Enter Flight Details</h1>
                <div style={{marginLeft:"35%"}}>
                <form style={{width:"fit-content", height:"fit-content"}}>
                <div>  
                
                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif", margin:"5px"}}>Flight Number:</label> <br/>
                <input onChange={(e)=>{
                    setFlightNumber(e.target.value)
                }}/> <br/><br/>
                
                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif;", margin:"5px"}}>Airline:</label><br></br>

                <input onChange={(e)=>{
                    setAirline(e.target.value);
                }}/> <br/><br/>

                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif;", margin:"5px"}}>Destination:</label><br></br>

                <input onChange={(e)=>{
                    setDestination(e.target.value);
                }}/> <br/><br/>

                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif;", margin:"5px"}}>Gate Number:</label><br></br>

                <input onChange={(e)=>{
                    setGateNumber(e.target.value);
                }}/> <br/><br/>

                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif;", margin:"5px"}}>Actual Time of Departure:</label><br></br>

                <input type={"time"} onChange={(e)=>{
                    setactualTimeOfDeparture(e.target.value);
                }}/> <br/><br/>

                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif;", margin:"5px"}}>Scheduled time of departure:</label><br></br>

                <input type={"time"} onChange={(e)=>{
                    setscheduledTimeOfDeparture(e.target.value);console.log(e.target.value)
                }}/> <br/><br/>

                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif;", margin:"5px"}}>Estimated time of Departure:</label><br></br>

                <input type={"time"} onChange={(e)=>{
                    setestimatedTimeOfDeparture(e.target.value);
                }}/> <br/><br/>

                <label style={{fontSize: "large", fontFamily:"Arial, Helvetica, sans-serif;", margin:"5px"}}>Status:</label><br></br>

                <select placeholder="Select">
                    <option value={"Departed"}>Departed</option>
                    <option value={"Delayed"}>Delayed</option>
                    <option value={"On Time"}>On Time</option>
                    <option value={"Cancelled"}>Cancelled</option>
                </select><br/><br/>
                {/* <input type={""} onChange={(e)=>{
                    setStatus(e.target.value);
                }}/> <br/><br/> */}

                
                <button onClick={()=>{
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