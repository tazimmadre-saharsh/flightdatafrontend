import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import './App.css'

export default function FAQs(){

    const navigate = useNavigate();

    const [data, setData] = useState();
    useEffect(() => {
        axios.get('http://localhost:4000/getFAQs').then((response)=>{
            console.log(response.data)
            setData(response.data)
        }).catch(error => {
            console.log(error)
          });
      }, []);

    const next=()=>{

    }

    return(
        <div>
            <body >

<h1>FAQs</h1>

<a href="/addFAQ" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
          Add FAQ
        </a><br></br><br></br>

<table style={{border: "3px solid rgb(0, 0, 0)"}}>
    <tr>
        <th>Question</th>
        <th>Answer</th>
    </tr>
    {data && data.map((value, key)=>{
        return(
            <tr>
            <td>{value["question"]}</td>
            <td>{value["answer"]}</td>
        </tr>
        )
    })}
        
</table>



</body>
        </div>
    )
}