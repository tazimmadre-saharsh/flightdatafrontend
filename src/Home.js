function Home(){
    return(
        <div>
            <div>
            <a href="/addDeparture" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
          Add Departure
        </a>
        <br></br>
        <a href="/departureData" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
          View Departures
        </a><br></br>
        <a href="/addArrival" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
          Add Arrival
        </a><br></br>
        <a href="/arrivalData" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
          View Arrivals
        </a><br></br>
        <a href="/addFAQ" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
          Add FAQ
        </a><br></br>
        <a href="/FAQs" rel="noopener noreferrer" style={{textDecoration:"none", color:"black"}}>
          View FAQs
        </a>
            </div>
        </div>
    )
}

export default Home