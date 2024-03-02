import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../CreateProduct/CreateProduct.css';

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        email: ""
    });

const navigate = useNavigate();

// These methods will update the state properties.
function updateForm(value) {
    return setForm((prev) => {
        return { ...prev, ...value };
    });
}

// This function will handle the submission.
async function onSubmit(e) {
    e.preventDefault();
    // When a post request is sent to the create url, we add a new record to the database.
    const newUser = { ...form };
    await fetch("http://localhost:5000/api/customer", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
    },
        body: JSON.stringify(newUser),
    }).catch((error) => {
        window.alert(error);
        return;
    });
    setForm({ name: "", email: "" });
    navigate("/");
}

  // This following section will display the form that takes the input from the user.
return (
    <div>
        <h3>Create New Product</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <br />
            <input
                type="text"
                className="form-control"
                id="name"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="emial">Email</label>
            <br />
            <input
                type="text"
                className="form-control"
                id="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
            />
        </div>
        
        <div className="form-group">
            <input
                type="submit"
                value="Create User"
                className="btn btn-primary"
            />
        </div>
    </form>
    </div>
    );
}
