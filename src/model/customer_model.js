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

async function saveCustomer(id, status, userId) {

    const customerData = await customer.findById(new mongoose.Types.ObjectId(id));
    if (!customerData) {
        throw new Error('No matching record found');
    }
    let user_ids = customerData.user_id || [];
    if (!user_ids.includes(Number(userId))) {
        user_ids.push(Number(userId));
      }

    await customer.updateOne({ _id: id }, {
        status: status,
        user_id: user_ids
      }, { new: true });

   return customer;

}


async function myapprovalcusotomer(id){

    try {
     
        const customers = await customer.find({ user_id: { $in: [id] } });
        // Perform any operations with the fetched customers
        return customers;
        // ...
      } catch (error) {
        // Handle any errors that occur during the database query
        console.error(error);
        return error;
        
      }

}



module.exports = {
    addNewCustomer,
    getCustomer,
    saveCustomer,
    myapprovalcusotomer
}

