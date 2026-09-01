Home.jsx

import { useEffect, useState } from "react";
const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users");
                const data = await response.json();
              setEvents(data);
            } catch (error) {
                console.log(error);
            }
        };

        getEvents();
    });

    return (
        <div>
            {events.map((event) => (
                <div key={event.id}>
                    <h1>{event.Eventname}</h1>
                    <h2>{event.Category}</h2>
                    <h2>{event.Location}</h2>
                    <h2>{event.Date}</h2>
                    <h2>{event.Description}</h2>                   

                </div>
            ))}
        </div>
    );
};

export default Home;