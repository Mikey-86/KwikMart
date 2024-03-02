const mongoose = require('mongoose');
const { connectDb } = require('../config/db');
require('dotenv').config();
const productModel = require('../models/product');
const {faker} = require('@faker-js/faker');

connectDb();

//---------------------------------------------------
//Products
const generateProducts = (num) => {
    const products = [];

    for(let i =0; i< num; i++){
        const name = faker.commerce.productName();
        const description = faker.commerce.productDescription();
        const price = faker.commerce.price();

        products.push({
            name,
            description,
            price
        })
    }

    return products;
};

//Calling method to generate products
const products = generateProducts(15);


    productModel.insertMany(products)
    .then(docs => console.log(`${docs.length} Products have been inserted into the database.`))
    .catch(err => {
        console.error(err);
        console.error(`${err.writeErrors?.length ?? 0} errors occurred during the insertMany operation.`);
    });

