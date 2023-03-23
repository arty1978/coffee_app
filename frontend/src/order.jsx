import React, { useState } from "react";

function OrderForm() {
    const [order, setOrder] = useState("");
    const [ordersList, setOrdersList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const orderData = {
                email: order, // replace with the actual email
                orderTime: new Date().getTime(),
                orderStatus: 'ordered',
            };
            // make a POST request to the API to create a new order
            const response = await fetch("http://localhost:3000/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });
            if (response.ok) {
                // if the request was successful, add the order to the ordersList
                const newOrder = await response.json();
                console.log(newOrder, 'response');
                setOrdersList([...ordersList, newOrder]);
                setOrder("");
                console.log([...ordersList, newOrder]);
            } else {
                console.log("Failed to create order");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setOrder(e.target.value);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <label style={{ marginBottom: "10px" }}>
                    Order:
                    <input
                        type="text"
                        value={order}
                        onChange={handleChange}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        borderRadius: "5px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Submit
                </button>
            </form>
            <ul style={{ marginTop: "20px" }}>
                {ordersList.map((order, index) => (
                    <li key={index}>{order.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default OrderForm;
