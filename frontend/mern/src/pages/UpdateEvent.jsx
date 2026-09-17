import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEvent = () => {
    const navigate = useNavigate();

    const [Eventname, setEventname] = useState("");
    const [Category, setCategory] = useState("");
    const [Location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [Description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/events", {
                id: Date.now(),
                Eventname: Eventname,
                Category: Category,
                Location: Location,
                Date: date,
                Description: Description
            });

            navigate("/Home");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Add New Event</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={Eventname} 
                    placeholder="Enter event name" 
                    onChange={(e) => setEventname(e.target.value)} 
                />
                <br />
                <input 
                    type="text" 
                    value={Category} 
                    placeholder="Enter event category" 
                    onChange={(e) => setCategory(e.target.value)} 
                />
                <br />
                <input 
                    type="text" 
                    value={Location} 
                    placeholder="Enter location" 
                    onChange={(e) => setLocation(e.target.value)} 
                />
                <br />
                <input 
                    type="text" 
                    value={date}
                    placeholder="Enter date" 
                    onChange={(e) => setDate(e.target.value)} 
                />
                <br />
                <input 
                    type="text" 
                    value={Description} 
                    placeholder="Enter description" 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <br />
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default AddEvent;
