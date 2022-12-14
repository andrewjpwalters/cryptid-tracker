import { useState } from 'react';

function Cryptid({ onAddPost }) {

    const [formData, setFormData] = useState({
        user_id: "",
        cryptid_id: "",
        location_id: "",
        comment: ""
    })

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
        </>
    )
}

export default Cryptid;