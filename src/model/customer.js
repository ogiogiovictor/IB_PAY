const axios = require('axios');
const customer = require('../schema/customer'); //Schema for the Model Customer
const mongoose = require('mongoose');

async function findCustomer(dataArray){
    return await customer.findOne(dataArray);
}

async function getCustomer(account) {
     return await findCustomer({ accountNo: account });
 }



 async function getAllCustomers(skip, limit) {
    //Implementing Pagination with MongoDB
   // console.log(await customer.find({}, { '_id': 0, '__v': 0 }));
    return await customer.find({}, {'__v': 0 })
     .sort({ created_at: 1}) // Sort by flightNumber in ascending order 1 for ascending order -1 for descending order
     .skip(skip)
     .limit(limit);
  }

  async function getPendingCustomers(skip, limit) {
    return await customer.find({status: 'pending'}, {'__v': 0 })
      .sort({ created_at: 1}) // Sort by created_at in ascending order
      .skip(skip)
      .limit(limit);
  }


  async function getLatestCustomer() {
    const customerInfo = await customer.findOne().sort('-created_at'); //Sort by flightNumber in descending order
    return customerInfo ? customerInfo.created_at : 1;
}

async function createNewCustomer(customerdata) {
   // await customer.create(customerdata); //This is the same as below as find and update
    await customer.create(customerdata);
}

async function saveCustomer(id, status, userId) {
  
        const customerData = await customer.findById(new mongoose.Types.ObjectId(id));
    
        if (!customerData) {
            throw new Error('No matching record found');
        }
    
       // let user_ids = customer.user_id || [];
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
  



module.exports = { 
    getCustomer,
    getAllCustomers,
    getLatestCustomer,
    createNewCustomer,
    saveCustomer,
    getPendingCustomers
}