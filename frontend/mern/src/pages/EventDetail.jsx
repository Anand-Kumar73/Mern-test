import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getEventDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/events/${id}`);
                const data = response.data;
                setEvent(data);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching event:", error);
                setLoading(false);
            }
        };

        getEventDetail();
    }, [id]);

    if (loading) {
        return <div><h2>Loading...</h2></div>;
    }

    if (!event) {
        return <div><h2>Event not found</h2></div>;
    }

    return (
        <div>
            <button onClick={() => navigate("/Home")}>Back</button>
            <h1>{event.Eventname}</h1>
            <p><strong>Category:</strong> {event.Category}</p>
            <p><strong>Location:</strong> {event.Location}</p>
            <p><strong>Date:</strong> {event.Date}</p>
            <p><strong>Description:</strong> {event.Description}</p>
        </div>
    );
};

export default EventDetail;
