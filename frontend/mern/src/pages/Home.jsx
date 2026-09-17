import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events");

        setEvents(response.data);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    getEvents();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;

    setSearchQuery(query);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const lowerQuery = searchQuery.toLowerCase();

      const results = events.filter(
        (event) =>
          event.Eventname.toLowerCase().includes(lowerQuery) ||
          event.Category.toLowerCase().includes(lowerQuery) ||
          event.Location.toLowerCase().includes(lowerQuery),
      );

      setFilteredEvents(results);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [events, searchQuery]);

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div>
      <h1>Events</h1>

      <button onClick={() => navigate("/add-event")}>Add New Event</button>

      <br/>
      <br/>

      <input
        type="text"
        placeholder="Search by event name, category, or location..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <br />
     

      {filteredEvents.map((event) => (
        <div
          key={event.id}
          onClick={() => handleEventClick(event.id)}
          style={{ cursor: "pointer" }}
        >
          <h2>{event.Eventname}</h2>

          <h3>Category: {event.Category}</h3>

          <h3>Location: {event.Location}</h3>

          <h3>Date: {event.Date}</h3>

          <p>Description: {event.Description}</p>

         
        </div>
      ))}
    </div>
  );
};

export default Home;
