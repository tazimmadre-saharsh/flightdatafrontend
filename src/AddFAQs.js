import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "./App.css"
import { SECRETS } from './constants';

export default function AddFAQs () {

    const [error, setError] = useState();

    const [loading, setLoading] = useState();

    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    const submitData = async () => {
        try {
            const data = {
                question, answer
            }
            setLoading(1);
            console.log("Data:", data);
            axios.post(`${SECRETS.url}/addFAQ`, data).then(() => {
                setError("Submitted Successfully");
            })


        } catch (err) {
            console.log(err);
            toast.info('Loading', { position: "bottom-center" });
        }
    }


    return (
        <div>
            <body>

                <h1 style={{ textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif" }}>Enter new FAQ</h1>
                <div style={{ marginLeft: "35%" }}>
                    <form style={{ width: "fit-content", height: "fit-content" }}>
                        <div>

                            <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif", margin: "5px" }}>Question:</label> <br />
                            <input onChange={(e) => {
                                setQuestion(e.target.value)
                            }} /> <br /><br />

                            <label style={{ fontSize: "large", fontFamily: "Arial, Helvetica, sans-serif;", margin: "5px" }}>Answer:</label><br></br>

                            <input onChange={(e) => {
                                setAnswer(e.target.value);
                            }} /> <br /><br />




                            <button onClick={() => {
                                submitData();
                            }} disabled={loading}>Submit</button>

                            {loading && loading === 1 && <>
                                Please wait loading
                            </>}
                            {loading && loading === 0 && <>
                                Done uploading
                            </>}

                            {error && <>
                                {error}
                            </>}

                        </div>
                    </form>
                </div>
            </body>
        </div>
    )
}