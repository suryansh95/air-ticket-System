import React from "react";
import { useState } from "react";
import Map from "./Map";
import "../App.css";

export const FlightBookingFormComp = () => {
  const [boardingCity, setBoardingCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [dateOfTravel, setDateOfTravel] = useState("");
  const [flights, setFlights] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  const boardingCityOptions = ["New York", "London", "Tokyo"];

  const destinationCityOptions = ["Los Angeles", "Paris", "Seoul"];

  const handleBoardingCityChange = (e) => {
    setBoardingCity(e.target.value);
  };

  const handleDestinationCityChange = (e) => {
    setDestinationCity(e.target.value);
  };

  const handleDateOfTravelChange = (e) => {
    setDateOfTravel(e.target.value);
  };

  const handleSearch = () => {
    const searchResults = mockSearchFlights(
      boardingCity,
      destinationCity,
      dateOfTravel
    );
    setFlights(searchResults);
    setNoDataFound(searchResults.length === 0);
  };

  const mockSearchFlights = (boardingCity, destinationCity, dateOfTravel) => {
    const availableFlights = [
      {
        id: 1,
        boardingCity: "New York",
        destinationCity: "Los Angeles",
        name: 'IndiGo',
        date: "2023-07-10",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 0,
        timeTaken: "5h 30m",
        price: '4500',
        rating: "4.5/5"
      },
      {
        id: 2,
        boardingCity: "London",
        destinationCity: "Paris",
        name: 'IndiGo',
        date: "2023-07-10",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 1,
        timeTaken: "2h 15m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 3,
        boardingCity: "Tokyo",
        destinationCity: "Seoul",
        name: 'IndiGo',
        date: "2023-07-10",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 4,
        boardingCity: "New York",
        destinationCity: "Los Angeles",
        name: 'IndiGo',
        date: "2023-07-11",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 5,
        boardingCity: "New York",
        destinationCity: "Los Angeles",
        name: 'IndiGo',
        date: "2023-07-12",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 6,
        boardingCity: "New York",
        destinationCity: "Los Angeles",
        name: 'IndiGo',
        date: "2023-07-13",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 7,
        boardingCity: "New York",
        destinationCity: "Los Angeles",
        name: 'IndiGo',
        date: "2023-07-14",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 8,
        boardingCity: "London",
        destinationCity: "Paris",
        name: 'IndiGo',
        date: "2023-07-11",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 1,
        timeTaken: "2h 15m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 9,
        boardingCity: "London",
        destinationCity: "Paris",
        name: 'IndiGo',
        date: "2023-07-12",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 1,
        timeTaken: "2h 15m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 10,
        boardingCity: "London",
        destinationCity: "Paris",
        name: 'IndiGo',
        date: "2023-07-13",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 1,
        timeTaken: "2h 15m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 11,
        boardingCity: "London",
        destinationCity: "Paris",
        name: 'IndiGo',
        date: "2023-07-14",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 1,
        timeTaken: "2h 15m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 12,
        boardingCity: "Tokyo",
        destinationCity: "Seoul",
        name: 'IndiGo',
        date: "2023-07-11",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 13,
        boardingCity: "Tokyo",
        destinationCity: "Seoul",
        name: 'IndiGo',
        date: "2023-07-12",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 14,
        boardingCity: "Tokyo",
        destinationCity: "Seoul",
        name: 'IndiGo',
        date: "2023-07-13",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 15,
        boardingCity: "Tokyo",
        destinationCity: "Seoul",
        name: 'IndiGo',
        date: "2023-07-14",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 2,
        timeTaken: "3h 45m",
        price: '4500',
        rating: '4.5/5'
      },
      {
        id: 15,
        boardingCity: "New York",
        destinationCity: "Los Angeles",
        name: 'AIR india',
        date: "2023-07-10",
        logo: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=15",
        stops: 0,
        timeTaken: "5h 30m",
        price: '4500',
        rating: "4.5/5"
      },
    ];

    const filteredFlights = availableFlights.filter(
      (flight) =>
        flight.boardingCity.toLowerCase() === boardingCity.toLowerCase() &&
        flight.destinationCity.toLowerCase() ===
          destinationCity.toLowerCase() &&
        flight.date === dateOfTravel
    );

    return filteredFlights;
  };

  const getDirectionLinkbord = (boardingCity) => {
    // Construct the Google Maps URL with the boarding city name
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${boardingCity} airport`
    )}`;

    return googleMapsURL;
  };
  const getDirectionLinkdest = (boardingCity) => {
    // Construct the Google Maps URL with the boarding city name
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${destinationCity} airport`
    )}`;

    return googleMapsURL;
  };

  const myStyling = {
    display: "flex",
    justifyContent: "space-between",
    width: "450px",
    marginLeft: "20px",
  };

  const myDateStyling = {
    marginLeft: "20px",
  };

  const myListStyling = {
    margin: "0px 20px 10px 20px",
    backgroundColor: " #e7a61a",
    borderRadius: "5px",
    padding: "5px",
  };

  return (
    <div className="bg-white pb-5 w-[40%] rounded-3xl absolute bottom-50 shadow shadow-gray-300">
      <div className="p-5">
        <p className="font-bold">
          Book <span className="text-blue">Flights</span>
        </p>
      </div>
      <div className="book-flights" style={myStyling}>
        <input
          placeholder="Boarding City"
          type="text"
          id="boardingCity"
          // value={boardingCity}
          // onChange={handleBoardingCityChange}
          list="boardingCityOptions"
        />
        {/* <datalist id="boardingCityOptions">
          {boardingCityOptions.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist> */}

        <input
          placeholder="Destination City"
          type="text"
          id="destinationCity"
          // value={destinationCity}
          // onChange={handleDestinationCityChange}
          list="destinationCityOptions"
        />
        {/* <datalist id="destinationCityOptions">
          {destinationCityOptions.map((city) => (
            <option key={city} value={city} />
          ))}
        </datalist> */}
      </div>

      <div style={myDateStyling}>
        <label htmlFor="dateOfTravel">Date of Travel</label>
        <br />
        <input
          style={{
            marginTop: "10px",
          }}
          type="date"
          id="dateOfTravel"
          value={dateOfTravel}
          onChange={handleDateOfTravelChange}
          required
        />
      </div>
      <button
        style={{ margin: "0px 20px 10px", backgroundColor: "black" }}
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>

      {noDataFound ? (
        <div>No data found</div>
      ) : (
        flights.length > 0 && (
          <div>
            <h2 style={{ margin: "0px 20px 10px" }}>Available Flights:</h2>
            <ul>
              {flights.map((flight) => (
                <li key={flight.id}>
                  <div className="flight-card" style={myListStyling}>
                  <div>
                  <h3 className="flight-name"><strong>{flight.name}</strong></h3>
                    <img
                      src={flight.logo}
                      alt="Flight Logo"
                      className="flight-logo"
                    />

                  </div>
                    <div className="flight-details">
                      <p className="flight-route">
                      <strong>
                        {flight.boardingCity} to {flight.destinationCity}

                      </strong>
                      </p>
                      <div className="flight-info">
                        <p className="flight-time">
                      
                         <strong> Travel Time:</strong> {flight.timeTaken}
                         <br/>
                         <strong> Rating:</strong> {flight.rating}
                        </p>
                        <div className="flight-location">
                          <p className="location"><strong>airport direction</strong> </p>
                          <u>
                            
                          <a
                            href={getDirectionLinkbord(flight.boardingCity)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {flight.boardingCity}
                          </a>
                          </u>
                          <u>
                            
                          <a
                            href={getDirectionLinkdest(flight.boardingCity)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {flight.destinationCity}
                          </a>
                          </u>
                        </div>
                        <p className="flight-price"><strong> Price:</strong> ₹ {flight.price}</p>
                      </div>
                      <button className="booking-button">Book Now</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
      <Map boardingCity={boardingCity} destinationCity={destinationCity} />
    </div>
  );
};
