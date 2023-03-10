import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function ArrivalData() {
  const navigate = useNavigate();

  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4000/getarrivalData")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (flightNumber) => {
    axios
      .delete(`http://localhost:4000/deleteArrivaldata/${flightNumber}`)
      .then((response) => {
        console.log(response.data);
        setData(data.filter((item) => item.flightNumber !== flightNumber));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (flightNumber) => {
    navigate(`/editArrivaldata/${flightNumber}`);
  };

  return (
    <>
      <body>
        <h1>Flight Details</h1>

        <a
          href="/addArrival"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          Add Arrival
        </a>
        <br></br>
        <br></br>

        <table style={{ border: "3px solid rgb(0, 0, 0)" }}>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Actual time of Arrival</th>
            <th>Scheduled Time of Arrival</th>
            <th>Estimated time of Arrival</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
          {data &&
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value["flightNumber"]}</td>
                  <td>{value["airline"]}</td>
                  <td>{value["origin"]}</td>
                  <td>{value["actualTimeOfArrival"]}</td>
                  <td>{value["scheduledTimeOfArrival"]}</td>
                  <td>{value["estimatedTimeOfArrival"]}</td>
                  <td>{value["status"]}</td>
                  <td>
                    <button onClick={() => handleDelete(value.flightNumber)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(value.flightNumber)}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      </body>
    </>
  );
}
