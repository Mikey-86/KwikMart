import React, { useState } from "react";
import { useNavigate } from "react-router";
import './CreateProduct.css';

export default function Create() {
    const [form, setForm] = useState({
        paid: Boolean,
        customerId: "",
        products: [],
        total: 0
        
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
    const newOrder = { ...form };
    await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
    },
        body: JSON.stringify(newOrder),
    }).catch((error) => {
        window.alert(error);
        return;
    });
    setForm({ paid: false, customerId: "", products:[], total: 0 });
    navigate("/");
}

  // This following section will display the form that takes the input from the user.
return (
    <div>
        <h3>Create New Order</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="name">Paid</label>
            <input
                type="checkbox"
                className="form-control"
                id="paid"
                value={form.paid}
                onChange={(e) => updateForm({ paid: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="description">CustomerId</label>
            <input
                type="text"
                className="form-control"
                id="customerId"
                value={form.customerId}
                onChange={(e) => updateForm({ customerId: e.target.value })}
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
