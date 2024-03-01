import React, { useEffect, useState } from "react";

const Products = () => {
    const [ featuredItems, setFeaturedItems ] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setFeaturedItems(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        window.scrollTo(0, 0)
    }, [])

    return ( 
        
            <h2>testing testing</h2>
        
    );
}
 
export default Products;