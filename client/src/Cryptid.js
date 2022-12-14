import { useState } from 'react';

function Cryptid() {

    const [formData, setFormData] = useState({
        user_id: "",
        cryptid_id: "",
        location_id: "",
        comment: ""
    })

    return (
        <h1>Hello from Cryptid</h1>


    )
}

export default Cryptid;