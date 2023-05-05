import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/item/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data.image.data.attributes.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.name}</span>
                <span className="price">{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
