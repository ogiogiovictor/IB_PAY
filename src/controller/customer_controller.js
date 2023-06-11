const { addNewCustomer, getCustomer, saveCustomer } = require('../model/customer_model');
const { sendSuccess, sendError, sendCreated } = require('../../services/utils');

async function newCustomer(req, res){
    const customerData = req.body;

    if(!customerData.customer_type){
        sendError(res, 400, "Please enter a valid customer type");
    }

    await addNewCustomer(customerData);
    sendCreated(res, 201, "Customer Successfully Created");
}


async function getCapturedCustomers(req, res){ //getCapturedCustomers
  
    try {
       //const businessHub = req.params.buid;
       //const filters = req.query;
    //    const { business_hub, status } = req.query;
    //    const filters = { business_hub, status };
        const { status, ...filters } = req.query;
       
        const customers = await getCustomer(filters, status);
        sendSuccess(res, customers, "Pending Customers Fetched Successfully");
      } catch (error) {
        sendError(res, 500, error);
      }

}

async function updateCustomer(req, res) {
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
    newCustomer,
    getCapturedCustomers,
    updateCustomer
}