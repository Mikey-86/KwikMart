import React, { useState } from "react";
import { useNavigate } from "react-router";
import './CreateProduct.css';

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: 0,
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
    const newProduct = { ...form };
    await fetch("http://localhost:5000/api/product", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
    },
        body: JSON.stringify(newProduct),
    }).catch((error) => {
        window.alert(error);
        return;
    });
    setForm({ name: "", description: "", price: 0 });
    navigate("/");
}

  // This following section will display the form that takes the input from the user.
return (
    <div>
        <h3>Create New Product</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
                type="text"
                className="form-control"
                id="description"
                value={form.description}
                onChange={(e) => updateForm({ description: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
                type="price"
                className="form-control"
                id="price"
                value={form.price}
                onChange={(e) => updateForm({ price: e.target.value })}
            />
        </div>
        <div className="form-group">
            <input
                type="submit"
                value="Create Product"
                className="btn btn-primary"
            />
        </div>
    </form>
    </div>
    );
}
