import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: ""
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
    async function fetchData() {
        const id = params.id.toString();
        const response = await fetch(`http://localhost:5000/api/products/${params.id.toString()}`);
        if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
        const record = await response.json();
        if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
        }
        setForm(record);
    }
        fetchData();
        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
    return setForm((prev) => {
        return { ...prev, ...value };
    });
    }
    async function onSubmit(e) {
    e.preventDefault();
    const editedProduct = {
        name: form.name,
        description: form.description,
        price: form.price,
    };
        // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/api/product/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(editedProduct),
        headers: {
        'Content-Type': 'application/json'
        },
    });
        navigate("/");
    }
    // This following section will display the form that takes input from the user to update the data.
    return (
    <div>
        <h3>Update Record</h3>
        <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description: </label>
            <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
            />
        </div>
        <div className="form-group">
            <label htmlFor="price">Price: </label>
            <input
            type="price"
            className="form-control"
            id="price"
            value={form.price}
            onChange={(e) => updateForm({ price: e.target.value })}
            />
        </div>
        <br />
    
        <div className="form-group">
            <input
            type="submit"
            value="Update Product"
            className="btn btn-primary"
            />
        </div>
        </form>
    </div>
    );
}