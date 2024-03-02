import React from 'react';
import sampleImage from "../../Asset/img/Kwik.png"
import tshirt1 from "../../Asset/img/tshirt1.jpg"
import tshirt2 from "../../Asset/img/tshirt2.png"
import tshirt3 from "../../Asset/img/tshirt3.jpg"
import tshirt4 from "../../Asset/img/tshirt4.png"
import tshirt5 from "../../Asset/img/tshirt5.png"
import Landing from '../Landing/Landing';
import { Button } from '@mui/material';

const ProductRow = ({key, name, description, price}) => {

    //Array holding different images
    let imgGallery = [
        {
            item: tshirt1,
            value: 1
        },
        {
            item: tshirt2,
            value: 2
        },
        {
            item: tshirt3,
            value: 3
        },
        {
            item: tshirt4,
            value: 4
        },
        {
            item: tshirt5,
            value: 5
        }
    ]
    //Getting random image to display
    var randomObject = imgGallery[Math.floor(Math.random() * imgGallery.length)];

    return (
    <div className="row product">
        <div className="col-md-2">
        <img src={randomObject.item} alt={randomObject.value} height="150" />
        </div>
        <div className="col-md-8 product-detail">
        <h2>{name}</h2>
        <p>{description}</p>
        </div>
        <div className="col-md-2 product-price">
        <p>R {price}</p>
        <div>
            <Button content='View Product' title='View Product' onClick={Landing} />
        </div>
        </div>
    </div>
    );
}

export default ProductRow;