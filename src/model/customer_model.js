const mongoose = require('mongoose');
const customer = require('../schema/customer'); //Schema for the Model Customer

async function addNewCustomer(customerData){
    await customer.create(customerData);
}

async function getCustomer(filters, status) {
    //return await customer.find(filter, {'status': 'pending' }); //.lean();
    const query = { ...filters, status: status || 'pending' };
     return await customer.find(query);
    //const customers = await customer.find(filter).lean();
    ;
}

module.exports = {
    addNewCustomer,
    getCustomer
}

