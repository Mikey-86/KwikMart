import React, { Component } from 'react';
import ProductRow from './../ProductRow/ProductRow';
import Landing from '../Landing/Landing';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        }
        
    }

    componentDidMount() {
        var url = "http://localhost:5000/api/products";
        fetch(url)
        .then(response => {
            return response.json();
        }).then(i => {
            this.setState({products: i});
            console.log("state", this.state.products);
        })
        .catch(error => console.log(error))
    }

    handleClick = index => {

    }

    render() {
        return (
            <div className='container main-content'>
                {
                    this.state.products.map(product => {
                        return <ProductRow key={product._id} name={product.name} description={product.description} price={product.price} onClick= {<Landing />}/>
                    })
                }
                
            </div>
        );
    }
}

export default ProductList;