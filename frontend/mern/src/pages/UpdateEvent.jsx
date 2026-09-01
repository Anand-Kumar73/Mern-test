Update.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [Eventname, setEventname] = useState("");
    const [Category, setCetegory] = useState("");
    const [Location, setLocation] = useState("");
    const [Date, setDate] = useState("");
    const [Description, setDescription] = useState("");

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await axios.post(
                    `http://localhost:3000/events/${id}`
                );

                const data = await response.json();

                setName(data.Eventname);
                setRoll(data.Category);
                setBranch(data.Category);
                setContact(data.Date);
                setContact(data.Description);

            } catch (error) {
                console.log(error);
            }
        };

        getEvent();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `http://localhost:3000/users/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, roll, branch, contact })
                }
            );

            const data = await response.json();
            navigate("/Home");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={Eventname} placeholder="Enter event name " onEventChange={(e) => setEventname(e.target.value)} />
                <br />
                <input type="number" value={Category} placeholder="Enter event category" onChange={(e) => setCategory(e.target.value)} />
                <br />
                <input type="text" value={Location} placeholder="Enter location" onChange={(e) => setLocation(e.target.value)} />
                <br />
                <input type="text" value={Date} placeholder="Enter date" onChange={(e) => setDate(e.target.value)} />
                <input type="text" value={Description} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
                <br />
                <button type="submit"> Updat</button>
e Event
            </form>
        </div>
    );
};

export default UpdateEvent;