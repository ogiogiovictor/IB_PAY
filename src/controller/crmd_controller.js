const { getCustomer, getAllCustomers, getLatestCustomer, saveCustomer, createNewCustomer,
    getPendingCustomers } = require('../model/crmd_model');

const { getPagination } = require('../../services/paginate');
const { sendSuccess, sendError, sendCreated } = require('../../services/utils');

function addCustomer(req, res){
    const customerData = req.body;

    if(!customerData.accountNo){
        sendError(res, 400, "Please enter a valid account number");
    }

    customerData.created_at = new Date(customerData.created_at);
    if(isNaN(customerData.created_at)) {
        sendError(res, 400, "Invalid Date");
    }

    createNewCustomer(customerData);
    sendCreated(res, 201, "Customer Successfully Created");

}

async function allCustomer(req, res){
    const {skip, limit } = getPagination(req.query);
    sendSuccess(res, 200, await getPendingCustomers(skip, limit));
}

 function approveCustomer(req, res){

    const customerData = req.body;
    if(!customerData.id || !customerData.status || !customerData.userid){
            sendError(res, 400, "Parameters to process page missing");
     }
   
     try{
        const response =  saveCustomer(customerData.id, customerData.status, customerData.userid);
        sendSuccess(res, 200, response);
       
     }catch(e){
        sendError(res, 400, e.message);
    }
   
}




module.exports = {
    addCustomer,
    allCustomer,
    approveCustomer,
    
}


