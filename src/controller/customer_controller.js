const { addNewCustomer, getCustomer, saveCustomer, myapprovalcusotomer } = require('../model/customer_model');
const { myapprovalcrmd } = require('../model/crmd_model');
const { sendSuccess, sendError, sendCreated } = require('../../services/utils');

async function newCustomer(req, res){
    const customerData = req.body;

    if(!customerData.customer_type){
        sendError(res, 400, "Please enter a valid customer type");
    }

    try {

        await addNewCustomer(customerData);
        sendCreated(res, 201, customerData);
        
    } catch (error) {
        sendError(res, 400, error);
    }

   
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


async function getApprovedCustomers(req, res){

    const userid = req.params.user_id;
   // const buid = req.params.buid
    const customer = await myapprovalcusotomer(userid);
    const crmd = await myapprovalcrmd(userid);

    const customerObject = {
        "new_customers" : customer,
        "updated_customer": crmd,
    };

    if(customer){
        sendSuccess(res, 200, customerObject);
    }else {
        sendError(res, 400, "No Customer Record Found");
    }
    //const userid = req.query;
    

}



module.exports = {
    newCustomer,
    getCapturedCustomers,
    updateCustomer,
    getApprovedCustomers
}