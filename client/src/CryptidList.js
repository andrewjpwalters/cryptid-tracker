import { useEffect } from 'react';
import { useState } from 'react';
import Cryptid from './Cryptid';

function CryptidList({ onAddPost }) {

    const [cryptids, setCryptids] = useState([])
    const [formData, setFormData] = useState({
        user_id: "",
        cryptid_id: "",
        location_id: "",
        comment: ""
    })

    useEffect(() => {
        fetch("/cryptids")
            .then((r) => r.json())
            .then(setCryptids)
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                onAddPost(data);
                setFormData({
                    user_id: "",
                    cryptid_id: "",
                    location_id: "",
                    comment: ""
                })
                console.log("Success", data);
            })
            .catch((error) => {
                console.error("Error", error);
            })
    }

    function handleChange(event) {
        const key = event.target.id
        const value = event.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    return (
        <>
            <h1>Hello from Cryptid</h1>
            <h3>Submit Sighting</h3>
            <form onSubmit={handleSubmit}>
                <select />
                <select />
                <input
                    type="text"
                    id="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Comment..."
                />
                <button type="submit">Submit</button>
            </form>
            {cryptids.map((cryptid) => (
                <Cryptid
                    key={cryptid.id}
                    id={cryptid.id}
                    name={cryptid.name}
                    img_url={cryptid.image_url}
                    description={cryptid.description}
                />
            ))}
        </>
    )
}

export default CryptidList;